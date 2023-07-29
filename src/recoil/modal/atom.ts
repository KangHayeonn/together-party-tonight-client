import { IClubItem, IReviewItem } from "@/types/mypage";
import { atom } from "recoil";

export const ModalAtom = atom({
  key: "ModalAtom",
  default: {
    isMyReview: false,
    isOpenReviewModal: false,
    isOpenApplyModal: false,
    reviewItem: {} as IReviewItem,
    reviewId: 0,
    clubItem: {} as IClubItem,
    clubId: 0,
  },
});
