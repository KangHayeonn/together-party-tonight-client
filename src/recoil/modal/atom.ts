import { atom } from "recoil";

export const ModalAtom = atom({
  key: "ModalAtom",
  default: { isOpen: false, title: "모달 제목" },
});
