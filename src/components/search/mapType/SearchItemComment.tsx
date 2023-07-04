import React, { useState } from "react";
import TextField from "@/components/common/TextField";
import TextButton from "@/components/common/TextButton";
import {
  SearchCommentWrapper,
  SearchCommentTitle,
  SearchCommentInputForm,
  SearchCommentList,
  SearchCommentItem,
  SearchCommentTop,
  SearchCommentBottom,
  SearchCommentText,
  SearchComment,
  SearchCommentBtn,
} from "@/styles/components/search/mapType/SearchItemComment";
import { commentList } from "@/utils/mock/search";

const SearchItemComment = () => {
  const [message, setMessage] = useState<string>("");

  const onChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const onClickEvent = () => {
    // TODO : comment add api logic
  };

  return (
    <SearchCommentWrapper>
      <SearchCommentTitle>댓글</SearchCommentTitle>
      <SearchCommentInputForm>
        <TextField
          message={message}
          onChangeText={onChangeMessage}
          height={1.85}
          fontSize={0.875}
          placeholder="댓글을 달아보세요"
        />
        <TextButton
          text="작성"
          onClick={onClickEvent}
          fontSize={14}
          background="#bdc8d6"
          color="#fff"
          weight={500}
          width={75}
          height={30}
        />
      </SearchCommentInputForm>
      <SearchCommentList>
        {commentList.map((item, index) => {
          return (
            <SearchCommentItem key={index}>
              <SearchCommentTop>
                <SearchCommentText>{item.nickName}</SearchCommentText>
                <SearchCommentText>{item.updatedDate}</SearchCommentText>
              </SearchCommentTop>
              <SearchCommentBottom>
                <SearchComment>{item.comment}</SearchComment>
                <SearchCommentBtn>
                  <TextButton
                    text="삭제"
                    onClick={onClickEvent}
                    fontSize={12}
                    background="#778DA9"
                    color="#fff"
                    weight={500}
                    width={75}
                    height={20}
                  />
                  <TextButton
                    text="답글달기"
                    onClick={onClickEvent}
                    fontSize={12}
                    background="#0D3471"
                    color="#fff"
                    weight={500}
                    width={75}
                    height={20}
                  />
                </SearchCommentBtn>
              </SearchCommentBottom>
            </SearchCommentItem>
          );
        })}
      </SearchCommentList>
    </SearchCommentWrapper>
  );
};

export default SearchItemComment;