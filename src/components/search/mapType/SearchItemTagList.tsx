import React, { useState, useEffect, useCallback } from "react";
import {
  SearchTagListWrapper,
  SearchTagItem,
  SearchTagItemInput,
  SearchTagItemLabel,
} from "@/styles/components/search/mapType/SearchTagList";
import { useRecoilValue } from "recoil";
import { clubDetailState } from "@/recoil/club/clubState";

interface SearchItemTagList {
  classType?: string | undefined;
}

const SearchItemTagList = ({ classType }: SearchItemTagList) => {
  const [newTagList, setNewTagList] = useState<Array<string>>([]);
  const clubDetail = useRecoilValue(clubDetailState);

  const onCloseItems = () => {
    const tempList = clubDetail.clubTags?.filter((item, index) => index < 8);
    setNewTagList(tempList);
  };

  useEffect(() => {
    onCloseItems();
  }, [clubDetail]);

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
    </SearchTagListWrapper>
  );
};

export default SearchItemTagList;
