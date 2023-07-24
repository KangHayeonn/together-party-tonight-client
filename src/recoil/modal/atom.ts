import { atom } from "recoil";

export interface IReviewItem {
  clubName: string;
  createdDate: string;
  modifiedDate: string;
  nickName: string;
  rating: number;
  reviewContent: string;
  reviewId: number;
}

export const ModalAtom = atom({
  key: "ModalAtom",
  default: { isMyReview: false, isOpen: false, item: {} as IReviewItem },
});
