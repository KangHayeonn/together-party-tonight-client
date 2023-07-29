import { atom } from "recoil";
import {
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

export { socketCommentAddState, socketCommentDeleteState };
