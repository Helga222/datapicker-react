import { DateType } from "../types";


export const setDateStart = (date:string) =>  ({type:"SET_DATESTART",date} as const);
export const setDateEnd = (date:string) =>  ({type:"SET_DATEEND",date} as const);
export const setDateType = (editedDate:DateType) =>  ({type:"SET_DATETYPE",editedDate} as const);
