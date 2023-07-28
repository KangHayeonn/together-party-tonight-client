export interface ICategory {
  [key: string]: string;
}

export interface MypageCategory {
  [key: string]: string[];
}

export interface IReviewItem {
  profileImage: string;
  clubName: string;
  createdDate: string;
  modifiedDate: string;
  nickName: string;
  rating: number;
  reviewContent: string;
  reviewId: number;
}

export interface IClubItem {
  address: string;
  clubCategory: string;
  clubContent: string;
  clubMaximum: number;
  clubName: string;
  clubTags: string[];
  createdDate: string;
  image: string;
  latitude: number;
  longitude: number;
  meetingDate: string;
  modifiedDate: string;
  appliedCount: number;
  approvalStatus: string;
  clubState: boolean;
  clubId: number;
}

export interface ApplicationItem {
  approvalStatus: string;
  clubId: number;
  clubName: string;
  clubSignupId: number;
  createdDate: string;
  memberId: number;
  modifiedDate: string;
  nickName: string;
  signupDate: string;
  profileImage: string;
}

export type MyPageListItem = {
  id: string;
  text: string;
};
