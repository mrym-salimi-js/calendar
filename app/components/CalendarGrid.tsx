"use client";

import { Week } from "./Week";

export default function CalendarGrid() {
  const hours = Array.from({ length: 24 }, (_, i) => i + 1); // 7 تا 21
  const days = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

  return (
    <div className="px-8 h-[67vh] overflow-y-auto font-sans">
      {/* Days row */}
      <Week />
      {/* Time rows */}
      <div className="grid grid-cols-[40px_repeat(7,_1fr)] gap-0.5 mt-1.5">
        {hours.map((hour) => (
          <div key={hour} className="contents">
            {/* برچسب ساعت */}
            <div className="flex items-center gap-0.5 justify-center text-sm text-gray-400 h-16 text-center">
              {hour === 24 ? "00" : hour}
            </div>
            {/* هر ستون روز */}
            {days.map((_, idx) => (
              <div
                key={idx}
                className="h-16 rounded-2xl border border-gray-100 hover:bg-gray-100 cursor-pointer"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
