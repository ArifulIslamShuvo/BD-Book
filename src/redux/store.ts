import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userSlice from "./features/user/userSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
