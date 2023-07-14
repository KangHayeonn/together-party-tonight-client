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

      if (!imageFileValid(uploadFile)) return;

      reader.onload = (e) => {
        setFile(uploadFile);
        setPreviewURL(reader.result as string);
      };

      if (uploadFile) {
        reader.readAsDataURL(uploadFile);
      }
    }
  };

  const imageFileValid = (file: File): boolean => {
    // image extension check
    const lastIndex = file?.name.lastIndexOf(".");
    if (lastIndex < 0) return false;

    const fileType =
      file?.name.substring(lastIndex + 1).toLowerCase() || undefined;
    const ALLOW_FILE_EXTENSION = "jpg,jpeg,png,svg";

    if (!fileType || !ALLOW_FILE_EXTENSION.includes(fileType)) {
      alert(
        `업로드 가능한 확장자가 아닙니다. [가능한 확장자 : ${ALLOW_FILE_EXTENSION}]`,
      );
      return false;
    }

    // image capacity check
    const imgSize = file.size;
    const ALLOW_MAX_SIZE = 2 * 1024 * 1024; // 2MB
    if (imgSize > ALLOW_MAX_SIZE) {
      alert("이미지 용량은 2MB 이내로 등록 가능합니다.");
      return false;
    }

    return true;
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
