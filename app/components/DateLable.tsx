"useclient";

import React, { ReactElement, useEffect } from "react";
import moment from "moment-jalaali";

type DataLableProps = {
  view: "MONTH" | "WEEK" | "YEAR" | "DAY";
  setDateLable: React.Dispatch<React.SetStateAction<string>>;
  dateLable: string;
};
export default function DateLable({
  view = "MONTH",
  setDateLable,
  dateLable,
}: DataLableProps): ReactElement {
  const currentMonthName = moment().format("jMMMM");
  const currentYear = moment().format("jYYYY");
  useEffect(() => {
    view === "YEAR"
      ? setDateLable(currentYear)
      : setDateLable(currentMonthName);
  }, [dateLable]);

  return (
    <div className="w-full flex items-center justify-between ">
      <h1 className="w-full text-xl text-center">{dateLable}</h1>
    </div>
  );
}
