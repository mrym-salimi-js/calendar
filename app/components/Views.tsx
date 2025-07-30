"use client";
import { ReactElement, useRef, useState } from "react";
import { Calendar, World } from "./Icons";
import SimpleListModal from "./SimpleListModal";
import { useOutsideClick } from "../hooks/useOutsideClick";

export default function Views(): ReactElement {
  const [viewToggle, setViewToggle] = useState<boolean>(false);
  const [formatToggle, setFormatToggle] = useState<boolean>(false);
  type ListType = { en: string; fa: string }[];
  const views: ListType = [
    { en: "Week", fa: "هفته" },
    { en: "Month", fa: "ماه" },
    { en: "Year", fa: "سال" },
  ];
  const format: ListType = [
    { en: "Solar", fa: "شمسی" },
    { en: "Gregorian", fa: "میلادی" },
  ];
  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClick(modalRef, () => {
    setViewToggle(false);
    setFormatToggle(false);
  });
  const handleViewToggle = () => {
    setViewToggle(!viewToggle);
    if (formatToggle) setFormatToggle(false);
  };
  const handleFormatToggle = () => {
    setFormatToggle(!formatToggle);
    if (viewToggle) setViewToggle(false);
  };

  return (
    <div
      ref={modalRef}
      className=" flex items-center justify-start self-start "
    >
      <div className="flex gap-1 ">
        <div
          onClick={handleViewToggle}
          className={`w-12 h-12 p-2 flex items-center justify-center bg-white rounded-[15px] border border-gray-100 cursor-pointer`}
        >
          <Calendar />
          <SimpleListModal
            listToggle={viewToggle}
            setListToggle={setViewToggle}
            list={views}
            btnType={"view"}
          />
        </div>
        <div
          onClick={handleFormatToggle}
          className="w-12 h-12 p-2 flex items-center justify-center bg-white rounded-[15px] border border-gray-100 cursor-pointer "
        >
          <World />
          <SimpleListModal
            listToggle={formatToggle}
            setListToggle={setFormatToggle}
            list={format}
            btnType={"format"}
          />
        </div>
      </div>
    </div>
  );
}
