import React, { useState, useEffect } from "react";
import {
  SearchCategoryWrapper,
  SearchCategoryList,
  SearchCategoryItem,
  SearchCategoryItemInput,
  SearchCategoryItemLabel,
} from "@/styles/components/search/listType/SearchCategory";
import { searchCategoryList } from "@/utils/mock/search";

interface SearchCategoryProps {
  categoryList?: Array<string>;
  changeCategory?: (categoryArr: Array<string>) => void;
}

const SearchCategory = ({
  categoryList,
  changeCategory,
}: SearchCategoryProps) => {
  const [checkItems, setCheckItems] = useState<Array<string>>([]);

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const item = e.target.value;
    if (item === "모두") {
      handleAllCheck(e.target.checked);
      return;
    }

    const isCheck = e.target.checked;
    if (isCheck) {
      if (changeCategory) setCheckItems((items) => [...items, item]);
    } else {
      if (changeCategory)
        setCheckItems((items) => {
          if (items.length > 7) items.shift();
          const tempArr = items.filter((el) => el !== item);
          return tempArr;
        });
    }
  };

  const handleAllCheck = (check: boolean) => {
    if (check) {
      const tempArr: Array<string> = ["모두"];
      searchCategoryList.forEach((item) => tempArr.push(item));
      if (changeCategory) changeCategory(tempArr);
      setCheckItems(tempArr);
    } else {
      if (changeCategory) changeCategory([]);
    }
  };

  useEffect(() => {
    if (changeCategory) changeCategory(checkItems);
  }, [checkItems]);

  return (
    <SearchCategoryWrapper>
      <SearchCategoryList>
        <SearchCategoryItem>
          <SearchCategoryItemInput
            type="checkbox"
            id="all"
            value="모두"
            onChange={(e) => handleCheck(e)}
            checked={checkItems.length > 7 ? true : false}
          />
          <SearchCategoryItemLabel htmlFor="all" className="label-tag">
            전체보기
          </SearchCategoryItemLabel>
        </SearchCategoryItem>
        {categoryList &&
          categoryList.map((item, index) => {
            return (
              <SearchCategoryItem key={index}>
                <SearchCategoryItemInput
                  type="checkbox"
                  id={item}
                  value={`${item}`}
                  onChange={(e) => handleCheck(e)}
                  checked={checkItems.includes(item) ? true : false}
                />
                <SearchCategoryItemLabel htmlFor={item} className="label-tag">
                  {item}
                </SearchCategoryItemLabel>
              </SearchCategoryItem>
            );
          })}
      </SearchCategoryList>
    </SearchCategoryWrapper>
  );
};

export default SearchCategory;
