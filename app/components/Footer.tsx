import { ReactElement } from "react";
import { Plus } from "./Icons";

export default function Footer(): ReactElement {
  return (
    <div className="w-[95%] lg:w-[70%] fixed bottom-1.5 flex p-3 gap-2 items-center">
      <span className="w-12 h-12  cursor-pointer flex items-center justify-center rounded-2xl bg-white  border border-gray-100">
        <Plus color={"#000000"} size={"size-6"} strokeWidth={2} />
      </span>
      <input
        placeholder="تسکتو پیدا کن"
        className="rounded-2xl w-[90%] h-12 p-4 outline-0 bg-gray-100 text-gray-400 text-sm placeholder:text-sm placeholder:text-gray-400 "
      />
    </div>
  );
}
