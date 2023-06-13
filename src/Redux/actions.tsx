

export const setDateStart = (date:Date) =>  ({type:"SET_DATESTART",date} as const);
export const setDateEnd = (date:Date) =>  ({type:"SET_DATEEND",date} as const);
