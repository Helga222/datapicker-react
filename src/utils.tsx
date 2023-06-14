import dayjs from "dayjs";
import { DPRange, DPType, TimeString } from "./types";

const now = dayjs();
export const calcDate = (date: TimeString): DPRange => {
  let newDate;
  if (date.since === "Last") {
    newDate = now.subtract(date.time, date.unit);
    return { startDate: newDate, endDate: now };
  } else {
    newDate = now.add(date.time, date.unit);
    return { startDate: now, endDate: newDate };
  }
};
export const calcThisDay = () => {
  const date = now.startOf("day");
  return { startDate: date, endDate: now };
};

export const calcThisWeek = () => {
  const date = now.startOf("week");
  return { startDate: date, endDate: now };
};

export const calcYesterday = () => {
  const yesterday = now.subtract(1, "day");
  const yeastStart = yesterday.startOf("day");
  const yestEnd = yesterday.endOf("day");
  return { startDate: yeastStart, endDate: yestEnd };
};

export const ISOStrToDPRange=(dateString:string)=>(dayjs(dateString));
