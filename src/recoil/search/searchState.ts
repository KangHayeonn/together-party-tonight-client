import { atom } from "recoil";

const searchState = atom<string>({
  key: "searchState", // 다른 recoil key와 중첩 x
  default: "",
});

export { searchState };
