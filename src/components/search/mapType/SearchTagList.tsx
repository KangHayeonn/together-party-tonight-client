import React, { useState, useEffect, useCallback } from "react";
import {
  SearchTagListWrapper,
  SearchTagItem,
  SearchTagItemInput,
  SearchTagItemLabel,
} from "@/styles/components/search/mapType/SearchTagList";
import { useRecoilState } from "recoil";
import { searchOptionsState } from "@/recoil/search/searchState";

interface SearchTagList {
  tagList: Array<string>;
}

const SearchTagList = ({ tagList }: SearchTagList) => {
  const [searchOptions, setSearchOptions] = useRecoilState(searchOptionsState);
  const [newTagList, setNewTagList] = useState<Array<string>>([]);
  const [openMore, setOpenMore] = useState<boolean>(false);
  const [checkTagList, setCheckTagList] = useState<Array<string>>([]);

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

  const handleCheckTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    const item = e.target.value;

    if (isChecked) {
      setCheckTagList((items) => [...items, item]);
    } else {
      setCheckTagList((items) => items.filter((el) => el !== item));
    }
  };

  useEffect(() => {
    setSearchOptions({
      ...searchOptions,
      tags: checkTagList.toString(),
    });
  }, [checkTagList]);

  useEffect(() => {
    onCloseItems();
  }, [onCloseItems]);

  return (
    <SearchTagListWrapper>
      {newTagList &&
        newTagList.map((item, index) => {
          return (
            <SearchTagItem key={item}>
              <SearchTagItemInput
                type="checkbox"
                id={item}
                value={item}
                onChange={(e) => handleCheckTag(e)}
              />
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
