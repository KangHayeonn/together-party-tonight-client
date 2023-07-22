import { MutableRefObject } from "react";

const webSocketUrl = "ws://220.65.243.133:8080/chatting";

export const socketConnect = (
  ws: MutableRefObject<WebSocket | null>,
): boolean => {
  ws.current = new WebSocket(webSocketUrl);
  ws.current.onopen = () => {
    // connect success
    socketRequestMessage(ws);
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
        userId: 1,
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
