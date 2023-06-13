
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { reducerDate } from "./reducer";

export const store = configureStore({
  reducer:reducerDate,
  middleware:(getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});