import React, { useState, useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import {
  ChatList,
  ChatItem,
  ChatDateBox,
  ChatDate,
  ChatContentBox,
  ChatTime,
  ChatContent,
} from "@/styles/components/chat/ChatRoomForm";
import { getUserId } from "@/utils/tokenControl";
import { getDateFormat, getTimeFormat } from "@/utils/dateFormat";
// api
import Api from "@/api/chat";
// recoil
import { useRecoilValue, useRecoilState } from "recoil";
import {
  checkChatRoomState,
  chatListState,
  chatRoomListState,
} from "@/recoil/chat/chatState";
import { socketChatAddState } from "@/recoil/socket/socketState";

interface ChatMessageListProps {
  chatWrap: React.RefObject<HTMLDivElement>;
}
const ChatMessageList = ({ chatWrap }: ChatMessageListProps) => {
  const checkChatRoom = useRecoilValue(checkChatRoomState);
  const chatRooms = useRecoilValue(chatRoomListState);
  const [chatList, setChatList] = useRecoilState(chatListState);
  const socketChat = useRecoilValue(socketChatAddState);
  const userId = typeof window !== "undefined" && Number(getUserId());
  const [seq, setSeq] = useState<number>(-1);

  const fetchChatList = async (lastSeq: number) => {
    return Api.v1FetchChatList({
      chatRoomId: checkChatRoom.chatRoomId,
      lastChatSeq: lastSeq,
      listCount: 20,
    });
  };

  const {
    data: searchData,
    isLoading: searchLoading,
    refetch: getChatList,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ["getChatMessageList"],
    ({ pageParam = seq }) => fetchChatList(pageParam),
    {
      getNextPageParam: (res) => {
        if (res.data.code === 200) {
          const { chatList } = res.data.data;
          if (chatList.length >= 20) {
            return chatList[19].chatId;
          }
          return undefined;
        }
      },
    },
  );

  useEffect(() => {
    if (!!searchData && searchData.pages !== undefined) {
      if (searchData.pages[0]) {
        const { data } = searchData.pages[0];
        if (data.code !== 200) return;
      }
      const list = searchData.pages
        .map((obj) => obj.data.data?.chatList)
        .flat();
      if (list) {
        setChatList({
          chatList: list,
        });
      }
    }
  }, [searchData]);

  const handleScroll = () => {
    if (!searchLoading && chatWrap.current) {
      const { scrollTop, clientHeight, scrollHeight } = chatWrap.current;
      const isScrolledToBottom = -1 * scrollTop + clientHeight >= scrollHeight; // 스크롤이 가장 아래로

      if (isScrolledToBottom && hasNextPage) {
        fetchNextPage();
      }
    }
  };

  useEffect(() => {
    if (chatWrap.current) {
      chatWrap.current.addEventListener("scroll", handleScroll);

      return () => {
        chatWrap.current?.removeEventListener("scroll", handleScroll);
      };
    }
  }, [chatWrap, hasNextPage]);

  useEffect(() => {
    setSeq(-1);
    getChatList();
  }, [checkChatRoom]);

  useEffect(() => {
    setSeq(-1);
    getChatList();
  }, [chatRooms, socketChat]);

  return (
    <ChatList ref={chatWrap}>
      {chatList.chatList &&
        chatList.chatList.map((item, index) => {
          return (
            <ChatItem key={index}>
              {(index === 0 || index % 4 === 0) && (
                <ChatDateBox>
                  <ChatDate>{getDateFormat(item.dateTime)}</ChatDate>
                </ChatDateBox>
              )}
              <ChatContentBox
                className={`${item.senderMemberId !== userId && "opposite"}`}
              >
                <ChatTime>{getTimeFormat(item.dateTime)}</ChatTime>
                <ChatContent>{item.message}</ChatContent>
              </ChatContentBox>
            </ChatItem>
          );
        })}
    </ChatList>
  );
};

export default ChatMessageList;
