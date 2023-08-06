import React, { useState } from "react";
import {
  SearchCommentWrapper,
  SearchCommentTitle,
  SearchCommentInputForm,
  SearchCommentInput,
  SearchCommentList,
  SearchCommentItem,
  SearchCommentTop,
  SearchCommentBottom,
  SearchCommentText,
  SearchComment,
  SearchCommentBtn,
} from "@/styles/components/search/listType/SearchItemComment";
import TextField from "@/components/common/TextField";
import TextButton from "@/components/common/TextButton";
import { commentList } from "@/utils/mock/search";
import { SearchItemCommentProps } from "../mapType/SearchItemComment";

const SearchItemComment = ({ clubId }: SearchItemCommentProps) => {
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
        <SearchCommentInput>
          <TextField
            message={message}
            onChangeText={onChangeMessage}
            height={2.2}
            fontSize={0.92}
            placeholder="댓글을 달아보세요"
          />
        </SearchCommentInput>
        <TextButton
          text="작성"
          onClick={onClickEvent}
          fontSize={16}
          background="#bdc8d6"
          color="#fff"
          weight={500}
          width={95}
          height={35}
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
                    fontSize={13}
                    background="#778DA9"
                    color="#fff"
                    weight={500}
                    width={75}
                    height={25}
                  />
                  <TextButton
                    text="답글달기"
                    onClick={onClickEvent}
                    fontSize={13}
                    background="#0D3471"
                    color="#fff"
                    weight={500}
                    width={75}
                    height={25}
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
