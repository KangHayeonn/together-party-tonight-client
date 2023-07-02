import React from "react";
import {
  SearchItemBtnWrapper,
  SearchItemBtnBox,
} from "@/styles/components/search/listType/SearchItemBtn";
import TextButton from "@/components/common/TextButton";

const SearchItemBtn = () => {
  const onClickClubApply = () => {
    // TODO : club apply api logic
  };

  const onClickChat = () => {
    // TODO : chat api logic
  };

  return (
    <SearchItemBtnWrapper>
      <SearchItemBtnBox>
        <TextButton
          text="신청하기"
          onClick={onClickClubApply}
          fontSize={18}
          background="#778da9"
          color="#fff"
          weight={600}
          width={140}
          height={40}
        />
        <TextButton
          text="채팅하기"
          onClick={onClickChat}
          fontSize={18}
          background="#778da9"
          color="#fff"
          weight={600}
          width={140}
          height={40}
        />
      </SearchItemBtnBox>
    </SearchItemBtnWrapper>
  );
};

export default SearchItemBtn;
