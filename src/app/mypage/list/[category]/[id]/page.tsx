"use client";

import MyPage from "@/api/mypage";
import DropDown from "@/components/common/DropDown";
import MeetingItem from "@/components/mypage/list/MeetingItem";
import ReviewItem from "@/components/mypage/list/ReviewItem";
import {
  ConvertApplyMeetingFilterName,
  ConvertMyMeetingFilterName,
  ConvertSortName,
  MypageListFilterList,
  mypageCategory,
} from "@/constant";
import { ModalAtom } from "@/recoil/modal/atom";
import { CalculateSelect } from "@/recoil/mypage/atom";
import { MeetingInfo } from "@/styles/components/mypage/ReviewDetailModal";
import { MypageListWrapper } from "@/styles/page/MyPage/ListLayout";
import {
  MeetingTitle,
  MeetingWrapper,
  SelectWrapper,
  TotalMeeting,
} from "@/styles/page/MyPage/Meeting";
import { IClubItem, IReviewItem } from "@/types/mypage";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

type Props = {
  params: { category: string; id: string };
};

export default function Category({ params: { category, id } }: Props) {
  const ulRef = useRef<HTMLUListElement>(null);
  const { isOpenReviewModal } = useRecoilValue(ModalAtom);
  const [selected, setSelected] = useRecoilState(CalculateSelect);
  const [total, setTotal] = useState(0);
  const [sortBy, setSortBy] = useState("createdDate,DESC");
  const [filterBy, setFilterBy] = useState("ALL");
  const [curList, setCurList] = useState<IClubItem[] | IReviewItem[]>([]);

  const fetchListData = (pageParam = 0, sortBy: string, filterBy: string) => {
    if (category === "review") {
      return MyPage.v1GetMyReview(pageParam, 5, sortBy);
    } else if (category === "meeting") {
      return MyPage.v1GetMyMeeting(filterBy, id, pageParam, 5);
    } else if (category === "apply") {
      return MyPage.v1GetApplyMeeting(filterBy, pageParam, 5);
    }
  };

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ["list", category, sortBy, filterBy, isOpenReviewModal],
    ({ pageParam = 0 }) => fetchListData(pageParam, sortBy, filterBy),
    {
      getNextPageParam: (lastPage) => {
        if (!lastPage || lastPage.page >= lastPage.totalPages - 1) {
          return undefined;
        }
        return lastPage.page + 1;
      },
    },
  );

  const handleSelect = (value: string) => {
    setSelected(value);
  };

  const handleScroll = () => {
    if (!isLoading && ulRef.current) {
      const { scrollTop, clientHeight, scrollHeight } = ulRef.current;
      const isScrolledToBottom = scrollTop + clientHeight >= scrollHeight;

      if (isScrolledToBottom && hasNextPage) {
        fetchNextPage();
      }
    }
  };

  const handleSortAndFilterChange = ({ newSortBy = "", newFilterBy = "" }) => {
    newSortBy && setSortBy(newSortBy);
    newFilterBy && setFilterBy(newFilterBy);
  };

  const handleClickSelect = (item: string) => {
    if (category === "meeting") {
      handleSortAndFilterChange({
        newFilterBy: ConvertMyMeetingFilterName[item],
      });
    } else if (category === "apply") {
      handleSortAndFilterChange({
        newFilterBy: ConvertApplyMeetingFilterName[item],
      });
    } else if (category === "review") {
      handleSortAndFilterChange({ newSortBy: ConvertSortName[item] });
    }
  };

  useEffect(() => {
    if (!!data && data.pages[0] !== undefined) {
      setTotal(data.pages[0]?.totalElements || 0);
      if (category === "review") {
        const list = data.pages.map((obj) => obj.reviewList).flat();
        setCurList(list);
      } else if (category === "meeting") {
        const list = data.pages.map((obj) => obj.myOwnedList).flat();
        setCurList(list);
      } else if (category === "apply") {
        const list = data.pages.map((obj) => obj.myAppliedList).flat();
        setCurList(list);
      }
    }
  }, [category, data]);

  useEffect(() => {
    if (ulRef.current) {
      ulRef.current.addEventListener("scroll", handleScroll);

      return () => {
        ulRef.current?.removeEventListener("scroll", handleScroll);
      };
    }
  }, [ulRef, hasNextPage]);

  return (
    <MeetingWrapper>
      <MeetingTitle>{mypageCategory[category]}</MeetingTitle>
      <MeetingInfo>
        {category === "calculate" ? (
          <SelectWrapper>
            <button
              className={selected === "myMeeting" ? "selected" : ""}
              onClick={() => {
                handleSelect("myMeeting");
              }}
            >
              내 모임 3
            </button>
            <button
              className={selected === "applyMeeting" ? "selected" : ""}
              onClick={() => {
                handleSelect("applyMeeting");
              }}
            >
              신청 모임 2
            </button>
          </SelectWrapper>
        ) : (
          <TotalMeeting>총 {total}개</TotalMeeting>
        )}
        <DropDown
          defaultText={category === "review" ? "최신 순" : "전체"}
          dropDownList={MypageListFilterList[category]}
          changeText={handleClickSelect}
          width={110}
        />
      </MeetingInfo>
      <MypageListWrapper ref={ulRef}>
        {category === "review" ? (
          <>
            {curList.length > 0 &&
              curList.map((item, idx) => (
                <ReviewItem
                  key={idx}
                  isMyReview={true}
                  item={item as IReviewItem}
                />
              ))}
          </>
        ) : (
          <>
            {curList.length > 0 &&
              curList.map((item, idx) => (
                <MeetingItem
                  key={idx}
                  item={item as IClubItem}
                  category={category}
                />
              ))}
          </>
        )}
      </MypageListWrapper>
    </MeetingWrapper>
  );
}
