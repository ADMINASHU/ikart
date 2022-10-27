
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
  }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    //@public
    getAllProducts: builder.query({
      query: () => ({
        url: "product",
        method: "GET",
      }),
      providesTags: ["product"],
    }),

    //@public
    getSearchProducts: builder.query({
      query: (search) => ({
        url: `searchProduct/${search}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),

    // @private
    getSellerProduct: builder.query({
      query: (props) => ({
        url: `getProduct/${props.username}`,
        method: "GET",
        credentials: "include",
        headers: {
          authorization: props.token,
        },
      }),
      providesTags: ["product"],
    }),

    // @private
    getProductData: builder.query({
      query: (props) => ({
        url: `gProduct/${props.id}`,
        method: "GET",
        credentials: "include",
        headers: {
          authorization: props.token,
        },
      }),
      providesTags: ["product"],
    }),

    // @private
    deleteSellerProduct: builder.mutation({
      query: (props) => ({
        url: `deleteProduct/${props.id}`,
        method: "DELETE",
        credentials: "include",
        headers: {
          authorization: props.token,
        },
      }),
      invalidatesTags: ["product"],
    }),

    // @private
    updateSellerProduct: builder.mutation({
      query: (props) => ({
        url: `updateProduct/${props.id}`,
        method: "PUT",
        body: props.body,
        credentials: "include",
        headers: {
          authorization: props.token,
        },
      }),
      invalidatesTags: ["product"],
    }),

    // @private
    addSellerProduct: builder.mutation({
      query: (props) => ({
        url: "addProduct",
        method: "POST",
        body: props.body,
        credentials: "include",
        headers: {
          authorization: props.token,
        },
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSearchProductsQuery,
  useGetSellerProductQuery,
  useAddSellerProductMutation,
  useUpdateSellerProductMutation,
  useDeleteSellerProductMutation,
  useGetProductDataQuery,
} = productApi;
