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

export { MyPageBtnStyleObj, MyPageList, mypageCategory };
