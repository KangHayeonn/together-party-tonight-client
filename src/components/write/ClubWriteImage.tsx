import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ClubWriteImageWrapper,
  ClubWriteImageBtn,
  ClubImage,
  ClubImageInput,
  ImageText,
  Button,
  ClubImageUpdateBtn,
  Line,
} from "@/styles/components/write/ClubWriteImage";

const ClubWriteImage = () => {
  const [file, setFile] = useState<File | undefined>();
  const [previewURL, setPreviewURL] = useState<string | null>("");

  const addImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO : image file add logic
    e.preventDefault();

    if (e.target.files) {
      const uploadFile = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        setFile(uploadFile);
        setPreviewURL(reader.result as string);
      };

      if (uploadFile) {
        reader.readAsDataURL(uploadFile);
      }
    }
  };

  const deleteImage = () => {
    setFile(undefined);
    setPreviewURL("");
  };

  return (
    <ClubWriteImageWrapper>
      <ClubWriteImageBtn>
        <Button onClick={deleteImage}>삭제</Button>
        <Line />
        <label htmlFor="clubImageUpload">
          <ClubImageUpdateBtn>수정</ClubImageUpdateBtn>
        </label>
        <ClubImageInput
          type="file"
          id="clubImageUpload"
          accept="image/*"
          onChange={addImage}
        />
      </ClubWriteImageBtn>
      {previewURL ? (
        <Image
          src={previewURL as string}
          alt="previewImage"
          width={365}
          height={202}
        />
      ) : (
        <ClubImage>
          <label htmlFor="clubImageUpload">
            <Image
              src="/images/imagePlus.svg"
              width={25}
              height={25}
              alt="Image Add Icon"
              className="image"
            />
          </label>
          <ClubImageInput
            type="file"
            id="clubImageUpload"
            accept="image/*"
            onChange={addImage}
          />
          <ImageText>모임 이미지를 추가해보세요</ImageText>
          <ImageText>
            모임 이미지를 추가하지 않을 경우 기본 이미지로 저장합니다
          </ImageText>
        </ClubImage>
      )}
    </ClubWriteImageWrapper>
  );
};

export default ClubWriteImage;
