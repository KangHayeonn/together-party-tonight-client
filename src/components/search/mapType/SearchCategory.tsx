import React, { useState, useEffect } from "react";
import CheckBox from "@/components/common/CheckBox";
import { SearchCategoryWrapper } from "@/styles/components/search/mapType/SearchCategory";

interface SearchCategoryProps {
  categoryList?: Array<string>;
  changeCategory?: (categoryArr: Array<string>) => void;
}

const SearchCategory = ({
  categoryList,
  changeCategory,
}: SearchCategoryProps) => {
  const [checkItems, setCheckItems] = useState<Array<string>>([]);

  useEffect(() => {
    if (changeCategory) changeCategory(checkItems);
  }, [checkItems]);

  return (
    <SearchCategoryWrapper>
      <CheckBox
        text="모두"
        changeCategory={setCheckItems}
        checked={checkItems.length > 7 ? true : false}
      />
      {categoryList &&
        categoryList.map((item, index) => {
          return (
            <CheckBox
              text={`${item}`}
              key={`category${index}`}
              changeCategory={setCheckItems}
              checked={checkItems.includes(item) ? true : false}
            />
          );
        })}
    </SearchCategoryWrapper>
  );
};

export default SearchCategory;
