import { ReactElement, useState } from "react";
import ViewsAndFormat from "./ViewsAndFormat";
import CalendarLable from "./CalendarLable";
import { ChevronDown } from "./Icons";

export default function Header(): ReactElement {
  const [dateLable, setDateLable] = useState<string>("");
  return (
    <div className="w-full flex flex-col gap-4 px-3">
      <div className="w-full flex items-center justify-between py-2 border-b-2 border-gray-50 ">
        {/*App title */}
        <h1 className="text-xl">تقویم آنلاین</h1>
        {/*Year and Month Selector */}
        <div className="flex gap-1">
          <div className="w-auto h-12 p-3 flex flex-row-reverse items-center gap-1.5 bg-white rounded-[15px] border border-gray-100 cursor-pointer ">
            <p className="text-md">مرداد</p>
            <ChevronDown color={"#000000"} size={"size-4"} strokeWidth={2} />
          </div>
          <div className="w-auto h-12 p-3 flex flex-row-reverse items-center gap-1.5 bg-white rounded-[15px] border border-gray-100 cursor-pointer ">
            <p className="text-md">1403</p>
            <ChevronDown color={"#000000"} size={"size-4"} strokeWidth={2} />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between items-center ">
        <ViewsAndFormat />
        <CalendarLable setDateLable={setDateLable} dateLable={dateLable} />
      </div>
    </div>
  );
}
