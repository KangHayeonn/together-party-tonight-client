import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import {
  ClubWriteTagWrapper,
  ClubWriteToggle,
  ToggleText,
  TagListWrapper,
  TagItemWrapper,
  TagInputWrapper,
  TagInput,
} from "@/styles/components/write/ClubWriteTag";
import { ClubWriteLabel } from "@/styles/components/write/ClubWriteForm";
import { TagItemProps, ClubWriteTagProps } from "@/types/club";
import ClubWriteTagPreview from "@/components/write/ClubWriteTagPreview";
import Api from "@/api/search";

const TagItem = ({ keyword, onClickDelete }: TagItemProps) => {
  const [hoverCloseBtn, setHoverCloseBtn] = useState<boolean>(false);

  const onClickEvent = () => {
    onClickDelete(keyword);
  };

  return (
    <TagItemWrapper>
      <span>{keyword}</span>
      <Image
        src={`${
          !hoverCloseBtn ? "/images/closeWhite.svg" : "/images/closeDark.svg"
        }`}
        width={16}
        height={16}
        onMouseOver={() => setHoverCloseBtn(true)}
        onMouseLeave={() => setHoverCloseBtn(false)}
        onClick={onClickEvent}
        alt="Close Button"
      />
    </TagItemWrapper>
  );
};

const ClubWriteTag = ({ changeTags }: ClubWriteTagProps) => {
  const [onToggle, setOnToggle] = useState<boolean>(false);
  const [tagList, setTagList] = useState<Array<string>>([]);
  const [inputKeyword, setInputKeyword] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [tagsPreview, setTagsPreview] = useState<Array<string>>([]);

  const { refetch } = useQuery(
    ["getTagList"],
    () => Api.v1SearchTags(inputKeyword),
    {
      refetchOnWindowFocus: false,
      onSuccess: (res) => {
        if (res.data.data) {
          const tags = res.data.data;
          if (inputKeyword !== "") setTagsPreview(tags);
        }
      },
    },
  );

  const activeEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setTagList((tags) => [...tags, inputKeyword]);
      setInputKeyword("");
    }
  };

  const deleteTag = (keyword: string) => {
    setTagList(tagList.filter((tag) => tag !== keyword));
  };

  useEffect(() => {
    refetch();
  }, [inputKeyword]);

  useEffect(() => {
    changeTags(tagList.toString());
  }, [tagList]);

  return (
    <ClubWriteTagWrapper>
      <ClubWriteLabel className="screen-out">태그</ClubWriteLabel>
      <TagListWrapper>
        {tagList &&
          tagList.map((item, index) => {
            return (
              <TagItem key={index} keyword={item} onClickDelete={deleteTag} />
            );
          })}
      </TagListWrapper>
      {tagList?.length < 5 ? (
        <TagInputWrapper
          onMouseOver={() => {
            if (!isOpen) setOnToggle(true);
          }}
          onMouseLeave={() => setOnToggle(false)}
        >
          <TagInput
            type="text"
            value={inputKeyword}
            placeholder="태그를 입력하세요 (최대 5개)"
            onChange={(e) => setInputKeyword(e.target.value)}
            onKeyDown={(e) => activeEnter(e)}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setIsOpen(false)}
          />
          {isOpen && (
            <ClubWriteTagPreview
              isOpen={setIsOpen}
              tagList={tagsPreview}
              setInputTag={setInputKeyword}
            />
          )}
          {!isOpen && onToggle && (
            <ClubWriteToggle>
              <ToggleText>엔터를 통해 태그를 등록할 수 있습니다.</ToggleText>
              <ToggleText>등록된 태그를 클릭하면 삭제됩니다.</ToggleText>
            </ClubWriteToggle>
          )}
        </TagInputWrapper>
      ) : null}
    </ClubWriteTagWrapper>
  );
};

export default ClubWriteTag;
