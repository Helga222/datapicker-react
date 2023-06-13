
import { configureStore } from "@reduxjs/toolkit";
import { reducerDate } from "./reducer";

export const store = configureStore({
  reducer:reducerDate,

});