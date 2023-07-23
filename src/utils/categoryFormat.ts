export const categoryMap = new Map();

const categoryArr = [
  ["운동", "exercise"],
  ["스터디", "study"],
  ["취미", "hobby"],
  ["맛집", "food"],
  ["여행", "travel"],
  ["친목", "play"],
  ["봉사", "volunteer"],
];

categoryArr.forEach((item) => {
  categoryMap.set(item[0], item[1]);
});
