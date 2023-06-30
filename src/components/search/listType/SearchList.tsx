import React from "react";
import Image from "next/image";
import {
  SearchListWrapper,
  SearchListBox,
  SearchListBoxTop,
  SearchListBoxBottom,
  SearchItemLeft,
  SearchItemRight,
  SearchItemText,
  SearchListTitle,
  SearchListItem,
  SearchListItemTop,
  SearchListItemContent,
  SearchListItemTag,
  SearchListItemBottom,
} from "@/styles/components/search/listType/SearchList";
import DropDown from "@/components/common/DropDown";
import SearchItemTagList from "@/components/search/listType/SearchItemTagList";
import { clubList } from "@/utils/mock/search";

const SearchList = () => {
  return (
    <SearchListWrapper>
      <SearchListBox>
        <SearchListBoxTop>
          <SearchListTitle>총 {clubList.length}건</SearchListTitle>
          <DropDown />
        </SearchListBoxTop>
        <SearchListBoxBottom>
          {clubList &&
            clubList.map((item, index) => {
              return (
                <SearchListItem key={index}>
                  <SearchListItemTop>
                    <SearchItemLeft>
                      <SearchItemText className="category">
                        {item.clubCategory}
                      </SearchItemText>
                      <SearchItemText className="title">
                        {item.clubName}
                      </SearchItemText>
                    </SearchItemLeft>
                    <SearchItemRight>
                      <Image
                        src="/images/star.svg"
                        width={20}
                        height={20}
                        alt="평점"
                      />
                      <SearchItemText className="review">
                        {item.ratingAvg} 리뷰 {item.reviewCnt}
                      </SearchItemText>
                    </SearchItemRight>
                  </SearchListItemTop>
                  <SearchListItemContent>
                    {item.clubContent}
                  </SearchListItemContent>
                  <SearchListItemTag>
                    <SearchItemTagList
                      tagList={item.clubTags}
                      classType="secondary"
                    />
                  </SearchListItemTag>
                  <SearchListItemBottom>
                    <SearchItemLeft>
                      <SearchItemText className="nick-name">
                        lydia
                      </SearchItemText>
                      <SearchItemText className="date">5분전</SearchItemText>
                      <SearchItemText className="address">
                        {item.address}
                      </SearchItemText>
                    </SearchItemLeft>
                    <SearchItemRight>
                      <SearchItemText className="status">모집중</SearchItemText>
                      <SearchItemText>
                        <Image
                          src="/images/user.svg"
                          width={23}
                          height={21}
                          alt="User Icon"
                        />
                      </SearchItemText>
                      <SearchItemText className="status">1/4</SearchItemText>
                    </SearchItemRight>
                  </SearchListItemBottom>
                </SearchListItem>
              );
            })}
        </SearchListBoxBottom>
      </SearchListBox>
    </SearchListWrapper>
  );
};

export default SearchList;
