import React, { useState } from "react";
import Image from "next/image";
import { useQuery, useMutation } from "@tanstack/react-query";
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
import { useRecoilState } from "recoil";
import { alertUnReadCntState } from "@/recoil/alert/alertState";

const Alert = () => {
  const [alertAll, setAlertAll] = useState<boolean>(true);
  const [options, setOptions] = useState<getAlertListType>({
    isAllOrNotRead: true,
    lastSeq: -1,
    listCount: 20,
  });
  const [alertList, setAlertList] = useState<Array<IAlertList>>([]);
  const [unReadAlertCnt, setUnReadAlertCnt] =
    useRecoilState(alertUnReadCntState);

  const { isLoading, error, data, refetch } = useQuery(
    ["alertList"],
    () => Api.v1GetAlertList(options),
    {
      onSuccess: (res) => {
        if (res.data.data) {
          const { alertList } = res.data.data;
          setAlertList(alertList);
        }
      },
    },
  );

  const { mutate: checkAlert } = useMutation({
    mutationFn: (id: number) => Api.v1ReadAlert(id),
    onSuccess: (res) => {
      setUnReadAlertCnt({
        unReadCnt: unReadAlertCnt.unReadCnt - 1,
      });
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
    <AlertWrapper>
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
      <AlertContents>
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
