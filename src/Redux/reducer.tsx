import dayjs, { Dayjs } from "dayjs";
import { DPType } from "../types";

const now = dayjs();
const initialState: DPType = {
  dateStart: now.toDate(),
  dateEnd: now.toDate(),
};
interface ActionStart {
  dateStart: Date;
  type: "SET_DATESTART";
}

interface ActionEnd {
  dateEnd: Date;
  type: "SET_DATEEND";
}

type Action = ActionStart | ActionEnd

export const reducerDate = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SET_DATESTART":
      return { ...state, date: action.dateStart };
    case "SET_DATEEND":
      return { ...state, date: action.dateEnd };
    default:
      return state;
  }
};
