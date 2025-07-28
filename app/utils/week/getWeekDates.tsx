import moment from "moment-jalaali";

export function getWeekDates(startOfWeek: moment.Moment) {
  type Day = {
    dayName: string;
    jDate: string;
    gDate: string;
    isToday: boolean;
  };

  const week: Day[] = [];

  // گرفتن تاریخ هر 7 روز هفته با حلقه فور براساس اولین روز هفته
  for (let i = 0; i < 7; i++) {
    const day = startOfWeek.clone().add(i, "days");
    week.push({
      dayName: day.format("dddd"),
      jDate: day.format("jYYYY/jMM/jDD"),
      gDate: day.format("YYYY-MM-DD"),
      isToday: day.isSame(moment(), "day"),
    });
  }
  return week;
}
