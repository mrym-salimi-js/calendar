"useclient";

import React, { ReactElement, useContext, useEffect } from "react";
import moment from "moment-jalaali";
import { ViewContext } from "../page";

type DataLableProps = {
  view: string;
  setDateLable: React.Dispatch<React.SetStateAction<string>>;
  dateLable: string;
};

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
    <div className="w-full flex items-center justify-between ">
      <h1 className="w-full text-xl text-center">{dateLable}</h1>
    </div>
  );
}
