import React from "react";
import { useQuery } from "@tanstack/react-query";
import { MutableRefObject } from "react";
import { getUserId } from "@/utils/tokenControl";
import { useSetRecoilState } from "recoil";
import {
  socketAlertMsgState,
  socketChatAddState,
  socketCommentAddState,
  socketCommentDeleteState,
} from "@/recoil/socket/socketState";
import { alertUnReadCntState } from "@/recoil/alert/alertState";
import { AlertToastState } from "@/recoil/common/commonState";
// api
import Api from "@/api/alert";

const webSocketUrl = `${process.env.NEXT_PUBLIC_SOCKET_BASE_URL}/api/chatting`;

const useSocket = () => {
  const setSocketAddComment = useSetRecoilState(socketCommentAddState);
  const setSocketDeleteComment = useSetRecoilState(socketCommentDeleteState);
  const setSocketAddChat = useSetRecoilState(socketChatAddState);
  const setSocketAlertMsg = useSetRecoilState(socketAlertMsgState);
  const setUnReadAlertCnt = useSetRecoilState(alertUnReadCntState);
  const setIsOpenAlertToast = useSetRecoilState(AlertToastState);

  const { isLoading, error, data, refetch } = useQuery(
    ["alertUnreadCnt"],
    () => Api.v1GetUnReadCount(),
    {
      refetchOnWindowFocus: true,
      onSuccess: (res) => {
        if (res.data.data) {
          const { alertUnreadCount } = res.data.data;
          setUnReadAlertCnt({ unReadCnt: alertUnreadCount });
        }
      },
    },
  );

  const socketConnect = (
    ws: MutableRefObject<WebSocket | null>,
  ): boolean | void => {
    ws.current = new WebSocket(webSocketUrl);
    ws.current.onopen = () => {
      // connect success
      socketRequestMessage(ws);
      console.log("socket login");
      return true;
    };
    return false;
  };

  const socketDisconnect = (ws: MutableRefObject<WebSocket | null>) => {
    if (!ws.current) return;
    ws.current.onclose = (error) => {
      // disconnect error
      console.log("socket disconnect");
      socketConnect(ws);
    };
  };

  const socketRequestMessage = (ws: MutableRefObject<WebSocket | null>) => {
    if (!ws.current) return;
    ws.current.send(
      JSON.stringify({
        command: "login",
        data: {
          userId: getUserId(),
        },
      }),
    );
  };

  const socketReceiveMessage = (ws: MutableRefObject<WebSocket | null>) => {
    if (!ws.current) return;
    ws.current.onmessage = (event: MessageEvent) => {
      const response = JSON.parse(event.data);
      // console.log("socket receive : " + JSON.stringify(response));
      const { type, data } = response;

      if (type === "comment") {
        if (data.method === "CREATE") {
          setSocketAddComment({
            method: data.method,
            commentId: data.commentId,
            comment: data.comment,
            memberId: data.memberId,
            nickName: data.nickName,
            createdDate: data.createdDate,
            modifiedDate: data.modifiedDate,
          });
        }

        if (data.method === "DELETE") {
          setSocketDeleteComment({
            method: data.method,
            commentId: data.commentId,
          });
        }
      } else if (response.type === "chat") {
        setSocketAddChat({
          chatRoomId: data.chatRoomId,
          chatId: data.chatId,
          chat: data.chat,
          senderMemberId: data.senderMemberId,
          senderNickname: data.senderNickname,
        });
      } else {
        setSocketAlertMsg({
          alertType: data.alertType,
          alertId: data.alertId,
        });

        switch (data.alertType) {
          case "CHAT":
            setIsOpenAlertToast({
              isOpenToast: true,
              toastMsg: "새로운 채팅이 도착했습니다.",
            });
            break;
          case "LEAVE_CHATROOM":
            setIsOpenAlertToast({
              isOpenToast: true,
              toastMsg: "새로운 채팅 알람이 도착했습니다.",
            });
            break;
          case "BILLING_REQUEST":
            setIsOpenAlertToast({
              isOpenToast: true,
              toastMsg: "새로운 정산 요청이 도착했습니다.",
            });
            break;
          case "BILLING_PAY":
            setIsOpenAlertToast({
              isOpenToast: true,
              toastMsg: "정산 내역이 업데이트 되었습니다.",
            });
            break;
          case "APPLY":
            setIsOpenAlertToast({
              isOpenToast: true,
              toastMsg: "새로운 모임 신청이 있습니다.",
            });
            break;
          case "APPROVE":
            setIsOpenAlertToast({
              isOpenToast: true,
              toastMsg: "모임 신청 응답이 도착했습니다.",
            });
            break;
          default:
            break;
        }
      }

      refetch();
    };
  };

  const socketClose = (ws: MutableRefObject<WebSocket | null>) => {
    if (!ws.current) return;
    ws.current.close();
  };

  return [
    socketConnect,
    socketDisconnect,
    socketRequestMessage,
    socketReceiveMessage,
    socketClose,
  ];
};

export default useSocket;
