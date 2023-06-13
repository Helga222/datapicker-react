export type TimeString = {
  since:string,
  time:number,
  unit:string
}

export enum DateType{
  StartDate,
  EndDate
}


export type DPType = {
  dateStart:string,
  dateEnd:string,
  editedDate:DateType
}