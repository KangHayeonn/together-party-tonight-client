import { ClubFormType } from "@/types/clubWrite";

export const validationClubWrite = (clubInfo: ClubFormType) => {
  if (clubInfo.clubName === "") window.alert("모임 제목을 입력하세요");
  else if (clubInfo.clubCategory === "")
    window.alert("모임 카테고리를 입력하세요");
  else if (clubInfo.clubTags === "") window.alert("모임 태그를 입력하세요");
  else if (clubInfo.meetingDate === "" || clubInfo.meetingDate.includes("null"))
    window.alert("모임 일시를 모두 입력해주세요");
  else if (clubInfo.address === "")
    window.alert("모임 장소 주소를 정확하게 입력하세요");
  else if (clubInfo.latitude === 0 || clubInfo.longitude === 0)
    window.alert("모임 장소 주소를 정확하게 입력하세요");
  else if (clubInfo.clubContent === "") window.alert("모임 소개를 입력하세요");
  else return true;
  return false;
};
