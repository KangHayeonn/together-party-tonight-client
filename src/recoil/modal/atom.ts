import { IClubItem, IReviewItem } from "@/types/mypage";
import { atom } from "recoil";

export const ModalAtom = atom({
  key: "ModalAtom",
  default: {
    isMyReview: false,
    isOpen: false,
    reviewItem: {} as IReviewItem,
    reviewId: 0,
    clubItem: {} as IClubItem,
  },
});
