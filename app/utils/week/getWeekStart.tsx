import moment from "moment-jalaali";

export function getWeekStart(baseDate: moment.Moment) {
  //    امروز چندمین روز هفتس؟: مثلا سه شنبه = 2
  const currentDay = baseDate.day();
  //امروز چند روز با اولین روز هفته فاصله داره؟
  const daysToSaturday = (currentDay + 1) % 7;
  // گرفتن تاریخ اولین روز هفته: متود ساب ترکت به عداد روز های فاصله بین امروز و اولین روز هفته از تاریخ کم مینه و مارو به اولین روز هفته میبره
  return baseDate.clone().subtract(daysToSaturday, "days");
}
