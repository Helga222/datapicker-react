import { Dayjs, ManipulateType } from "dayjs";

export type TimeString = {
  since:'Last' | 'Next',
  time:number,
  unit:ManipulateType
}

export enum DateType{
  StartDate,
  EndDate
}

export type DPType = {
  dateStart:Date,
  dateEnd:Date,
}

export type DPRange = {
  startDate:Dayjs,
  endDate:Dayjs,
}

export type LinkType = 'yesterday' | 'today' | 'this week' | 'this month' | 'this year' | 'week to date' | 'month to date' | 'year to date';  

export type DateFunc = (date:Date,type:DateType) => void;
  //
