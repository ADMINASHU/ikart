import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const kartApi = createApi({
  reducerPath: "kartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
  }),
  tagTypes: ["kart"],
  endpoints: (builder) => ({
    // @private
    getCartItems: builder.query({
      query: (props) => ({
        url: `getCart/${props.userId}`,
        method: "GET",
        credentials: "include",
        headers: {
          authorization: props.token,
        },
      }),
      providesTags: ["kart"],
    }),


    // @private
    getCartCount: builder.query({
      query: (props) => ({
        url: `getCount/${props.userId}/${props.id}`,
        method: "GET",
        credentials: "include",
        headers: {
          authorization: props.token,
        },
      }),
      providesTags: ["kart"],
    }),

    // @private
    addCartItem: builder.mutation({
      query: (props) => ({
        url: `addCart/${props.id}`,
        method: "PUT",
        body: props.body,
        credentials: "include",
        headers: {
          authorization: props.token,
        },
      }),
      invalidatesTags: ["kart"],
    }),

    // @private
    removeCartItem: builder.mutation({
      query: (props) => ({
        url: `removeCart/${props.id}`,
        method: "PUT",
        body: props.body,
        credentials: "include",
        headers: {
          authorization: props.token,
        },
      }),
      invalidatesTags: ["kart"],
    }),


  }),
});

export const {
  useGetCartItemsQuery,
  useGetCartCountQuery,
  useAddCartItemMutation,
  useRemoveCartItemMutation,
} = kartApi;
