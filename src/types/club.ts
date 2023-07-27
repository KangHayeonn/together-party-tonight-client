export interface ClubFormType {
  clubName: string;
  clubCategory: string;
  clubMaximum: number;
  clubContent: string;
  clubTags: string;
  latitude: number;
  longitude: number;
  address: string;
  meetingDate: string; // DataTime
}

export interface ClubAddressType {
  address: string;
  latitude: number;
  longitude: number;
}

export interface ClubWriteTitleProps {
  clubInfo: ClubFormType;
  onChangeTitle: (title: string) => void;
}

export interface ClubWriteFilterProps {
  onChangeCategory: (category: string) => void;
  onChangeTags: (tags: string) => void;
  onChangeMaximum: (maximum: number) => void;
  onChangeDate: (meetingDate: string) => void;
  onChangeAddress: ({ address, latitude, longitude }: ClubAddressType) => void;
  onChangeImage: React.Dispatch<React.SetStateAction<File | null>>;
}

export interface TagItemProps {
  keyword: string;
  onClickDelete: (keyword: string) => void;
}

export interface ClubWriteTagProps {
  changeTags: (tags: string) => void;
}

export interface ClubWriteImageProps {
  changeImage: React.Dispatch<React.SetStateAction<File | null>>;
}

export interface ClubDetailResponseType {
  address: string;
  clubCategory: string;
  clubContent: string;
  clubMaximum: number;
  clubName: string;
  clubTags: Array<string>;
  createdDate: Date;
  image: string;
  isRecruit: boolean;
  latitude: number;
  longitude: number;
  meetingDate: string;
  memberCount: number;
  memberId: number;
  modifiedDate: string;
  nickName: string;
  ratingAvg: number;
  reviewCnt: number;
}
