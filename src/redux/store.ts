import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import { api } from "./api/apiSlice";
import bookReducer from "./features/product/bookSlice";
import searchReducer from "./features/product/searchSlice";
export const store = configureStore({
  reducer: {
    books: bookReducer,
    user: userReducer,
    searchBook: searchReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
