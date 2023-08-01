import React from "react";
import {
  ClubWriteTagPreviewWrapper,
  ClubWriteTagPreviewList,
  ClubWriteTagPreviewItem,
} from "@/styles/components/write/ClubWriteTagPreview";

interface ClubWriteTagPreviewProps {
  tagList: Array<string>;
  isOpen?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  setInputTag: React.Dispatch<React.SetStateAction<string>>;
}

const ClubWriteTagPreview = ({
  tagList,
  isOpen,
  setInputTag,
}: ClubWriteTagPreviewProps) => {
  const changeTag = (item: string) => {
    setInputTag(item);
  };

  return (
    <ClubWriteTagPreviewWrapper>
      <ClubWriteTagPreviewList>
        {tagList.length > 0 ? (
          tagList?.map((item, index) => {
            return (
              <ClubWriteTagPreviewItem
                key={index}
                onClick={() => changeTag(item)}
              >
                {item}
              </ClubWriteTagPreviewItem>
            );
          })
        ) : (
          <ClubWriteTagPreviewItem>
            검색 결과가 없습니다
          </ClubWriteTagPreviewItem>
        )}
      </ClubWriteTagPreviewList>
    </ClubWriteTagPreviewWrapper>
  );
};

export default ClubWriteTagPreview;
