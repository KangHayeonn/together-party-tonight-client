import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
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
  SearchResultEmpty,
  SearchLoadingWrapper,
} from "@/styles/components/search/mapType/SearchItemComment";
import Loading from "@/components/common/Loading";
import { CommentType } from "@/types/comment";
import { getUserId } from "@/utils/tokenControl";
import { elapsedTime } from "@/utils/dateFormat";
// api
import Api from "@/api/comment";
// recoil
import { useRecoilValue } from "recoil";
import {
  socketCommentAddState,
  socketCommentDeleteState,
} from "@/recoil/socket/socketState";

interface SearchItemCommentProps {
  clubId: number;
}

const SearchItemComment = ({ clubId }: SearchItemCommentProps) => {
  const socketComment = useRecoilValue(socketCommentAddState);
  const socketDeleteComment = useRecoilValue(socketCommentDeleteState);
  const [message, setMessage] = useState<string>("");
  const [commentList, setCommentList] = useState<Array<CommentType>>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const memberId = Number(getUserId() || -1);

  const onChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const { data, isLoading } = useQuery(
    ["commentList"],
    () => Api.v1GetComment(clubId),
    {
      refetchOnWindowFocus: true,
      onSuccess: (res) => {
        if (res.data.data) {
          const comments = res.data.data;
          setCommentList(comments);
        }
      },
    },
  );

  const { mutate: addComment } = useMutation({
    mutationFn: () =>
      Api.v1AddComment({
        clubId: clubId,
        commentContent: message,
      }),
  });

  const { mutate: deleteComment } = useMutation({
    mutationFn: (commentId: number) => Api.v1DeleteComment(commentId),
  });

  const onClickEvent = async () => {
    if (!isLoggedIn) {
      alert("댓글은 로그인 후 등록 가능합니다.");
      return;
    }
    await addComment();
    setMessage("");
  };

  const onClickDelete = (commentId: number) => {
    deleteComment(commentId);
  };

  useEffect(() => {
    if (memberId > 0) {
      setIsLoggedIn(true);
    }

    return () => {
      Api.v1LeaveComment(clubId);
    };
  }, []);

  useEffect(() => {
    if (socketComment.method === "CREATE") {
      setCommentList((comments) => [
        ...comments,
        {
          commentId: socketComment.commentId,
          memberId: socketComment.memberId,
          nickName: socketComment.nickName,
          clubId: clubId,
          comment: socketComment.comment,
          createdDate: socketComment.createdDate,
          modifiedDate: socketComment.modifiedDate,
        },
      ]);
    }

    if (socketDeleteComment.method === "DELETE") {
      setCommentList((comments) =>
        comments.filter(
          (item) => item.commentId !== socketDeleteComment.commentId,
        ),
      );
    }
  }, [socketComment, socketDeleteComment]);

  if (isLoading || !data) {
    return (
      <SearchLoadingWrapper>
        <Loading />
      </SearchLoadingWrapper>
    );
  }

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
        {commentList.length > 0 ? (
          commentList.map((item, index) => {
            return (
              <SearchCommentItem key={index}>
                <SearchCommentTop>
                  <SearchCommentText className="nickname">
                    {item.nickName}
                  </SearchCommentText>
                  <SearchCommentText>
                    {elapsedTime(item.modifiedDate)}
                  </SearchCommentText>
                </SearchCommentTop>
                <SearchCommentBottom>
                  <SearchComment>{item.comment}</SearchComment>
                  {item.memberId === memberId && (
                    <SearchCommentBtn>
                      <TextButton
                        text="삭제"
                        onClick={() => onClickDelete(item.commentId)}
                        fontSize={12}
                        background="#0D3471"
                        color="#fff"
                        weight={500}
                        width={75}
                        height={20}
                      />
                    </SearchCommentBtn>
                  )}
                </SearchCommentBottom>
              </SearchCommentItem>
            );
          })
        ) : (
          <SearchResultEmpty>검색 결과가 없습니다</SearchResultEmpty>
        )}
      </SearchCommentList>
    </SearchCommentWrapper>
  );
};

export default SearchItemComment;
