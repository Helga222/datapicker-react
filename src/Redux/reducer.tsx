import dayjs, { Dayjs } from "dayjs";
import { DPType, DateType } from "../types";

const now = dayjs();
const initialState = {
  dateStart: now.toDate(),
  dateEnd: now.toDate(),

};
interface ActionStart {
  date: Date;
  type: "SET_DATESTART";
}

interface ActionEnd {
  date: Date;
  type: "SET_DATEEND";
}

interface ActionType {
  editedDate: DateType;
  type: "SET_DATETYPE";
}

type Action = ActionStart | ActionEnd | ActionType;

export const reducerDate = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SET_DATESTART":
      return { ...state, dateStart: action.date };
    case "SET_DATEEND":
      return { ...state, dateEnd: action.date };
    case "SET_DATETYPE":
      return { ...state, editedDate: action.editedDate };
    default:
      return state;
  }
};
