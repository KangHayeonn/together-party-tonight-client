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

const Alert = () => {
  const [alertAll, setAlertAll] = useState<boolean>(true);
  const [options, setOptions] = useState<getAlertListType>({
    isAllOrNotRead: true,
    lastSeq: -1,
    listCount: 20,
  });
  const [alertList, setAlertList] = useState<Array<IAlertList>>([]);

  /*
  const { isLoading, error, data, refetch } = useQuery(
    ["alertList"],
    () => Api.v1GetAlertList(options),
    {
      refetchOnWindowFocus: true,
      onSuccess: (res) => {
        if (res.data.data) {
          const { alertList } = res.data.data;
          setAlertList(alertList);
        }
      },
    },
  );*/

  const { mutate: checkAlert } = useMutation({
    mutationFn: (id: number) => Api.v1ReadAlert(id),
    onSuccess: (res) => {
      // refetch();
    },
  });

  const { mutate: deleteAlert } = useMutation({
    mutationFn: (id: number) => Api.v1DeleteAlert(id),
    onSuccess: (res) => {
      // refetch();
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
                  className={`${item.checkStatue ? "disabled" : ""}`}
                >
                  <AlertItemTop>
                    <AlertItemText>{item.alertContent}</AlertItemText>
                    {!item.checkStatue ? (
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
