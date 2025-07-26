"use client";

import { useEffect } from "react";
import { Week } from "./Week";

const hours = Array.from({ length: 24 }, (_, i) => i + 1); // 7 تا 21
const days = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

export default function CalendarGrid() {
  useEffect(() => {
    document.documentElement.dir = "rtl"; // راست‌چین کردن کل صفحه
  }, []);

  return (
    <div className="p-8 h-[90vh] overflow-y-auto font-sans">
      {/* Days row */}
      <Week />
      {/* Time rows */}
      <div className="grid grid-cols-8 mt-1.5">
        {hours.map((hour) => (
          <div key={hour} className="contents">
            {/* برچسب ساعت */}
            <div className="text-sm text-gray-400 px-2 py-4 border-b border-gray-100 w-16 text-center">
              {hour === 24 ? "00" : hour}:00
            </div>
            {/* هر ستون روز */}
            {days.map((_, idx) => (
              <div
                key={idx}
                className="h-16 border-r border-b border-gray-100 hover:bg-gray-100 cursor-pointer"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
