import React from "react";
import DropDown from "@/components/common/DropDown";
import TextButton from "@/components/common/TextButton";
import { SearchOptionWrapper } from "@/styles/components/search/mapType/SearchOption";
// recoil
import { useRecoilState } from "recoil";
import { searchOptionsState } from "@/recoil/search/searchState";

interface SearchOptionProps {
  searchByOptions: () => void;
}

const SearchOption = ({ searchByOptions }: SearchOptionProps) => {
  const [searchOptions, setSearchOptions] = useRecoilState(searchOptionsState);

  const optionList = ["최신순", "인기순"];

  const onSearchCategoryChange = (category: string) => {
    const categoryId = category === "최신순" ? "latest" : "popular";
    setSearchOptions({
      ...searchOptions,
      sortFilter: categoryId,
    });
  };

  return (
    <SearchOptionWrapper>
      <DropDown
        defaultText="최신순"
        dropDownList={optionList}
        changeText={onSearchCategoryChange}
      />
      <TextButton
        text="옵션 적용"
        onClick={searchByOptions}
        fontSize={14}
        weight={500}
        width={100}
        height={35}
      />
    </SearchOptionWrapper>
  );
};

export default SearchOption;
