import Image from "next/image";
import Modal from "../common/Modal";
import {
  CreatedReview,
  EditBtn,
  EditWrapper,
  InfoWrapper,
  MeetingInfo,
  ModalInner,
  RatingWrapper,
  Reviewer,
  ReviewerInfo,
  TextArea,
  TextLen,
  TextWrapper,
} from "@/styles/components/mypage/DetailModal";
import { ReviewRating } from "@/styles/components/mypage/ListItem";
import { useState } from "react";

export default function DetailModal() {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState("");

  const handleSetValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  return (
    <Modal title="모달제목">
      <ModalInner>
        <ReviewerInfo>
          <Reviewer>
            <Image
              src="/images/Profile.svg"
              width={30}
              height={30}
              alt="프로필 이미지"
            />
            &nbsp; 밍키님이 작성함
          </Reviewer>
          <CreatedReview>2022년 8월 23일</CreatedReview>
        </ReviewerInfo>
        <MeetingInfo>
          <Image
            src="/images/review.svg"
            width={130}
            height={130}
            alt="프로필 이미지"
          />
          <InfoWrapper>
            <p>
              <Image
                src="/images/locationBlack.svg"
                width={17}
                height={17}
                alt="위치 아이콘"
              />
              서울 송파구 잠실동
            </p>
            <p>
              <Image
                src="/images/clock.svg"
                width={16}
                height={16}
                alt="시간 아이콘"
              />
              2023/06/06
            </p>
          </InfoWrapper>
        </MeetingInfo>
        <EditWrapper>
          {isEdit ? (
            <>
              <RatingWrapper>
                <Image
                  src="/images/checkStar.svg"
                  width={20}
                  height={20}
                  alt="별"
                />
                <Image
                  src="/images/checkStar.svg"
                  width={20}
                  height={20}
                  alt="별"
                />
                <Image
                  src="/images/checkStar.svg"
                  width={20}
                  height={20}
                  alt="별"
                />
                <Image
                  src="/images/checkEmptyStar.svg"
                  width={20}
                  height={20}
                  alt="별"
                />
                <Image
                  src="/images/checkEmptyStar.svg"
                  width={20}
                  height={20}
                  alt="별"
                />
              </RatingWrapper>
              <EditBtn onClick={() => setIsEdit(false)}>
                <Image
                  src="/images/Check.svg"
                  width={20}
                  height={20}
                  alt="수정하기"
                />
              </EditBtn>
            </>
          ) : (
            <>
              <RatingWrapper>
                <Image
                  src="/images/SmallStar.svg"
                  width={16}
                  height={16}
                  alt="별"
                />
                <ReviewRating>4.1</ReviewRating>
              </RatingWrapper>
              <div>
                <EditBtn onClick={() => setIsEdit(true)}>
                  <Image
                    src="/images/Edit.svg"
                    width={18}
                    height={18}
                    alt="수정하기"
                  />
                </EditBtn>
                <EditBtn>
                  <Image
                    src="/images/trash.svg"
                    width={18}
                    height={18}
                    alt="삭제하기"
                  />
                </EditBtn>
              </div>
            </>
          )}
        </EditWrapper>
        <TextWrapper>
          {isEdit ? (
            <>
              <TextArea
                onChange={(e) => handleSetValue(e)}
                placeholder="리뷰 내용을 입력하세요."
              >
                {text}
              </TextArea>
              <TextLen>{text.length}/300</TextLen>
            </>
          ) : (
            <p>
              정말 좋아요!정말 좋아요!정말 좋아요!정말 좋아요!정말 좋아요!정말
              좋아요!정말 좋아요!정말 좋아요!정말 좋아요!정말 좋아요!정말
              좋아요!정말 좋아요!정말 좋아요!정말 좋아요!정말 좋아요!정말정말
              좋아요!정말 좋아요!정말 좋아요! 좋아요!정말 좋아요!정말
              좋아요!정말 좋아요!정말 좋아요!정말 좋아요!정말 좋아요!정말
              좋아요!정말 좋아요!정말 좋아요!정말 좋아요!정말 좋아요!
            </p>
          )}
        </TextWrapper>
      </ModalInner>
    </Modal>
  );
}
