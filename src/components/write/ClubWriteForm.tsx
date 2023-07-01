"use client";

import React from "react";
import {
  ClubWriteFormWrapper,
  ClubWriteFormBox,
  ClubWriteTop,
  ClubWriteCategory,
  ClubWriteTag,
  ClubWriteDetail,
  ClubWriteDetailLeft,
  ClubWriteDetailRight,
  ClubWriteContent,
  ClubWriteBottom,
  ClubWriteLabel,
  ClubWriteInput,
} from "@/styles/components/write/ClubWriteForm";

const ClubWriteForm = () => {
  return (
    <ClubWriteFormWrapper>
      <ClubWriteFormBox>
        <ClubWriteTop>
          <ClubWriteLabel className="screen-out">모임 제목</ClubWriteLabel>
          모임 제목을 입력하세요
        </ClubWriteTop>
        <ClubWriteCategory>
          <ClubWriteLabel>카테고리</ClubWriteLabel>
          <ClubWriteInput>드롭다운</ClubWriteInput>
        </ClubWriteCategory>
        <ClubWriteTag>
          <ClubWriteLabel className="screen-out">태그</ClubWriteLabel>
          태그를 입력하세요
          <ClubWriteInput>토글</ClubWriteInput>
        </ClubWriteTag>
        <ClubWriteDetail>
          <ClubWriteDetailLeft>
            <ClubWriteLabel>모집 인원</ClubWriteLabel>
            <ClubWriteInput>Number Form</ClubWriteInput>
          </ClubWriteDetailLeft>
          <ClubWriteDetailRight>
            <ClubWriteLabel>모집 일시</ClubWriteLabel>
            <ClubWriteInput>캘린더</ClubWriteInput>
          </ClubWriteDetailRight>
        </ClubWriteDetail>
        <ClubWriteContent>
          <ClubWriteLabel>모임 상세 내용</ClubWriteLabel>
          <textarea />
          <div>0/1000</div>
        </ClubWriteContent>
        <ClubWriteBottom>
          <button>모임 만들기</button>
        </ClubWriteBottom>
      </ClubWriteFormBox>
    </ClubWriteFormWrapper>
  );
};

export default ClubWriteForm;
