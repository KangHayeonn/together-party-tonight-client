const leftPad = (value: number) => {
  if (value >= 10) {
    return value;
  }

  return `0${value}`;
};

export const toStringByFormatting = (source: Date | null, delimiter = "-") => {
  if (source) {
    const year = source.getFullYear();
    const month = leftPad(source.getMonth() + 1);
    const day = leftPad(source.getDate());

    return [year, month, day].join(delimiter);
  }
  return null;
};

export const toStringByFormattingTime = (
  source: Date | null,
  delimiter = ":",
) => {
  if (source) {
    const hour = leftPad(source.getHours());
    const minute = leftPad(source.getMinutes());
    const second = leftPad(source.getSeconds());

    return [hour, minute, second].join(delimiter);
  }
  return null;
};

export const elapsedTime = (date: Date) => {
  const start = new Date(date);
  const end = new Date();

  const diff = (+end - +start) / 1000;

  const times = [
    { name: "년", milliSeconds: 60 * 60 * 24 * 365 },
    { name: "개월", milliSeconds: 60 * 60 * 24 * 30 },
    { name: "일", milliSeconds: 60 * 60 * 24 },
    { name: "시간", milliSeconds: 60 * 60 },
    { name: "분", milliSeconds: 60 },
  ];

  for (const value of times) {
    const betweenTime = Math.floor(diff / value.milliSeconds);

    if (betweenTime > 0) {
      return `${betweenTime}${value.name} 전`;
    }
  }
  return "방금 전";
};
