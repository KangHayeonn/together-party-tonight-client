import { ICategory } from "@/types/mypage";

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
    id: "list/meeting",
    text: "내 모임",
  },
  {
    id: "list/apply",
    text: "신청한 모임",
  },
  {
    id: "list/review",
    text: "내가 쓴 리뷰",
  },
];

const mypageCategory: ICategory = {
  meeting: "내 모임",
  apply: "신청한 모임",
  review: "내가 쓴 리뷰",
};

export { MyPageBtnStyleObj, MyPageList, mypageCategory };
