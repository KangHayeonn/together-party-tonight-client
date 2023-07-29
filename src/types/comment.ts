export interface CommentType {
  commentId: number;
  memberId: number;
  nickName: string;
  clubId: number;
  comment: string;
  createdDate: Date;
  modifiedDate: Date;
}

export interface CommentListType {
  commentList: Array<CommentType>;
}
