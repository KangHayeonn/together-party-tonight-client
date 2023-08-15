import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
  SearchResultEmpty,
} from "@/styles/components/search/listType/SearchList";
import DropDown from "@/components/common/DropDown";
import SearchItemTagList from "@/components/search/listType/SearchItemTagList";
import { categoryToKorMap } from "@/utils/categoryFormat";
import { elapsedTime } from "@/utils/dateFormat";
// recoil
import { useRecoilState, useRecoilValue } from "recoil";
import {
  searchOptionsState,
  searchResponseState,
} from "@/recoil/search/searchState";

interface SearchListProps {
  ulRef: React.MutableRefObject<HTMLDivElement | null>;
}
const SearchList = ({ ulRef }: SearchListProps) => {
  const router = useRouter();
  const [searchOptions, setSearchOptions] = useRecoilState(searchOptionsState);
  const searchResponse = useRecoilValue(searchResponseState);

  const optionList = ["최신순", "인기순"];

  const onSearchCategoryChange = (category: string) => {
    const categoryId = category === "최신순" ? "latest" : "popular";
    setSearchOptions({
      ...searchOptions,
      sortFilter: categoryId,
    });
  };

  return (
    <SearchListWrapper>
      <SearchListBox>
        <SearchListBoxTop>
          <SearchListTitle>
            총 {searchResponse.clubList.length}건
          </SearchListTitle>
          <DropDown
            defaultText="최신순"
            dropDownList={optionList}
            changeText={onSearchCategoryChange}
          />
        </SearchListBoxTop>
        <SearchListBoxBottom ref={ulRef}>
          {searchResponse.clubList.length > 0 ? (
            searchResponse.clubList.map((item, index) => {
              return (
                <SearchListItem
                  key={index}
                  onClick={() => router.push(`/search/list/${item.clubId}`)}
                >
                  <SearchListItemTop>
                    <SearchItemLeft>
                      <SearchItemText className="category">
                        {categoryToKorMap.get(item.clubCategory)}
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
                        {item.ratingAvg.toFixed(1)} 리뷰 {item.reviewCnt}
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
                        {item.nickName}
                      </SearchItemText>
                      <SearchItemText className="date">
                        {elapsedTime(item.modifiedDate || new Date())}
                      </SearchItemText>
                      <SearchItemText className="address">
                        {item.address}
                      </SearchItemText>
                    </SearchItemLeft>
                    <SearchItemRight>
                      <SearchItemText className="status">
                        {item.isRecruit ? "모집중" : "모집완료"}
                      </SearchItemText>
                      <SearchItemText>
                        <Image
                          src="/images/user.svg"
                          width={23}
                          height={21}
                          alt="User Icon"
                        />
                      </SearchItemText>
                      <SearchItemText className="status">
                        {item.memberCount}/{item.clubMaximum}
                      </SearchItemText>
                    </SearchItemRight>
                  </SearchListItemBottom>
                </SearchListItem>
              );
            })
          ) : (
            <SearchResultEmpty>검색 결과가 없습니다</SearchResultEmpty>
          )}
        </SearchListBoxBottom>
      </SearchListBox>
    </SearchListWrapper>
  );
};

export default SearchList;
