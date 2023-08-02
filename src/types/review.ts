export interface ReviewType {
  address: string;
  clubName: string;
  createdDate: Date;
  image: string;
  meetingDate: Date;
  memberId: number;
  modifiedDate: Date;
  nickname: string;
  rating: number;
  reviewContent: string;
}

export interface ReviewListType {
  avgRating: number;
  count: number;
  totalCount: number;
  reviewList: Array<ReviewType>;
}
