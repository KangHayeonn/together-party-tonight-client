import React, { useState, useEffect, useCallback } from "react";
import {
  SearchTagListWrapper,
  SearchTagItem,
  SearchTagItemInput,
  SearchTagItemLabel,
} from "@/styles/components/search/mapType/SearchTagList";

interface SearchTagList {
  tagList: Array<string>;
}

const SearchTagList = ({ tagList }: SearchTagList) => {
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
            <SearchTagItem key={item}>
              <SearchTagItemInput type="checkbox" id={item} value={item} />
              <SearchTagItemLabel htmlFor={item} className="label-tag">
                {item}
              </SearchTagItemLabel>
            </SearchTagItem>
          );
        })}
      {tagList?.length > 7 ? (
        <SearchTagItem onClick={onClickMore}>
          <SearchTagItemInput type="checkbox" id="more" value="more" />
          <SearchTagItemLabel htmlFor="more">···</SearchTagItemLabel>
        </SearchTagItem>
      ) : null}
    </SearchTagListWrapper>
  );
};

export default SearchTagList;
