import React, { useContext, useState } from "react";
import { ArrowsPointingIn, ArrowsPointingOut } from "./Icons";
import { ViewContext } from "../page";

type Expand = {
  expand: boolean;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function CalendarExpand() {
  const { expand, setExpand } = useContext<Expand>(ViewContext);
  const handleExpand: () => void = () => {
    setExpand(!expand);
  };
  return (
    <div onClick={handleExpand} className="cursor-pointer ">
      {expand ? (
        <ArrowsPointingIn color={"#000000"} size={"size-6"} />
      ) : (
        <ArrowsPointingOut color={"#000000"} size={"size-6"} />
      )}
    </div>
  );
}
