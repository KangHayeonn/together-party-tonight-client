import { SearchOptionsType } from "@/types/search";

export const validationSearchByAddress = (searchOptions: SearchOptionsType) => {
  if (isNaN(searchOptions.lat) || searchOptions.lat === 0)
    window.alert("모임 장소 주소를 정확하게 입력하세요");
  else if (isNaN(searchOptions.lng) || searchOptions.lng === 0)
    window.alert("모임 장소 주소를 정확하게 입력하세요");
  else return true;
  return false;
};
