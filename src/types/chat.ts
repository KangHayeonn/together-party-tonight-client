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
  dateTime: Date | null;
  message: string;
}

export interface ChatListType {
  chatList: Array<ChatResponseType>;
}

export interface ChatRequestType {
  chatMsg: string;
  chatRoomId: number;
}
