import { atom } from "recoil";
import { ChatRoomListType, ChatListType, ChatRoomType } from "@/types/chat";

const chatRoomListState = atom<ChatRoomListType>({
  key: "chatRoomListState",
  default: {
    chatRoomList: [],
  },
});

const chatListState = atom<ChatListType>({
  key: "chatListState",
  default: {
    chatList: [],
  },
});

const checkChatRoomState = atom<ChatRoomType>({
  key: "checkChatRoomState",
  default: {
    chatRoomId: 0,
    chatRoomName: "",
    dateTime: new Date(),
    latestMessage: "",
  },
});

export { chatRoomListState, chatListState, checkChatRoomState };
