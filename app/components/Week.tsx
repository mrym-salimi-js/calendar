"use client";
import moment from "moment-jalaali";
import { useState } from "react";
import { getWeekStart } from "../utils/week/getWeekStart";
import { getWeekDates } from "../utils/week/getWeekDates";

moment.loadPersian({ usePersianDigits: true });
export function Week(): JSX.Element {
  const { offset, setOffset } = useState<number>(0);

  const today = moment();

  const startOfWeek = getWeekStart(today)
    .clone()
    .add(offset * 7, "days");

  const week = getWeekDates(startOfWeek);
  console.log(week);

  return (
    <>
      <div className="grid grid-cols-8 border-b border-gray-100 sticky top-0  z-10">
        <div className="w-16" />
        {week.map((day) => (
          <div
            key={day.dayName}
            className={`text-center py-2 border-gray-100 ${
              day.dayName === `ج` ? `text-red-700` : `text-black`
            }`}
          >
            {day.dayName}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-8  border-gray-100 sticky top-0  z-10">
        <div className="w-16" />
        {week.map((day) => (
          <div
            key={day.dayName}
            className={`text-center py-2 border-gray-100 `}
          >
            {day.jDate?.slice(-2)}
          </div>
        ))}
      </div>
    </>
  );
}
