import { atom } from "recoil";

interface ToastStateType {
  isOpenToast: boolean;
  toastMsg: string;
}

interface AlertToastStateType {
  isOpenToast: boolean;
  toastMsg: string;
}

const ToastState = atom<ToastStateType>({
  key: "toastState",
  default: {
    isOpenToast: false,
    toastMsg: "",
  },
});

const AlertToastState = atom<AlertToastStateType>({
  key: "alertToastState",
  default: {
    isOpenToast: false,
    toastMsg: "",
  },
});

export { ToastState, AlertToastState };
