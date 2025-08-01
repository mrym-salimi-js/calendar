"use client";
import moment from "moment-jalaali";
import { ReactElement, useState } from "react";
import { getWeekStart } from "../utils/week/getWeekStart";
import { getWeekDates } from "../utils/week/getWeekDates";

moment.loadPersian({ usePersianDigits: true });
export function Week(): ReactElement {
  // for slider
  const { offset, setOffset } = useState<number>(0);

  const today = moment();
  const currentDayIndex = today.day() + 1;
  const startOfWeek = getWeekStart(today)
    .clone()
    .add(offset * 7, "days");

  const week = getWeekDates(startOfWeek);
  // console.log(week);

  return (
    <>
      <div className="w-auto sticky top-0 z-10  py-2.5 bg-white">
        <div className="grid grid-cols-[40px_repeat(7,_1fr)] gap-0.5  ">
          <div className="flex items-center justify-center"></div>
          {week.map((day, index) => (
            <div
              key={day.dayName}
              className={` text-center rounded-sm lg:rounded-xl p-2  flex flex-col gap-1 ${
                currentDayIndex === index ? `bg-gray-100` : `bg-transparent`
              } `}
            >
              <p
                className={`text-sm block md:hidden ${
                  index === 6 ? `text-red-700` : `text-gray-600`
                }`}
              >
                {day.dayName?.charAt(0)}
              </p>

              <p
                className={`text-sm hidden md:block  ${
                  index === 6 ? `text-red-700` : `text-gray-600`
                }`}
              >
                {day.dayName}
              </p>

              <p className={`${index === 6 ? `text-red-700` : `text-black`}`}>
                {day.jDate?.slice(-2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
