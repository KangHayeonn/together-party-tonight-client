export interface socketCommentAddMsgType {
  method: string;
  commentId: number;
  comment: string;
  memberId: number;
  nickName: string;
  createdDate: Date;
  modifiedDate: Date;
}

export interface socketCommentDeleteMsgType {
  method: string;
  commentId: number;
}

export interface socketChatAddType {
  chatRoomId: number;
  chatId: number;
  chat: string;
  senderMemberId: number;
  senderNickname: string;
}
