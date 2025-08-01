"use client";
import { useContext } from "react";
import CalendarExpand from "./CalendarExpand ";
import { Week } from "./Week";
import { ViewContext } from "../page";
// type Expand = {
//   expand: boolean;
//   // setExpand: React.Dispatch<React.SetStateAction<boolean>>;
// };
export default function CalendarGrid() {
  const { expand } = useContext(ViewContext);
  const hours = Array.from({ length: 24 }, (_, i) => i + 1); // 7 تا 21
  const days = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

  return (
    <div
      className={`p-2 bg-white rounded-2xl   ${
        expand
          ? `z-50 w-full h-full border-none fixed`
          : `w-full h-[75vh] lg:h-[67vh] border border-gray-100`
      } `}
    >
      <CalendarExpand />
      <div className="w-full h-full overflow-x-auto ">
        {/* Days row */}
        <Week />
        {/* Time rows */}
        <div className="w-full grid  grid-cols-[40px_repeat(7,_1fr)] gap-0.5 mt-1.5">
          {hours.map((hour) => (
            <div key={hour} className="contents">
              {/* برچسب ساعت */}
              <div className="h-14 lg:h-26 flex items-center gap-0.5 justify-center text-sm text-gray-400 text-center">
                {hour === 24 ? "00" : hour}
              </div>
              {/* هر ستون روز */}
              {days.map((_, idx) => (
                <div
                  key={idx}
                  className="h-14 lg:h-26 rounded-sm lg:rounded-xl border border-gray-100 hover:bg-gray-100 cursor-pointer"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
