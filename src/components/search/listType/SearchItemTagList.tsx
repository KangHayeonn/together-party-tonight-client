import React, { useState, useEffect, useCallback } from "react";
import {
  SearchTagListWrapper,
  SearchTagItem,
  SearchTagItemLabel,
} from "@/styles/components/search/listType/SearchTagList";

interface SearchItemTagList {
  tagList: Array<string>;
  classType?: string | undefined;
}

const SearchItemTagList = ({ tagList, classType }: SearchItemTagList) => {
  const [newTagList, setNewTagList] = useState<Array<string>>([]);

  const onCloseItems = useCallback(() => {
    const tempList = tagList?.filter((item, index) => index < 7);
    setNewTagList(tempList);
  }, [tagList]);

  useEffect(() => {
    onCloseItems();
  }, [onCloseItems]);

  return (
    <SearchTagListWrapper>
      {newTagList &&
        newTagList.map((item, index) => {
          return (
            <SearchTagItem key={index}>
              <SearchTagItemLabel className={`label-tag ${classType}`}>
                #{item}
              </SearchTagItemLabel>
            </SearchTagItem>
          );
        })}
    </SearchTagListWrapper>
  );
};

export default SearchItemTagList;
