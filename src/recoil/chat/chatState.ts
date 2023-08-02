import { atom } from "recoil";
import {
  ChatRoomListType,
  ChatListType,
  ChatRoomType,
  CreateChatRoomType,
} from "@/types/chat";

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

const createChatRoomState = atom<CreateChatRoomType>({
  key: "createChatRoomState",
  default: {
    nickName: "",
    otherMemberId: -1,
  },
});

export {
  chatRoomListState,
  chatListState,
  checkChatRoomState,
  createChatRoomState,
};
