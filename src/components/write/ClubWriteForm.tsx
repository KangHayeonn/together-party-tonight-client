"use client";

import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";
import { useRouter } from "next/navigation";
import {
  ClubWriteFormWrapper,
  ClubWriteFormBox,
  ClubWriteBottom,
} from "@/styles/components/write/ClubWriteForm";
import ClubWriteTitle from "@/components/write/ClubWriteTitle";
import ClubWriteFilter from "@/components/write/ClubWriteFilter";
import ClubWriteContent from "@/components/write/ClubWriteContent";
import { ClubFormType, ClubAddressType } from "@/types/clubWrite";
import { validationClubWrite } from "@/utils/func/ClubWriteFunc";
import Api from "@/api/club";
import { searchKeywordState, searchState } from "@/recoil/search/searchState";
import RoundButton from "@/components/common/RoundButton";

const ClubWriteForm = () => {
  const router = useRouter();

  const setSearchKeyword = useSetRecoilState(searchKeywordState);
  const setSearchAddress = useSetRecoilState(searchState);

  const [clubForm, setClubForm] = useState<ClubFormType>({
    clubName: "",
    clubCategory: "",
    clubMaximum: 0,
    clubContent: "",
    clubTags: "",
    latitude: 0,
    longitude: 0,
    address: "",
    meetingDate: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);

  const createFormData = (data: ClubFormType, image: File | null) => {
    const formData = new FormData();

    if (image) {
      formData.append("images", image);
    }

    formData.append(
      "data",
      new Blob([JSON.stringify(data)], { type: "application/json" }),
    );

    return formData;
  };

  const { mutate: addClubMutation } = useMutation({
    mutationFn: (formData: FormData) => Api.v1AddClub(formData),
    onSuccess: () => {
      initClubForm();
      router.back();
    },
    onError: () => {
      // interceptor에서 공통 error 처리
    },
  });

  const onClickClubAddEvent = () => {
    if (validationClubWrite(clubForm)) {
      const formData = createFormData(clubForm, imageFile);
      addClubMutation(formData);
      initClubForm();
    }
  };

  const onClubNameChange = (title: string) => {
    setClubForm({
      ...clubForm,
      clubName: title,
    });
  };

  const onClubCategoryChange = (category: string) => {
    setClubForm({
      ...clubForm,
      clubCategory: category,
    });
  };

  const onClubTagsChange = (tags: string) => {
    setClubForm({
      ...clubForm,
      clubTags: tags,
    });
  };

  const onClubMaximumChange = (maximum: number) => {
    setClubForm({
      ...clubForm,
      clubMaximum: maximum,
    });
  };

  const onClubDateChange = (meetingDate: string) => {
    setClubForm({
      ...clubForm,
      meetingDate: meetingDate,
    });
  };

  const onClubAddressChange = ({
    address,
    latitude,
    longitude,
  }: ClubAddressType) => {
    setClubForm({
      ...clubForm,
      address: address,
      latitude: latitude,
      longitude: longitude,
    });
  };

  const onClubContentChange = (content: string) => {
    setClubForm({
      ...clubForm,
      clubContent: content,
    });
  };

  const initClubForm = () => {
    setClubForm({
      clubName: "",
      clubCategory: "",
      clubMaximum: 0,
      clubContent: "",
      clubTags: "",
      latitude: 0,
      longitude: 0,
      address: "",
      meetingDate: "",
    });
    setImageFile(null);
    setSearchAddress({
      address: {},
      address_name: "",
      address_type: "",
      road_address: {},
      x: "",
      y: "",
    });
    setSearchKeyword("");
  };

  return (
    <ClubWriteFormWrapper>
      <ClubWriteFormBox>
        <ClubWriteTitle clubInfo={clubForm} onChangeTitle={onClubNameChange} />
        <ClubWriteFilter
          onChangeCategory={onClubCategoryChange}
          onChangeTags={onClubTagsChange}
          onChangeMaximum={onClubMaximumChange}
          onChangeDate={onClubDateChange}
          onChangeAddress={onClubAddressChange}
          onChangeImage={setImageFile}
        />
        <ClubWriteContent
          clubInfo={clubForm}
          onChangeContent={onClubContentChange}
        />
        <ClubWriteBottom>
          <RoundButton
            text="모임 만들기"
            onClickEvent={onClickClubAddEvent}
            fontSize={17}
            weight={500}
            color="#fff"
            background="#0D3471"
          />
        </ClubWriteBottom>
      </ClubWriteFormBox>
    </ClubWriteFormWrapper>
  );
};

export default ClubWriteForm;
