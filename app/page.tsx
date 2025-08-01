"use client";
import { ReactElement, useEffect, useState } from "react";
import CalendarGrid from "./components/CalendarGrid";
import moment from "moment-jalaali";
import { createContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const ViewContext = createContext({});

moment.loadPersian({ dialect: "persian-modern", usePersianDigits: false });
type View = string | null;

export default function Home(): ReactElement {
  const [view, setView] = useState<View>("هفته");

  const [expand, setExpand] = useState<boolean>(false);

  useEffect(() => {
    const view: View = localStorage.getItem("view");
    setView(view);
  }, []);

  return (
    <ViewContext.Provider value={{ view, expand, setExpand }}>
      <main
        className="min-h-screen lg:flex lg:justify-center bg-[#fbfbfb8f] "
        dir="rtl"
      >
        <div className="lg:w-[90%] relative  flex flex-col items-center gap-2.5  p-3 lg:px-8 ">
          <Header />
          <CalendarGrid />
          <Footer />
        </div>
        {/* <h1 className="text-white text-2xl font-bold px-4 py-4">My Calendar</h1> */}
      </main>
    </ViewContext.Provider>
  );
}
