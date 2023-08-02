export interface chatType {
  chatMsg: string;
  chatRoomId: number;
}

export interface chatListType {
  chatRoomId: number;
  lastChatSeq: number;
  listCount: number;
}

export interface ChatRoomType {
  chatRoomId: number;
  chatRoomName: string;
  dateTime: Date;
  latestMessage: string;
}

export interface ChatRoomListType {
  chatRoomList: Array<ChatRoomType>;
}

export interface ChatResponseType {
  chatId: number;
  dateTime: Date;
  message: string;
  senderMemberId: number;
  senderNickname: string;
}

export interface ChatListType {
  chatList: Array<ChatResponseType>;
}

export interface ChatRequestType {
  chatMsg: string;
  chatRoomId: number;
}

export interface chatRoomNameType {
  chatRoomId: number;
  chatRoomName: string;
}

export interface CreateChatRoomType {
  nickName: string;
  otherMemberId: number;
}
