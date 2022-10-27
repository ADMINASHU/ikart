import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
  }),
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    //@private
    getAuthUser: builder.query({
      keepUnusedDataFor: 0,
      query: () => ({
        url: "loggedIn",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["auth"],
    }),

    //@public
    getSignIn: builder.mutation({
      query: (body) => ({
        url: "signin",
        method: "POST",
        body: body,
        credentials: "include",
      }),
      invalidatesTags: ["auth"],
    }),

    //@public
    getSignUp: builder.mutation({
      query: (body) => ({
        url: "signup",
        method: "POST",
        body: body,
        credentials: "include",
      }),
      invalidatesTags: ["auth"],
    }),

    //@public
    getSellerRegistration: builder.mutation({
      query: (body) => ({
        url: "seller",
        method: "POST",
        body: body,
        credentials: "include",
      }),
      invalidatesTags: ["auth"],
    }),

    //@public
    getLogOut: builder.mutation({
      query: () => ({
        url: "logout",
        method: "POST",
        body: "",
        credentials: "include",
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const {
  useGetAuthUserQuery,
  useGetSignInMutation,
  useGetLogOutMutation,
  useGetSignUpMutation,
  useGetSellerRegistrationMutation,
} = authApi;
