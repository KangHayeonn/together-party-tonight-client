import { atom } from "recoil";
import { ClubDetailResponseType } from "@/types/club";

const clubDetailState = atom<ClubDetailResponseType>({
  key: "clubDetailState",
  default: {
    address: "",
    clubCategory: "",
    clubContent: "",
    clubMaximum: 10,
    clubName: "",
    clubTags: [],
    createdDate: new Date(),
    image: "",
    isRecruit: true,
    latitude: 0,
    longitude: 0,
    meetingDate: "",
    memberCount: 0,
    memberId: -1,
    modifiedDate: "",
    nickName: "",
    ratingAvg: 0,
    reviewCnt: 0,
  },
});

export { clubDetailState };
