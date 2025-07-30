"use client";
import { ReactElement, useEffect, useState } from "react";
import CalendarGrid from "./components/CalendarGrid";
import CalendarLable from "./components/CalendarLable";
import moment from "moment-jalaali";
import Views from "./components/Views";
import { createContext } from "react";

export const ViewContext = createContext({});

moment.loadPersian({ dialect: "persian-modern", usePersianDigits: false });

export default function Home(): ReactElement {
  const [dateLable, setDateLable] = useState<string>("");
  const [view, setView] = useState<string>("");

  useEffect(() => {
    const view: string = localStorage.getItem("view");
    setView(view);
  }, []);

  return (
    <ViewContext.Provider value={{ view }}>
      <main className=" min-h-screen bg-white" dir="rtl">
        <div className="flex flex-col gap-2 items-center justify-center  p-8 bg-gray-50">
          {/* Views btn box */}
          <Views />
          <div className="w-full flex flex-col gap-4 p-8 bg-white rounded-[15px] border border-gray-100 ">
            <CalendarLable setDateLable={setDateLable} dateLable={dateLable} />
            <CalendarGrid />
          </div>
        </div>
        {/* <h1 className="text-white text-2xl font-bold px-4 py-4">My Calendar</h1> */}
      </main>
    </ViewContext.Provider>
  );
}
