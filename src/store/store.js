import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../lib/apis/authApis";
import { userApi } from "../lib/apis/userApis";
import userSlice from "../lib/redux/userSlice";
import requestMessageSlice from "../lib/redux/requestMessageSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    userState: userSlice,
    requestMessageState: requestMessageSlice,
  },

  // devTools: process.env.NODE_ENV !== "development",

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, userApi.middleware),
});

setupListeners(store.dispatch);
