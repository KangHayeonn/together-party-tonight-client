import { atom } from "recoil";

interface ToastStateType {
  isOpenToast: boolean;
  toastMsg: string;
}

const ToastState = atom<ToastStateType>({
  key: "commentListState",
  default: {
    isOpenToast: false,
    toastMsg: "",
  },
});

export { ToastState };
