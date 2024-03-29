"use client";

import MyPage from "@/api/mypage";
import Loading from "@/components/common/Loading";
import TextButton from "@/components/common/TextButton";
import ConfirmModal from "@/components/common/modal/ConfirmModal";
import EditInfo from "@/components/mypage/info/EditInfo";
import EditPwInfo from "@/components/mypage/info/EditPwInfo";
import MyInfo from "@/components/mypage/info/MyInfo";
import MyRating from "@/components/mypage/info/MyRating";
import MyReviewList from "@/components/mypage/info/MyReviewList";
import useHandleInput from "@/hooks/useHandleInput";
import { ToastState } from "@/recoil/common/commonState";
import {
  EditBtnWrapper,
  ImgEditLabel,
} from "@/styles/components/mypage/ReviewDetailModal";
import {
  Button,
  ClubImageUpdateBtn,
  Line,
} from "@/styles/components/write/ClubWriteImage";
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
import { useSetRecoilState } from "recoil";

type Props = {
  params: { id: string };
};

export default function Info({ params: { id } }: Props) {
  const router = useRouter();
  const [isUpdateInfo, setIsUpdateInfo] = useState(false);
  const [isEditPw, setIsEditPw] = useState(false);
  const [isMyAccount, setIsMyAccount] = useState(false);
  const [isUpdateDone, setIsUpdateDone] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isOpenSignoutModal, setIsOpenSignoutModal] = useState(false);
  const setIsOpenToast = useSetRecoilState(ToastState);

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
    ["user", id, isUpdateDone],
    () => MyPage.v1GetUser(id),
    {
      onSuccess: (data) => {
        resetForm({
          ...formValues,
          profileImg: data.profileImage || "",
          nickname: data.nickname,
          description: data.detail,
        });
        setIsUpdateDone(false);
      },
    },
  );

  const { mutate: updateNickname } = useMutation({
    mutationFn: () => MyPage.v1UpdateNickname(id, formValues.nickname),
    onSuccess: (data) => {
      if (data.success === "true") setIsUpdateDone(true);
    },
  });

  const { mutate: updateDesc } = useMutation({
    mutationFn: () => MyPage.v1UpdateDesc(id, formValues.description),
    onSuccess: (data) => {
      if (data.success === "true") setIsUpdateDone(true);
    },
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
        setIsOpenToast({
          isOpenToast: true,
          toastMsg: "비밀번호 변경이 완료되었습니다.",
        });
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

  const handleDeleteProfile = () => {
    const formData = new FormData();
    formData.append("profileImage", "");
    uploadProfile(formData);
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

  if (isLoading || !data) {
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
            userId={Number(id)}
            nickname={data.nickname}
            description={data.detail}
            profileImage={data.profileImage}
            setIsUpdateInfo={setIsUpdateInfo}
            isMyAccount={isMyAccount}
          />
          <MyRating rateAvg={data.rateAvg} reviewCount={data.reviewCount} />
          <MyReviewList userId={id} />
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
                <EditBtnWrapper>
                  {data.profileImage.includes("member_default") ? (
                    <ImgEditLabel htmlFor="fileInput">
                      <ClubImageUpdateBtn>추가</ClubImageUpdateBtn>
                    </ImgEditLabel>
                  ) : (
                    <>
                      <ImgEditLabel htmlFor="fileInput">
                        <ClubImageUpdateBtn>수정</ClubImageUpdateBtn>
                      </ImgEditLabel>
                      <Line />
                      <Button onClick={handleDeleteProfile}>삭제</Button>
                    </>
                  )}
                </EditBtnWrapper>
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
              <form>
                <EditPwInfo
                  name="curPassword"
                  label="기존 비밀번호"
                  placeholder="비밀번호를 입력하세요."
                  onChange={handleChange}
                  value={formValues.curPassword}
                />
                <EditPwInfo
                  name="newPassword"
                  label="신규 비밀번호"
                  placeholder="비밀번호를 입력하세요."
                  onChange={handleChange}
                  value={formValues.newPassword}
                />
                <EditPwInfo
                  name="checkNewPassword"
                  label="신규 비밀번호 확인"
                  placeholder="비밀번호를 입력하세요."
                  onChange={handleChange}
                  value={formValues.checkNewPassword}
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
              </form>
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
            <WithdrawalBtn onClick={() => setIsOpenSignoutModal(true)}>
              회원탈퇴
            </WithdrawalBtn>
          </Withdrawal>
        </>
      )}
      {isOpenSignoutModal && (
        <ConfirmModal
          modalTitle="정말 탈퇴 하시겠습니까?"
          modalText="탈퇴시 계정을 복구할 수 없습니다."
          onClose={setIsOpenSignoutModal}
          handleSubmit={handleDeleteAccount}
        />
      )}
    </InfoWrapper>
  );
}
