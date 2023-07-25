import { MutableRefObject } from "react";
import { getUserId } from "@/utils/tokenControl";

const webSocketUrl = `${process.env.NEXT_PUBLIC_SOCKET_BASE_URL}/api/chatting`;

export const socketConnect = (
  ws: MutableRefObject<WebSocket | null>,
): boolean => {
  ws.current = new WebSocket(webSocketUrl);
  ws.current.onopen = () => {
    // connect success
    socketRequestMessage(ws);
    console.log("socket login");
    return true;
  };
  return false;
};

export const socketDisconnect = (ws: MutableRefObject<WebSocket | null>) => {
  if (!ws.current) return;
  ws.current.onclose = (error) => {
    // disconnect error
  };
};

export const socketRequestMessage = (
  ws: MutableRefObject<WebSocket | null>,
) => {
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

export const socketReceiveMessage = (
  ws: MutableRefObject<WebSocket | null>,
) => {
  if (!ws.current) return;
  ws.current.onmessage = (event: MessageEvent) => {
    const data = JSON.parse(event.data);
    console.log("socket receive : " + JSON.stringify(data));
  };
};

export const socketClose = (ws: MutableRefObject<WebSocket | null>) => {
  if (!ws.current) return;
  ws.current.close();
};
