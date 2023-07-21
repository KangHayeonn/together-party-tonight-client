import React, { useState, useEffect } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import { setHours, setMinutes } from "date-fns";
import "@/styles/components/common/Calendar.css";

interface CalendarProps {
  calendarType?: string;
  changeDate?: React.Dispatch<React.SetStateAction<Date | null>> | undefined;
  changeTime?: React.Dispatch<React.SetStateAction<Date | null>> | undefined;
}

const Calendar = ({ calendarType, changeDate, changeTime }: CalendarProps) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);

  const today = new Date();
  const tomorrow = new Date(today.setDate(today.getDate() + 1));

  useEffect(() => {
    if (changeDate) changeDate(startDate);
  }, [changeDate, startDate]);

  useEffect(() => {
    if (changeTime) changeTime(time);
  }, [changeTime, time]);

  if (calendarType === "time") {
    return (
      <div className="calendar-wrapper">
        <Image
          src="/images/clock.svg"
          width={16}
          height={16}
          alt="Clock Icon"
          className="calendar-icon"
        />
        <DatePicker
          locale={ko}
          selected={time}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={30}
          timeCaption="Time"
          minTime={setHours(setMinutes(new Date(), 0), 8)}
          maxTime={setHours(setMinutes(new Date(), 0), 23)}
          dateFormat="h:mm aa"
          onChange={(date) => setTime(date)}
          className="calendar-time"
          placeholderText="시간 입력"
        />
      </div>
    );
  }

  return (
    <div className="calendar-wrapper">
      <Image
        src="/images/calendar.svg"
        width={15}
        height={15}
        alt="Calendar Icon"
        className="calendar-icon"
      />
      <DatePicker
        locale={ko}
        selected={startDate}
        minDate={tomorrow}
        dateFormat="yyyy.MM.dd"
        onChange={(date) => {
          setStartDate(date);
        }}
        placeholderText="날짜 입력"
      />
    </div>
  );
};

export default Calendar;
