import { atom } from "recoil";
import { alertUnReadCntType } from "@/types/alert";

const alertUnReadCntState = atom<alertUnReadCntType>({
  key: "alertUnReadCntState",
  default: {
    unReadCnt: 0,
  },
});

export { alertUnReadCntState };
