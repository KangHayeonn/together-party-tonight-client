import { atom } from "recoil";
import { CommentListType } from "@/types/comment";

const commentListState = atom<CommentListType>({
  key: "commentListState",
  default: {
    commentList: [],
  },
});

export { commentListState };
