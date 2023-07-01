export const searchCategoryList = [
  "운동",
  "스터디",
  "취미",
  "맛집",
  "여행",
  "친목",
  "봉사",
];

export const searchTagList = [
  "조용한",
  "뷰맛집",
  "연인추천",
  "신나는",
  "사진맛집",
  "교양",
  "독서",
  "다이어트",
  "자격증",
  "코딩",
  "특별한",
];

export const clubList = [
  {
    clubId: 1,
    clubName: "테니스 같이 하실 분 구해요",
    clubCategory: "운동",
    clubTags: ["테니스", "신나는"],
    latitude: 37.5304843, // 위도
    longitude: 126.881641, // 경도
    address: "서울특별시 양천구 안양천로 939",
    ratingAvg: 4.1,
    reviewCnt: 5,
  },
  {
    clubId: 2,
    clubName: "강남에서 모각코 하실 분",
    clubCategory: "스터디",
    clubTags: ["코딩", "조용한"],
    latitude: 37.4950242,
    longitude: 127.029687,
    address: "서울 강남구 강남대로 358 104호 빌리엔젤 강남358타워점",
    ratingAvg: 4.3,
    reviewCnt: 14,
  },
  {
    clubId: 3,
    clubName: "연남동에서 신상 카페 투어",
    clubCategory: "맛집",
    clubTags: ["연인추천", "신나는", "사진맛집", "뷰맛집"],
    latitude: 37.5615052,
    longitude: 126.924668,
    address: "서울 마포구 동교로 242-5",
    ratingAvg: 4.2,
    reviewCnt: 3,
  },
  {
    clubId: 4,
    clubName: "독서모임 구합니다",
    clubCategory: "취미",
    clubTags: ["조용한", "독서", "교양"],
    latitude: 37.5084353,
    longitude: 127.080056,
    address: "서울 송파구 백제고분로7길 8-44 1, 2층",
    ratingAvg: 3.8,
    reviewCnt: 7,
  },
];

export const kakaoMapData = [
  {
    content: {
      clubId: 1,
      clubName: "테니스 같이 하실 분 구해요",
    },
    latlng: { lat: 33.450705, lng: 126.570677 },
  },
  {
    content: {
      clubId: 2,
      clubName: "강남에서 모각코 하실 분",
    },
    latlng: { lat: 33.450936, lng: 126.569477 },
  },
  {
    content: {
      clubId: 3,
      clubName: "연남동에서 신상 카페 투어",
    },
    latlng: { lat: 33.450879, lng: 126.56994 },
  },
  {
    content: {
      clubId: 4,
      clubName: "독서모임 구합니다",
    },
    latlng: { lat: 33.451393, lng: 126.570738 },
  },
];

export const commentList = [
  {
    commentId: 1,
    userId: 1,
    nickName: "더위사냥",
    comment: "혹시 회비도 있나요?",
    updatedDate: "2023/06/04",
  },
  {
    commentId: 2,
    userId: 2,
    nickName: "추위사냥",
    comment: "혹시 회비도 있나요?",
    updatedDate: "2023/06/04",
  },
  {
    commentId: 3,
    userId: 3,
    nickName: "바다사냥",
    comment: "혹시 회비도 있나요?",
    updatedDate: "2023/06/04",
  },
  {
    commentId: 4,
    userId: 4,
    nickName: "내가사냥",
    comment: "혹시 회비도 있나요?",
    updatedDate: "2023/06/04",
  },
];
