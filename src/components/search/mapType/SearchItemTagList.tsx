import React, { useState, useEffect, useCallback } from "react";
import {
  SearchTagListWrapper,
  SearchTagItem,
  SearchTagItemInput,
  SearchTagItemLabel,
} from "@/styles/components/search/mapType/SearchTagList";

interface SearchItemTagList {
  tagList: Array<string>;
  classType?: string | undefined;
}

const SearchItemTagList = ({ tagList, classType }: SearchItemTagList) => {
  const [newTagList, setNewTagList] = useState<Array<string>>([]);
  const [openMore, setOpenMore] = useState<boolean>(false);

  const onCloseItems = useCallback(() => {
    const tempList = tagList?.filter((item, index) => index < 7);
    setNewTagList(tempList);
  }, [tagList]);

  const onOpenItems = () => {
    setNewTagList(tagList ? tagList : []);
  };

  const onClickMore = () => {
    if (!openMore) {
      onOpenItems();
    }
    setOpenMore((open) => !open);
  };

  useEffect(() => {
    onCloseItems();
  }, [onCloseItems]);

  return (
    <SearchTagListWrapper>
      {newTagList &&
        newTagList.map((item, index) => {
          return (
            <SearchTagItem key={index}>
              <SearchTagItemInput type="checkbox" id={item} value={item} />
              <SearchTagItemLabel
                htmlFor={item}
                className={`label-tag ${classType}`}
              >
                #{item}
              </SearchTagItemLabel>
            </SearchTagItem>
          );
        })}
      {tagList?.length > 7 ? (
        <SearchTagItem onClick={onClickMore}>
          <SearchTagItemInput type="checkbox" id="more" value="more" />
          <SearchTagItemLabel htmlFor="more" className={` ${classType}`}>
            ···
          </SearchTagItemLabel>
        </SearchTagItem>
      ) : null}
    </SearchTagListWrapper>
  );
};

export default SearchItemTagList;
