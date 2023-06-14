import dayjs from "dayjs";
import { DPRange, TimeString } from "./types";

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
export const calcThisDay = (): DPRange => {
  const dateStart = now.startOf("day");
  const dateEnd = now.endOf("day");
  return { startDate: dateStart, endDate: dateEnd };
};

export const calcThisWeek = (): DPRange => {
  const dateStart = now.startOf("week");
  const dateEnd = now.endOf("week");
  return { startDate: dateStart, endDate: dateEnd };
};

export const calcYesterday = (): DPRange => {
  const yesterday = now.subtract(1, "day");
  const yeastStart = yesterday.startOf("day");
  const yestEnd = yesterday.endOf("day");
  return { startDate: yeastStart, endDate: yestEnd };
};

export const calcThisMonth = (): DPRange => {
  const monthStart = now.startOf("month");
  const monthEnd = now.endOf("month");
  return { startDate: monthStart, endDate: monthEnd };
};

export const calcThisYear = (): DPRange => {
  const yearStart = now.startOf("year");
  const yearEnd = now.endOf("year");
  return { startDate: yearStart, endDate: yearEnd };
};

export const calcWeekToDate = (): DPRange => {
  const weekStart = now.startOf("week");
  return { startDate: weekStart, endDate: now };
};

export const calcMonthToDate = (): DPRange => {
  const monthStart = now.startOf("month");
  return { startDate: monthStart, endDate: now };
};

export const calcYearToDate = (): DPRange => {
  const yearStart = now.startOf("year");
  return { startDate: yearStart, endDate: now };
};

export const ISOStrToDPRange = (dateString: string) => dayjs(dateString);
