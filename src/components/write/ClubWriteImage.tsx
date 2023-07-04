import React from "react";
import Image from "next/image";
import {
  ClubWriteImageWrapper,
  ClubWriteImageBtn,
  ClubImage,
  ImageText,
  Button,
  Line,
} from "@/styles/components/write/ClubWriteImage";

const ClubWriteImage = () => {
  const addImage = () => {
    // TODO : image file add logic
  };

  return (
    <ClubWriteImageWrapper>
      <ClubWriteImageBtn>
        <Button>삭제</Button>
        <Line />
        <Button>수정</Button>
      </ClubWriteImageBtn>
      <ClubImage>
        <Image
          src="/images/imagePlus.svg"
          width={25}
          height={25}
          alt="Image Add Icon"
          onClick={addImage}
          className="image"
        />
        <ImageText>모임 이미지를 추가해보세요</ImageText>
        <ImageText>
          모임 이미지를 추가하지 않을 경우 기본 이미지로 저장합니다
        </ImageText>
      </ClubImage>
    </ClubWriteImageWrapper>
  );
};

export default ClubWriteImage;
