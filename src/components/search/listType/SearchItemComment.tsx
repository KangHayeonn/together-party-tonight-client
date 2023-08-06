import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
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
  SearchResultEmpty,
  SearchLoadingWrapper,
} from "@/styles/components/search/listType/SearchItemComment";
import TextField from "@/components/common/TextField";
import TextButton from "@/components/common/TextButton";
import Loading from "@/components/common/Loading";
import { SearchItemCommentProps } from "../mapType/SearchItemComment";
import { getUserId } from "@/utils/tokenControl";
import { CommentType } from "@/types/comment";
import { elapsedTime } from "@/utils/dateFormat";
import ConfirmModal from "@/components/common/modal/ConfirmModal";
// api
import Api from "@/api/comment";
// recoil
import { useRecoilValue } from "recoil";
import {
  socketCommentAddState,
  socketCommentDeleteState,
} from "@/recoil/socket/socketState";

const SearchItemComment = ({ clubId }: SearchItemCommentProps) => {
  const socketComment = useRecoilValue(socketCommentAddState);
  const socketDeleteComment = useRecoilValue(socketCommentDeleteState);
  const [message, setMessage] = useState<string>("");
  const [commentList, setCommentList] = useState<Array<CommentType>>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [commentId, setCommentId] = useState<number>(-1);
  const memberId = Number(
    (typeof window !== "undefined" && Number(getUserId())) || -1,
  );

  const onChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleOpenModal = () => {
    document.body.style.overflow = "hidden";
    setIsOpenModal(true);
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
    setCommentId(commentId);
    handleOpenModal();
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
        <SearchCommentInput>
          <TextField
            message={message}
            onChangeText={onChangeMessage}
            handleEvent={onClickEvent}
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
        {commentList.length > 0 ? (
          commentList.map((item, index) => {
            return (
              <SearchCommentItem key={index}>
                <SearchCommentTop>
                  <SearchCommentText>{item.nickName}</SearchCommentText>
                  <SearchCommentText>
                    {" "}
                    {elapsedTime(item.modifiedDate)}
                  </SearchCommentText>
                </SearchCommentTop>
                <SearchCommentBottom>
                  <SearchComment>{item.comment}</SearchComment>
                  <SearchCommentBtn>
                    {item.memberId === memberId && (
                      <SearchCommentBtn>
                        <TextButton
                          text="삭제"
                          onClick={() => onClickDelete(item.commentId)}
                          fontSize={13}
                          background="#0D3471"
                          color="#fff"
                          weight={500}
                          width={75}
                          height={25}
                        />
                      </SearchCommentBtn>
                    )}
                  </SearchCommentBtn>
                </SearchCommentBottom>
              </SearchCommentItem>
            );
          })
        ) : (
          <SearchResultEmpty>검색 결과가 없습니다</SearchResultEmpty>
        )}
      </SearchCommentList>
      {isOpenModal && (
        <ConfirmModal
          modalTitle="댓글을 삭제하시겠습니까?"
          modalText="댓글을 삭제하면 작성 기록이 사라집니다."
          onClose={setIsOpenModal}
          handleSubmit={() => deleteComment(commentId)}
        />
      )}
    </SearchCommentWrapper>
  );
};

export default SearchItemComment;
