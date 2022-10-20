import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
  }),
  endpoints: (builder) => ({

    getAllProducts: builder.query({
      query: () => ({
        url: "product",
        method: "GET",
      }),
    }),
    getSearchProducts: builder.query({
      
      query: (search) => ({
        url: `/searchProduct/${search}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSearchProductsQuery } = productApi;
