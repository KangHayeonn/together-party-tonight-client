import { atom } from "recoil";
import {
  socketAlertMsgType,
  socketChatAddType,
  socketCommentAddMsgType,
  socketCommentDeleteMsgType,
} from "@/types/socket";

const socketCommentAddState = atom<socketCommentAddMsgType>({
  key: "socketCommentAddState",
  default: {
    method: "",
    commentId: -1,
    comment: "",
    memberId: -1,
    nickName: "",
    createdDate: new Date(),
    modifiedDate: new Date(),
  },
});

const socketCommentDeleteState = atom<socketCommentDeleteMsgType>({
  key: "socketCommentDeleteState",
  default: {
    method: "",
    commentId: -1,
  },
});

const socketChatAddState = atom<socketChatAddType>({
  key: "socketChatAddState",
  default: {
    chatRoomId: -1,
    chatId: -1,
    chat: "",
    senderMemberId: -1,
    senderNickname: "",
  },
});

const socketAlertMsgState = atom<socketAlertMsgType>({
  key: "socketAlertMsgState",
  default: {
    alertType: "",
    alertId: -1,
  },
});

export {
  socketCommentAddState,
  socketCommentDeleteState,
  socketChatAddState,
  socketAlertMsgState,
};
