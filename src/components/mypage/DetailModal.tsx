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
import { useRecoilValue } from "recoil";
import { ModalAtom } from "@/recoil/modal/atom";
import { toStringByFormatting } from "@/utils/dateFormat";

export default function DetailModal() {
  const { isMyReview, item } = useRecoilValue(ModalAtom);

  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(item.reviewContent);

  const handleSetValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  return (
    <Modal title={item.clubName}>
      <ModalInner>
        <ReviewerInfo>
          <Reviewer>
            <Image
              src="/images/Profile.svg"
              width={30}
              height={30}
              alt="프로필 이미지"
            />
            &nbsp; {item.nickName}님이 작성함
          </Reviewer>
          <CreatedReview>
            {toStringByFormatting(
              new Date(item.modifiedDate || item.createdDate),
            )}
          </CreatedReview>
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
              {toStringByFormatting(new Date(item.createdDate), "/")}
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
                <ReviewRating>{item.rating}</ReviewRating>
              </RatingWrapper>
              {isMyReview && (
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
              )}
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
            <p>{text}</p>
          )}
        </TextWrapper>
      </ModalInner>
    </Modal>
  );
}
