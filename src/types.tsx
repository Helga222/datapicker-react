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
  editedDate:DateType
}

export type DPRange = {
  startDate:Dayjs,
  endDate:Dayjs,
}

export type LinkType = 'yesterday' | 'today' | 'this week';  

export type DateFunc = (date:Date,type:DateType) => void;
  //
