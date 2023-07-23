"use client";

import MyPage from "@/api/mypage";
import Loading from "@/components/common/Loading";
import TextButton from "@/components/common/TextButton";
import EditInfo from "@/components/mypage/info/EditInfo";
import EditPwInfo from "@/components/mypage/info/EditPwInfo";
import MyInfo from "@/components/mypage/info/MyInfo";
import MyRating from "@/components/mypage/info/MyRating";
import MyReviewList from "@/components/mypage/info/MyReviewList";
import useHandleInput from "@/hooks/useHandleInput";
import { ErrorMessage } from "@/styles/page/Login";
import {
  ConfirmBox,
  EditInfoWrapper,
  EditWrapper,
  InfoWrapper,
  LoadingWrapper,
  ProfileBtn,
  TopWrapper,
  UpdateTitle,
  UpdateWrapper,
  Withdrawal,
  WithdrawalBtn,
} from "@/styles/page/MyPage/MyInfo";
import { getUserId } from "@/utils/tokenControl";
import { useMutation, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  params: { id: string };
};

export default function Info({ params: { id } }: Props) {
  const router = useRouter();
  const [isUpdateInfo, setIsUpdateInfo] = useState(false);
  const [isEditPw, setIsEditPw] = useState(false);
  const [isMyAccount, setIsMyAccount] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const initialValues = {
    profileImg: "",
    nickname: "",
    description: "",
    curPassword: "",
    newPassword: "",
    checkNewPassword: "",
  };
  const [formValues, handleChange, resetForm] = useHandleInput(initialValues);

  const { data, isLoading, refetch } = useQuery(
    ["user", id],
    () => MyPage.v1GetUser(id),
    {
      onSuccess: (data) => {
        resetForm({
          ...formValues,
          profileImg: data.profileImage || "",
          nickname: data.nickname,
          description: data.detail,
        });
      },
    },
  );

  const { data: reviews, isLoading: isLoadingReview } = useQuery(
    ["review", id],
    () => MyPage.v1GetReceivedReivew(id),
  );

  const { mutate: updateNickname } = useMutation({
    mutationFn: () => MyPage.v1UpdateNickname(id, formValues.nickname),
  });

  const { mutate: updateDesc } = useMutation({
    mutationFn: () => MyPage.v1UpdateDesc(id, formValues.description),
  });

  const { mutate: updatePassword } = useMutation({
    mutationFn: () => {
      return MyPage.v1UpdatePassword(
        id,
        formValues.curPassword,
        formValues.newPassword,
      );
    },
    onSuccess: (data) => {
      if (data.success === "fail") {
        setErrorMessage(data.errorMessage);
      } else {
        setErrorMessage("");
        setIsUpdateInfo((val) => !val);
        setIsEditPw(false);
      }
    },
  });

  const { mutate: deleteAccount } = useMutation({
    mutationFn: () => MyPage.v1DeleteAccount(id),
    onSuccess: (data) => {
      if (data.success === "true") {
        router.replace("/");
      }
    },
  });

  const { mutate: uploadProfile } = useMutation({
    mutationFn: (formData: FormData) => MyPage.v1UpdateProfile(id, formData),
    onSuccess: (data) => {
      console.log("여기", data);

      if (data.success === "true") {
        resetForm({
          ...formValues,
          profileImg: data.data.profileImage,
        });
        refetch();
      }
    },
  });

  const handleUploadProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file) {
      const formData = new FormData();
      formData.append("profileImage", file);
      uploadProfile(formData);
    }
  };

  const handleUpdatePassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isEditPw) {
      if (formValues.newPassword !== formValues.checkNewPassword) {
        setErrorMessage("신규 비밀번호를 제대로 입력해주세요.");
      } else {
        updatePassword();
      }
    } else {
      setIsEditPw((val) => !val);
    }
  };

  const handleDeleteAccount = () => {
    deleteAccount();
  };

  useEffect(() => {
    const getId = typeof window !== "undefined" && getUserId();
    setIsMyAccount(id === getId);
  }, [id]);

  if (isLoading || isLoadingReview) {
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    );
  }

  return (
    <InfoWrapper>
      {!isUpdateInfo ? (
        <>
          <MyInfo
            nickname={data.nickname}
            description={data.detail}
            profileImage={data.profileImage}
            setIsUpdateInfo={setIsUpdateInfo}
            isMyAccount={isMyAccount}
          />
          <MyRating rateAvg={data.rateAvg} reviewCount={data.reviewCount} />
          <MyReviewList />
        </>
      ) : (
        <>
          <UpdateWrapper>
            <TopWrapper>
              <ProfileBtn htmlFor="fileInput">
                <Image
                  src={data.profileImage || "/images/Profile.svg"}
                  width={50}
                  height={50}
                  alt="프로필 이미지"
                />
                <input
                  id="fileInput"
                  type="file"
                  onChange={handleUploadProfile}
                  style={{ display: "none" }}
                />
              </ProfileBtn>
              <UpdateTitle>프로필 수정</UpdateTitle>
            </TopWrapper>
            <TextButton
              text="돌아가기"
              onClick={() => {
                setIsUpdateInfo((val) => !val);
                setIsEditPw(false);
              }}
              width={80}
              height={35}
              fontSize={14}
            />
          </UpdateWrapper>
          <EditWrapper>
            {!isEditPw && (
              <>
                <EditInfo
                  name="nickname"
                  label="닉네임"
                  placeholder="닉네임을 입력하세요."
                  value={formValues.nickname}
                  onChange={handleChange}
                  fetchData={updateNickname}
                />
                <EditInfo
                  name="description"
                  label="소개"
                  placeholder="간단하게 자기소개를 해보세요."
                  value={formValues.description}
                  onChange={handleChange}
                  fetchData={updateDesc}
                />
              </>
            )}
            {isEditPw ? (
              <>
                <EditPwInfo
                  name="curPassword"
                  label="기존 비밀번호"
                  placeholder="비밀번호를 입력하세요."
                  onChange={handleChange}
                />
                <EditPwInfo
                  name="newPassword"
                  label="신규 비밀번호"
                  placeholder="비밀번호를 입력하세요."
                  onChange={handleChange}
                />
                <EditPwInfo
                  name="checkNewPassword"
                  label="신규 비밀번호 확인"
                  placeholder="비밀번호를 입력하세요."
                  onChange={handleChange}
                />

                <ConfirmBox>
                  <TextButton
                    text="변경 완료"
                    onClick={handleUpdatePassword}
                    fontSize={14}
                    width={90}
                    height={40}
                  />
                </ConfirmBox>
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
              </>
            ) : (
              <>
                <EditInfoWrapper>
                  <label>비밀번호</label>
                  <TextButton
                    text="비밀번호 변경"
                    onClick={() => {
                      setIsEditPw && setIsEditPw((val) => !val);
                    }}
                    fontSize={14}
                    width={120}
                    height={40}
                  />
                </EditInfoWrapper>
              </>
            )}
          </EditWrapper>
          <Withdrawal>
            <WithdrawalBtn onClick={handleDeleteAccount}>
              회원탈퇴
            </WithdrawalBtn>
          </Withdrawal>
        </>
      )}
    </InfoWrapper>
  );
}
