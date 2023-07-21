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
