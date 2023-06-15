import dayjs from "dayjs";
import { DPType, TimeString } from "./types";

const now = dayjs();
export const calcDate = (date: TimeString): DPType => {
  let newDate;
  if (date.since === "Last") {
    newDate = now.subtract(date.time, date.unit);
    return { dateStart: newDate.toDate(), dateEnd: now.toDate() };
  } else {
    newDate = now.add(date.time, date.unit);
    return { dateStart: now.toDate(), dateEnd: newDate.toDate() };
  }
};
export const calcThisDay = (): DPType => {
  const dateStart = now.startOf("day");
  const dateEnd = now.endOf("day");
  return { dateStart: dateStart.toDate(), dateEnd: dateEnd.toDate() };
};

export const calcThisWeek = (): DPType => {
  const dateStart = now.startOf("week");
  const dateEnd = now.endOf("week");
  return { dateStart: dateStart.toDate(), dateEnd: dateEnd.toDate() };
};

export const calcYesterday = (): DPType => {
  const yesterday = now.subtract(1, "day");
  const yeastStart = yesterday.startOf("day");
  const yestEnd = yesterday.endOf("day");
  return { dateStart: yeastStart.toDate(), dateEnd: yestEnd.toDate() };
};

export const calcThisMonth = (): DPType => {
  const monthStart = now.startOf("month");
  const monthEnd = now.endOf("month");
  return { dateStart: monthStart.toDate(), dateEnd: monthEnd.toDate() };
};

export const calcThisYear = (): DPType => {
  const yearStart = now.startOf("year");
  const yearEnd = now.endOf("year");
  return { dateStart: yearStart.toDate(), dateEnd: yearEnd.toDate() };
};

export const calcWeekToDate = (): DPType => {
  const weekStart = now.startOf("week");
  return { dateStart: weekStart.toDate(), dateEnd: now.toDate() };
};

export const calcMonthToDate = (): DPType => {
  const monthStart = now.startOf("month");
  return { dateStart: monthStart.toDate(), dateEnd: now.toDate() };
};

export const calcYearToDate = (): DPType => {
  const yearStart = now.startOf("year");
  return { dateStart: yearStart.toDate(), dateEnd: now.toDate() };
};

export const ISOStrToDPRange = (dateString: string) => dayjs(dateString);
