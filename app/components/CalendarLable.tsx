"useclient";

import React, { ReactElement, useContext, useEffect } from "react";
import moment from "moment-jalaali";
import { ViewContext } from "../page";
import { ChevronLeft, ChevronRight } from "./Icons";

type DataLableProps = {
  setDateLable: React.Dispatch<React.SetStateAction<string>>;
  dateLable: string;
};
// type View = string | null;

export default function CalendarLable({
  setDateLable,
  dateLable,
}: DataLableProps): ReactElement {
  const view = useContext(ViewContext);

  const currentMonthName = moment().format("jMMMM");
  const currentYear = moment().format("jYYYY");

  useEffect(() => {
    if (view === "Year") {
      setDateLable(currentYear);
    } else {
      setDateLable(currentMonthName);
    }
  }, []);

  return (
    <div className="w-auto gap-3.5 flex items-center justify-between ">
      <ChevronRight
        color={"#000000"}
        size={"size-7 cursor-pointer"}
        strokeWidth={3}
      />
      <h1 className="w-full text-lg text-center">{dateLable}</h1>
      <ChevronLeft
        color={"#000000"}
        size={"size-7 cursor-pointer"}
        strokeWidth={3}
      />
    </div>
  );
}
