import React from "react";
import { MutableRefObject } from "react";
import { getUserId } from "@/utils/tokenControl";
import { useSetRecoilState } from "recoil";
import {
  socketCommentAddState,
  socketCommentDeleteState,
} from "@/recoil/socket/socketState";

const webSocketUrl = `${process.env.NEXT_PUBLIC_SOCKET_BASE_URL}/api/chatting`;

const useSocket = () => {
  const setSocketAddComment = useSetRecoilState(socketCommentAddState);
  const setSocketDeleteComment = useSetRecoilState(socketCommentDeleteState);

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
      console.log("socket receive : " + JSON.stringify(response));
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
      } else {
      }
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
