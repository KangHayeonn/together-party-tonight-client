"use client";

import MyPage from "@/api/mypage";
import DropDown from "@/components/common/DropDown";
import MeetingItem from "@/components/mypage/list/MeetingItem";
import ReviewItem from "@/components/mypage/list/ReviewItem";
import {
  ConvertApplyMeetingFilterName,
  ConvertCalcApply,
  ConvertCalcMyMeeting,
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
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect, useMemo, useRef, useState } from "react";

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
  const [filterText, setFilterText] = useState("전체");
  const [curList, setCurList] = useState<IClubItem[] | IReviewItem[]>([]);
  const checkCalcObj = useMemo(() => {
    return {
      isCalMeeting: category === "calculate" && selected === "meeting",
      isCalApply: category === "calculate" && selected === "apply",
    };
  }, [category, selected]);

  const fetchListData = (pageParam = 0, sortBy: string, filterBy: string) => {
    if (category === "review") {
      return MyPage.v1GetMyReview(pageParam, 5, sortBy);
    } else if (category === "meeting" || checkCalcObj.isCalMeeting) {
      return MyPage.v1GetMyMeeting(filterBy, id, pageParam, 5);
    } else if (category === "apply" || checkCalcObj.isCalApply) {
      return MyPage.v1GetApplyMeeting(filterBy, pageParam, 5);
    }
  };

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ["list", category, sortBy, filterBy, selected],
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
      setFilterText(item);
      handleSortAndFilterChange({
        newFilterBy: ConvertMyMeetingFilterName[item],
      });
    } else if (category === "apply") {
      setFilterText(item);
      handleSortAndFilterChange({
        newFilterBy: ConvertApplyMeetingFilterName[item],
      });
    } else if (category === "review") {
      setFilterText(item);
      handleSortAndFilterChange({ newSortBy: ConvertSortName[item] });
    } else if (category === "calculate") {
      setFilterText(item);
      if (selected === "meeting") {
        handleSortAndFilterChange({ newFilterBy: ConvertCalcMyMeeting[item] });
      } else {
        handleSortAndFilterChange({ newFilterBy: ConvertCalcApply[item] });
      }
    }
  };

  useEffect(() => {
    if (!!data && data.pages[0] !== undefined) {
      setTotal(data.pages[0]?.totalElements || 0);
      if (category === "review") {
        const list = data.pages.map((obj) => obj.reviewList).flat();
        setCurList(list);
      } else if (category === "meeting" || checkCalcObj.isCalMeeting) {
        const list = data.pages.map((obj) => obj.myOwnedList).flat();
        setCurList(list);
      } else if (category === "apply" || checkCalcObj.isCalApply) {
        const list = data.pages.map((obj) => obj.myAppliedList).flat();
        setCurList(list);
      }
    }
  }, [category, checkCalcObj, data]);

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
      {category === "calculate" && (
        <SelectWrapper>
          <button
            className={selected === "meeting" ? "selected" : ""}
            onClick={() => {
              setSelected("meeting");
              handleClickSelect("전체");
            }}
          >
            내 모임
          </button>
          <button
            className={selected === "apply" ? "selected" : ""}
            onClick={() => {
              setSelected("apply");
              handleClickSelect("전체");
            }}
          >
            신청 모임
          </button>
        </SelectWrapper>
      )}
      <MeetingInfo>
        <TotalMeeting>총 {total}개</TotalMeeting>
        <DropDown
          defaultText={"전체"}
          text={filterText}
          dropDownList={
            category === "calculate"
              ? MypageListFilterList[
                  selected === "meeting" ? "calcMeeting" : "calcApply"
                ]
              : MypageListFilterList[category]
          }
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
