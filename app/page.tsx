"use client";
import { ReactElement, useState } from "react";
import CalendarGrid from "./components/CalendarGrid";
import DateLable from "./components/DateLable";

import moment from "moment-jalaali";

moment.loadPersian({ dialect: "persian-modern", usePersianDigits: false });

export default function Home(): ReactElement {
  const [dateLable, setDateLable] = useState<string>("");

  return (
    <main className=" min-h-screen " dir="rtl">
      <div className="flex flex-col gap-4 p-8 ">
        <DateLable setDateLable={setDateLable} dateLable={dateLable} />
        <CalendarGrid />
      </div>
      {/* <h1 className="text-white text-2xl font-bold px-4 py-4">My Calendar</h1> */}
    </main>
  );
}
