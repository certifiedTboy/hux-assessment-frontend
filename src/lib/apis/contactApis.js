import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let baseUrl;

if (process.env.NODE_ENV === "development") {
  baseUrl = process.env.REACT_APP_API_DEV_BASE_URL;
} else {
  baseUrl = process.env.REACT_APP_API_PROD_BASE_URL;
}

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    createNewContact: builder.mutation({
      query: (payload) => ({
        url: "/contacts/create",
        method: "POST",
        body: payload,
        credentials: "include",
      }),
    }),

    getAllContacts: builder.mutation({
      query: (payload) => ({
        url: `/contacts?limit=5&page=${payload}`,
        method: "GET",
        credentials: "include",
      }),
    }),

    getSingleContact: builder.mutation({
      query: (payload) => ({
        url: `/contacts/${payload}`,
        method: "GET",
        credentials: "include",
      }),
    }),

    updateContact: builder.mutation({
      query: (payload) => ({
        url: `/contacts/update/${payload}`,
        method: "PUT",
        credentials: "include",
      }),
    }),

    deleteContact: builder.mutation({
      query: (payload) => ({
        url: `/contacts/delete/${payload}`,
        method: "DELETE",
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useCreateNewContactMutation,
  useGetAllContactsMutation,
  useGetSingleContactMutation,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = contactApi;
