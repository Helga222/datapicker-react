import dayjs from "dayjs";
import { DPRange, TimeString } from "./types";

const now = dayjs();
export const calcDate = (date:TimeString):DPRange=>{
  let newDate;
  if (date.since==="Last"){
    newDate = now.subtract(date.time,date.unit);
    return {startDate:newDate,endDate:now}
  }
  else {
    newDate = now.add(date.time,date.unit);
    return {startDate:now,endDate:newDate}
  }
}