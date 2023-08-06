import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  SearchTagListWrapper,
  SearchTagItem,
  SearchTagItemInput,
  SearchTagItemLabel,
} from "@/styles/components/search/mapType/SearchTagList";
import { useRecoilState } from "recoil";
import { searchOptionsState } from "@/recoil/search/searchState";
// api
import Api from "@/api/search";

const SearchTagList = () => {
  const [searchOptions, setSearchOptions] = useRecoilState(searchOptionsState);
  const [newTagList, setNewTagList] = useState<Array<string>>([]);
  const [checkTagList, setCheckTagList] = useState<Array<string>>([]);

  let tagList: Array<string> = [];
  const { isLoading, error, data } = useQuery(
    ["searchTagsRandom"],
    () => Api.v1SearchTagsPopular(),
    {
      refetchOnWindowFocus: false,
      onSuccess: (res) => {
        tagList = res?.data.data;
        onCloseItems();
      },
      enabled: !!tagList,
    },
  );

  const onCloseItems = () => {
    const tempList = tagList?.filter((item, index) => index < 8);
    setNewTagList(tempList);
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
    const tempList = checkTagList.filter(
      (c, index) => checkTagList.indexOf(c) === index,
    );
    setSearchOptions({
      ...searchOptions,
      tags: tempList.toString(),
    });
  }, [checkTagList]);

  useEffect(() => {
    setNewTagList([]);
    setCheckTagList([]);
    onCloseItems();
  }, []);

  return (
    <SearchTagListWrapper>
      {newTagList &&
        newTagList.map((item, index) => {
          return (
            <SearchTagItem key={`tags${index}`}>
              <SearchTagItemInput
                type="checkbox"
                id={`tags${index}`}
                value={item}
                onChange={(e) => handleCheckTag(e)}
              />
              <SearchTagItemLabel
                htmlFor={`tags${index}`}
                className="label-tag"
              >
                {item}
              </SearchTagItemLabel>
            </SearchTagItem>
          );
        })}
    </SearchTagListWrapper>
  );
};

export default SearchTagList;
