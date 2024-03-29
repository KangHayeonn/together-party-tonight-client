import { instanceWithToken } from "@/api";
import { chatType, chatListType, chatRoomNameType } from "@/types/chat";
const prefix = "/api/chat";

const Chat = {
  // 채팅 발송
  async v1AddChat(data: chatType) {
    try {
      const url = `${prefix}`;
      const result = await instanceWithToken.post(url, data);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 채팅 목록 조회
  async v1FetchChatList(data: chatListType) {
    try {
      const url = `${prefix}/chatLog`;
      const result = await instanceWithToken.post(url, data);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 유저간 채팅방 존재 여부 확인 (chatRoomId = 0 이면 채팅방 없음)
  async v1IsExistChatRoom(id: number) {
    try {
      const url = `${prefix}/chatRoom?otherMemberId=${id}`;
      const result = await instanceWithToken.get(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 채팅방 만들기
  async v1AddChatRoom(id: number) {
    try {
      const url = `${prefix}/chatRoom`;
      const result = await instanceWithToken.post(url, { otherMemberId: id });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 채팅방 나가기 요청
  async v1LeaveChatRoom(id: number) {
    try {
      const url = `${prefix}/chatRoom`;
      const result = await instanceWithToken.delete(url, {
        data: {
          chatRoomId: id,
        },
      });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 채팅방 목록 조회
  async v1FetchChatRoomList() {
    try {
      const url = `${prefix}/chatRoom/list`;
      const result = await instanceWithToken.get(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 채팅방 이름 변경 요청
  async v1UpdateChatRoomName(data: chatRoomNameType) {
    try {
      const url = `${prefix}/chatRoom/name`;
      const result = await instanceWithToken.post(url, data);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
};

export default Chat;
