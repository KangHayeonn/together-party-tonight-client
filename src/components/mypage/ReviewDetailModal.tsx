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
} from "@/styles/components/mypage/ReviewDetailModal";
import { ReviewRating } from "@/styles/components/mypage/ListItem";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { ModalAtom } from "@/recoil/modal/atom";
import { toStringByFormatting } from "@/utils/dateFormat";
import { useMutation, useQuery } from "@tanstack/react-query";
import MyPage from "@/api/mypage";
import { LoadingWrapper, ProfileBtn } from "@/styles/page/MyPage/MyInfo";
import Loading from "../common/Loading";

export default function DetailModal() {
  const { isMyReview, reviewId } = useRecoilValue(ModalAtom);
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState("");
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewImg, setReviewImg] = useState("");
  const [reviewFile, setReviewFile] = useState<File | undefined>();

  const { data, isLoading, refetch } = useQuery(["review", reviewId], () =>
    MyPage.v1GetReviewDetail(reviewId),
  );

  const handleSetValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleRatingClick = (index: number) => {
    setReviewRating(index + 1);
  };

  const handleEditReview = () => {
    const formData = new FormData();
    const jsonString = JSON.stringify({
      reviewId: reviewId,
      rating: reviewRating,
      reviewContent: text,
    });
    formData.append(
      "data",
      new Blob([jsonString], { type: "application/json" }),
    );
    if (reviewFile) {
      formData.append("image", reviewFile);
    }
    editReview(formData);
    setIsEdit(false);
  };

  const { mutate: editReview } = useMutation(
    (formData: FormData) => MyPage.v1UpdateReview(formData),
    {
      onSuccess: (res) => {
        if (res.success === "true") refetch();
      },
    },
  );

  const handleUploadReviewImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    const reader = new FileReader();

    reader.onloadend = () => {
      setReviewImg(reader.result?.toString() || "");
    };

    if (file) {
      reader.readAsDataURL(file);
      setReviewFile(file);
      // const formData = new FormData();
      // formData.append("image", file);
    }
  };

  useEffect(() => {
    if (!isLoading && data) {
      setText(data.reviewContent);
      setReviewRating(data.rating);
      setReviewImg(data.image);
    }
  }, [data, isLoading]);

  if (isLoading || !data) {
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    );
  }

  return (
    <Modal title={data.clubName}>
      <ModalInner>
        <ReviewerInfo>
          <Reviewer>
            <Image
              src="/images/Profile.svg"
              width={30}
              height={30}
              alt="프로필 이미지"
            />
            &nbsp; {data.nickname}님이 작성함
          </Reviewer>
          <CreatedReview>
            {toStringByFormatting(
              new Date(data.modifiedDate || data.createdDate),
            )}
          </CreatedReview>
        </ReviewerInfo>
        <MeetingInfo>
          <ProfileBtn htmlFor="fileInput">
            <Image src={reviewImg} width={130} height={130} alt="리뷰 이미지" />
            <input
              id="fileInput"
              type="file"
              onChange={handleUploadReviewImg}
              style={{ display: "none" }}
              disabled={!isEdit}
            />
          </ProfileBtn>
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
              {toStringByFormatting(new Date(data.meetingDate), "/")}
            </p>
          </InfoWrapper>
        </MeetingInfo>
        <EditWrapper>
          {isEdit ? (
            <>
              <RatingWrapper>
                {[...Array(5)].map((_, index) => (
                  <Image
                    key={index}
                    src={
                      index < reviewRating
                        ? "/images/checkStar.svg"
                        : "/images/checkEmptyStar.svg"
                    }
                    width={20}
                    height={20}
                    alt="별"
                    onClick={() => handleRatingClick(index)}
                  />
                ))}
              </RatingWrapper>
              <EditBtn onClick={handleEditReview}>
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
                <ReviewRating>{data.rating}</ReviewRating>
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
                value={text}
              />
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
