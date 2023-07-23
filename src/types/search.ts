export interface fetchSearchAddressProps {
  address: string;
}

export interface fetchSearchByOptionsProps {
  category: string;
  distance: number;
  lat: number;
  lng: number;
  memberNum: number;
  page: number;
  size: number;
  sortFilter: string;
  status: string;
  tags: string;
}

export interface fetchSearchByAddressProps {
  lat: number;
  lng: number;
  page: number;
}

export interface SearchAddressType {
  address: string;
  latitude: number;
  longitude: number;
}

export interface SearchOptionsType {
  category: string;
  distance: number;
  lat: number;
  lng: number;
  memberNum: number;
  page: number;
  size: number;
  sortFilter: string;
  status: string;
  tags: string;
}

export interface SearchListType {
  clubId: number;
  clubName: string;
  clubCategory: string;
  clubContent: string;
  memberCount: number; // 모집 인원
  clubMaximum: number; // 전체 인원
  clubTags: Array<string>;
  isRecruit: boolean; // true: 모집중
  address: string;
  latitude: number;
  longitude: number;
  image: string;
  ratingAvg: number;
  reviewCnt: number;
  memberId: number;
  nickName: string;
  meetingDate: Date | null;
  createdDate: Date | null;
  modifiedDate: Date | null;
}

export interface SearchResponseType {
  clubList: Array<SearchListType>;
  count: number;
  totalCount: number;
}
