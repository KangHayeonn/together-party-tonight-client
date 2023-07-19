"use client";

import React, { useState } from "react";
import {
  ClubWriteFormWrapper,
  ClubWriteFormBox,
  ClubWriteBottom,
} from "@/styles/components/write/ClubWriteForm";
import ClubWriteTitle from "@/components/write/ClubWriteTitle";
import ClubWriteFilter from "@/components/write/ClubWriteFilter";
import ClubWriteContent from "@/components/write/ClubWriteContent";
import RoundButton from "@/components/common/RoundButton";

export interface ClubFormType {
  clubName: string;
  clubCategory: string;
  clubMaximum: number;
  clubContent: string;
  clubTags: string;
  latitude: number;
  longitude: number;
  address: string;
  meetingDate: string; // DataTime
}
export interface ClubAddressType {
  address: string;
  latitude: number;
  longitude: number;
}

const ClubWriteForm = () => {
  const [clubForm, setClubForm] = useState<ClubFormType>({
    clubName: "",
    clubCategory: "",
    clubMaximum: 1,
    clubContent: "",
    clubTags: "",
    latitude: 0,
    longitude: 0,
    address: "",
    meetingDate: "",
  });

  const onClickClubAddEvent = () => {
    // TODO : club add api logic
    initClubForm();
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
      clubMaximum: 1,
      clubContent: "",
      clubTags: "",
      latitude: 0,
      longitude: 0,
      address: "",
      meetingDate: "",
    });
  };

  return (
    <ClubWriteFormWrapper>
      <ClubWriteFormBox>
        <ClubWriteTitle clubInfo={clubForm} onChangeTitle={onClubNameChange} />
        <ClubWriteFilter />
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
