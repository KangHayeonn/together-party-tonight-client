import Image from "next/image";
import Modal from "../common/Modal";
import {
  CreatedReview,
  EditBtn,
  EditBtnWrapper,
  EditWrapper,
  ImgEditLabel,
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
import { ReviewRating, ReviewText } from "@/styles/components/mypage/ListItem";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ModalAtom } from "@/recoil/modal/atom";
import { toStringByFormatting } from "@/utils/dateFormat";
import { useMutation, useQuery } from "@tanstack/react-query";
import MyPage from "@/api/mypage";
import { LoadingWrapper, ProfileBtn } from "@/styles/page/MyPage/MyInfo";
import Loading from "../common/Loading";
import { isEmptyObj } from "@/utils";
import {
  Button,
  ClubImageUpdateBtn,
  Line,
} from "@/styles/components/write/ClubWriteImage";

export default function DetailModal() {
  const setIsOpen = useSetRecoilState(ModalAtom);
  const { isMyReview, reviewId, clubItem } = useRecoilValue(ModalAtom);
  const [id, setId] = useState(reviewId);
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState("");
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewImg, setReviewImg] = useState<string>("");

  const [reviewFile, setReviewFile] = useState<File | undefined>();
  const [reviewData, setReviewData] = useState({
    clubId: 0,
    clubName: "",
    nickname: "",
    modifiedDate: "",
    createdDate: "",
    meetingDate: "",
    rating: 0,
  });

  const { isLoading, refetch } = useQuery(
    ["review"],
    () => {
      return MyPage.v1GetReviewDetail(id);
    },
    {
      enabled: false,
      onSuccess: (data) => {
        setReviewData(data);
        setText(data.reviewContent);
        setReviewRating(data.rating);
        setReviewImg(data.image);
        // const imgFile = await MyPage.urlToFileObject(data.image, "image");
        // setReviewFile(imgFile);
      },
    },
  );

  const handleDelImg = () => {
    setReviewImg("");
    setReviewFile(undefined);
  };

  const handleSetValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleRatingClick = (index: number) => {
    setReviewRating(index + 1);
  };

  const handleEditReview = () => {
    const formData = new FormData();
    const jsonString = JSON.stringify({
      ...(id === -1 ? { clubId: reviewData.clubId } : { reviewId: id }),
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
    id === -1 ? addReview(formData) : editReview(formData);
    setIsEdit(false);
  };

  const { mutate: addReview } = useMutation(
    (formData: FormData) => MyPage.v1AddReview(formData),
    {
      onSuccess: (res) => {
        if (res.success === "true") {
          setId(res.data.reviewId);
        }
      },
    },
  );

  const { mutate: editReview } = useMutation((formData: FormData) =>
    MyPage.v1UpdateReview(formData),
  );

  const { mutate: deleteReview } = useMutation(
    (id: number) => MyPage.v1DeleteReview(id),
    {
      onSuccess: (res) => {
        if (res.success === "true") {
          setIsOpen((val) => ({ ...val, isOpenReviewModal: false }));
        }
      },
    },
  );

  const handleUploadReviewImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    const reader = new FileReader();

    reader.onloadend = () => {
      setReviewImg(reader.result as string);
    };

    if (file) {
      reader.readAsDataURL(file);
      setReviewFile(file);
    }
  };

  const getReviewImg = () => {
    const isDefaultReviewImg =
      !reviewImg || reviewImg.includes("review_default");

    if (isEdit && isDefaultReviewImg) {
      return "/images/defaultPlusReview.svg";
    } else {
      return reviewImg || "/images/defaultReview.svg";
    }
  };

  useEffect(() => {
    if (!isEmptyObj(clubItem)) {
      setReviewData({
        clubId: clubItem.clubId,
        clubName: clubItem.clubName,
        nickname: "",
        modifiedDate: clubItem.modifiedDate,
        createdDate: clubItem.createdDate,
        meetingDate: clubItem.meetingDate,
        rating: 0,
      });
      setIsEdit(true);
    }
  }, [clubItem]);

  useEffect(() => {
    if (id !== -1) refetch();
    if (reviewImg) {
      console.log("있네있어");
    }
  }, []);

  if (isLoading && id !== -1) {
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    );
  }

  return (
    <Modal title={reviewData.clubName}>
      <ModalInner>
        {isEmptyObj(clubItem) && (
          <ReviewerInfo>
            <Reviewer>
              <Image
                src="/images/Profile.svg"
                width={30}
                height={30}
                alt="프로필 이미지"
              />
              &nbsp; {reviewData.nickname}님이 작성함
            </Reviewer>
            <CreatedReview>
              {toStringByFormatting(
                new Date(reviewData.modifiedDate || reviewData.createdDate),
              )}
            </CreatedReview>
          </ReviewerInfo>
        )}

        <MeetingInfo>
          <div>
            <ProfileBtn htmlFor="fileInput">
              <Image
                src={getReviewImg()}
                width={130}
                height={130}
                alt="리뷰 이미지"
              />
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleUploadReviewImg}
                style={{ display: "none" }}
                disabled={!isEdit}
              />
            </ProfileBtn>
            {isEdit && (
              <EditBtnWrapper>
                <Button onClick={handleDelImg}>삭제</Button>
                <Line />
                <ImgEditLabel htmlFor="fileInput">
                  <ClubImageUpdateBtn>수정</ClubImageUpdateBtn>
                </ImgEditLabel>
              </EditBtnWrapper>
            )}
          </div>

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
              {toStringByFormatting(new Date(reviewData.meetingDate), "/")}
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
                  alt="리뷰 저장"
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
                <ReviewRating>{reviewRating.toFixed(1)}</ReviewRating>
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
                      onClick={() => deleteReview(id)}
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
                maxLength={300}
                onChange={(e) => handleSetValue(e)}
                placeholder="리뷰 내용을 입력하세요."
                value={text}
              />
              <TextLen>{text.length}/300</TextLen>
            </>
          ) : (
            <ReviewText>{text}</ReviewText>
          )}
        </TextWrapper>
      </ModalInner>
    </Modal>
  );
}
