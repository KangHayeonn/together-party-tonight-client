import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useQuery, useMutation, useInfiniteQuery } from "@tanstack/react-query";
import {
  AlertWrapper,
  AlertTitle,
  AlertTabs,
  AlertTab,
  AlertContents,
  AlertList,
  AlertItem,
  AlertItemTop,
  AlertItemBottom,
  AlertItemText,
} from "@/styles/components/alert/Alert";
import { elapsedTime } from "@/utils/dateFormat";
import { IAlertList } from "@/types/alert";
// api
import Api from "@/api/alert";
import { getAlertListType } from "@/types/alert";
// recoil
import { useSetRecoilState } from "recoil";
import { alertUnReadCntState } from "@/recoil/alert/alertState";

interface AlertProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Alert = ({ setIsOpen }: AlertProps) => {
  const alertWrap = useRef<HTMLDivElement>(null);
  const alertContentRef = useRef<HTMLDivElement>(null);
  const [alertAll, setAlertAll] = useState<boolean>(true);
  const [options, setOptions] = useState<getAlertListType>({
    isAllOrNotRead: true,
    lastSeq: -1,
    listCount: 20,
  });
  const [alertList, setAlertList] = useState<Array<IAlertList>>([]);
  const setUnReadAlertCnt = useSetRecoilState(alertUnReadCntState);

  const clickWrap = (e: MouseEvent) => {
    if (!alertWrap.current?.contains(e.target as Node)) {
      closeAlert();
    }
  };

  const closeAlert = () => {
    setIsOpen((val) => !val);
  };

  const { refetch: fetchUnReadAlert } = useQuery(
    ["alertUnreadCnt"],
    () => Api.v1GetUnReadCount(),
    {
      onSuccess: (res) => {
        if (res.data.data) {
          const { alertUnreadCount } = res.data.data;
          setUnReadAlertCnt({ unReadCnt: alertUnreadCount });
        }
      },
      enabled: false,
    },
  );

  const fetchAlertList = async (lastSeq: number) => {
    setOptions({
      ...options,
      lastSeq: lastSeq,
    });
    return Api.v1GetAlertList({ ...options, lastSeq: lastSeq });
  };

  const {
    data: searchData,
    isLoading: searchLoading,
    refetch,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ["getAlertList"],
    ({ pageParam = -1 }) => fetchAlertList(pageParam),
    {
      getNextPageParam: (res) => {
        if (res.data.code === 200) {
          const { alertList } = res.data.data;
          if (alertList.length >= 20) {
            return alertList[19].alertId;
          }
          return undefined;
        }
      },
    },
  );

  useEffect(() => {
    if (!!searchData && searchData.pages !== undefined) {
      if (searchData.pages[0]) {
        const { data } = searchData.pages[0];
        if (data.code !== 200) return;
      }
      const list = searchData.pages
        .map((obj) => obj.data.data?.alertList)
        .flat();
      if (list) {
        setAlertList(list);
        fetchUnReadAlert();
      }
    }
  }, [searchData]);

  const handleScroll = () => {
    if (!searchLoading && alertContentRef.current) {
      const { scrollTop, clientHeight, scrollHeight } = alertContentRef.current;
      const isScrolledToBottom = scrollTop + clientHeight >= scrollHeight; // 스크롤이 가장 아래로

      if (isScrolledToBottom && hasNextPage) {
        fetchNextPage();
      }
    }
  };

  useEffect(() => {
    if (alertContentRef.current) {
      alertContentRef.current.addEventListener("scroll", handleScroll);

      return () => {
        alertContentRef.current?.removeEventListener("scroll", handleScroll);
      };
    }
  }, [alertContentRef, hasNextPage]);

  const { mutate: checkAlert } = useMutation({
    mutationFn: (id: number) => Api.v1ReadAlert(id),
    onSuccess: (res) => {
      refetch();
    },
  });

  const { mutate: deleteAlert } = useMutation({
    mutationFn: (id: number) => Api.v1DeleteAlert(id),
    onSuccess: (res) => {
      refetch();
    },
  });

  const getAllAlert = () => {
    setAlertAll(true);
    setOptions({
      ...options,
      isAllOrNotRead: true,
    });
  };

  const getUnReadAlert = () => {
    setAlertAll(false);
    setOptions({
      ...options,
      isAllOrNotRead: false,
    });
  };

  useEffect(() => {
    refetch();
  }, [alertAll]);

  useEffect(() => {
    document.addEventListener("click", clickWrap);

    return () => {
      document.removeEventListener("click", clickWrap);
    };
  }, []);

  const formatAlertContent = (content: string, alertType: string) => {
    const newContent = JSON.parse(content);
    let contentResult = "";

    switch (alertType) {
      case "CHAT":
        contentResult = `${newContent.nickName}님에게 채팅이 도착했습니다.`;
        break;
      case "LEAVE_CHATROOM":
        contentResult = `${newContent.leaveMemberNickname}님이 채팅방을 나가셨습니다.`;
        break;
      case "BILLING_REQUEST":
        contentResult = `${newContent.clubName}에서 ${newContent.price}원 정산 요청이 있습니다.`;
        break;
      case "BILLING_PAY":
        contentResult = `${newContent.clubName}의 ${newContent.nickName}님이 정산 완료하였습니다.`;
        break;
      case "APPLY":
        contentResult = `${newContent.nickName}님이 ${newContent.clubName}모임을 신청하였습니다.`;
        break;
      case "APPROVE":
        contentResult = `${newContent.clubName}모임에 ${
          newContent.approve ? "수락되었습니다." : "거절되었습니다."
        }`;
        break;
      default:
        break;
    }

    return contentResult;
  };

  return (
    <AlertWrapper ref={alertWrap}>
      <AlertTitle>알림</AlertTitle>
      <AlertTabs>
        <AlertTab
          className={`${alertAll ? "check" : ""}`}
          onClick={() => getAllAlert()}
        >
          모두
        </AlertTab>
        <AlertTab
          className={`${!alertAll ? "check" : ""}`}
          onClick={() => getUnReadAlert()}
        >
          읽지않음
        </AlertTab>
      </AlertTabs>
      <AlertContents ref={alertContentRef}>
        <AlertList>
          {alertList &&
            alertList.map((item, index) => {
              return (
                <AlertItem
                  key={`alert${index}`}
                  className={`${item.checkStatus ? "disabled" : ""}`}
                >
                  <AlertItemTop>
                    <AlertItemText>
                      {formatAlertContent(item.alertContent, item.alertType)}
                    </AlertItemText>
                    {!item.checkStatus ? (
                      <Image
                        src={"/images/emailSuccess.svg"}
                        width={15}
                        height={12}
                        alt="Alert Check Icon"
                        onClick={() => checkAlert(item.alertId)}
                      />
                    ) : (
                      <Image
                        src={"/images/checkDisabled.svg"}
                        width={15}
                        height={12}
                        alt="Alert Disabled Icon"
                        className="disabled"
                      />
                    )}
                    <Image
                      src={"/images/emailFail.svg"}
                      width={15}
                      height={12}
                      alt="Alert Delete Icon"
                      onClick={() => deleteAlert(item.alertId)}
                    />
                  </AlertItemTop>
                  <AlertItemBottom>
                    <span>{elapsedTime(item.alertCreateDateTime)}</span>
                  </AlertItemBottom>
                </AlertItem>
              );
            })}
        </AlertList>
      </AlertContents>
    </AlertWrapper>
  );
};

export default Alert;
