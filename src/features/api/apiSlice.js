import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }),
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["Books"]
    }),
    addBook: builder.mutation({
        query: (data) => ({
            url: "/books",
            method: "POST",
            body: data
        }),
        invalidatesTags: ["Books"]
    })
  }),
});

export const { useGetBooksQuery, useAddBookMutation } = apiSlice;
