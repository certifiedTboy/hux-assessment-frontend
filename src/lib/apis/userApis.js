import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCurrentUser } from "../redux/userSlice";

let baseUrl;

if (process.env.NODE_ENV === "development") {
  baseUrl = process.env.REACT_APP_API_DEV_BASE_URL;
} else {
  baseUrl = process.env.REACT_APP_API_PROD_BASE_URL;
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (payload) => ({
        url: "/users/create",
        method: "POST",
        body: payload,
      }),
    }),

    verifyUser: builder.mutation({
      query: (payload) => ({
        url: "/users/verify",
        method: "PUT",
        body: payload,
      }),
    }),

    setNewPassword: builder.mutation({
      query: (payload) => ({
        url: "/users/password/updated",
        method: "PUT",
        body: payload,
      }),
    }),

    requestPasswordReset: builder.mutation({
      query: (payload) => ({
        url: "/users/password",
        method: "PUT",
        body: payload,
      }),
    }),

    getCurrentUser: builder.mutation({
      query: () => ({
        url: "/users/me",
        method: "GET",
        credentials: "include",
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCurrentUser(data.currentUser));
        } catch (error) {}
      },
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useVerifyUserMutation,
  useSetNewPasswordMutation,
  useRequestPasswordResetMutation,
  useGetCurrentUserMutation,
} = userApi;
