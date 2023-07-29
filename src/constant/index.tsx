import { ICategory, MypageCategory } from "@/types/mypage";

const MyPageBtnStyleObj = {
  width: 160,
  height: 50,
  fontSize: 16,
};

const MyPageList = [
  {
    id: "info",
    text: "내 정보",
  },
  {
    id: "meeting",
    text: "내 모임",
  },
  {
    id: "apply",
    text: "신청한 모임",
  },
  {
    id: "review",
    text: "내가 쓴 리뷰",
  },
  {
    id: "calculate",
    text: "정산하기",
  },
];

const mypageCategory: ICategory = {
  meeting: "내 모임",
  apply: "신청한 모임",
  review: "내가 쓴 리뷰",
  calculate: "정산하기",
};

const MypageListFilterList: MypageCategory = {
  meeting: ["전체", "모집중", "모집 완료"],
  apply: ["전체", "수락", "대기중", "거절됨", "강퇴"],
  review: ["최신 순", "오래된 순", "평점 높은 순", "평점 낮은 순"],
  calculate: ["전체"],
};

const ConvertMyMeetingFilterName: ICategory = {
  전체: "ALL",
  모집중: "RECRUITING",
  "모집 완료": "RECRUIT_FINISHED",
};

const ConvertApplyMeetingFilterName: ICategory = {
  전체: "ALL",
  수락: "APPROVE",
  대기중: "PENDING",
  거절됨: "REFUSE",
  강퇴: "KICKOUT",
};

const ConvertSortName: ICategory = {
  "최신 순": "createdDate,DESC",
  "오래된 순": "createdDate,ASC",
  "평점 높은 순": "rating,DESC",
  "평점 낮은 순": "rating,ASC",
};

export {
  MyPageBtnStyleObj,
  MyPageList,
  mypageCategory,
  MypageListFilterList,
  ConvertMyMeetingFilterName,
  ConvertApplyMeetingFilterName,
  ConvertSortName,
};
