import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const iKartApi = createApi({
  reducerPath: "iKartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
  }),
  tagTypes: [
    "auth",
    "user",
    "cart",
    "product",
    "logout",
    "signin",
    "isLoggedIn",
  ],
  endpoints: (builder) => ({
    // @public
    // get Auth
    getAuth: builder.query({
      query: () => ({
        url: "auth/isLoggedIn",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["auth", "user", "cart", "product"],
      invalidatesTags: ["isLoggedIn"],
    }),

    // @public
    // get Sigin
    getSignIn: builder.mutation({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body: body,
        credentials: "include",
      }),
      invalidatesTags: ["auth", "signin"],
    }),

    // @public
    // get Signup
    getSignUp: builder.mutation({
      query: (body) => ({
        url: "auth/register",
        method: "POST",
        body: body,
        credentials: "include",
      }),
      invalidatesTags: ["auth"],
    }),

    // @public
    // get Logout
    getLogOut: builder.mutation({
      query: () => ({
        url: "auth/logout",
        method: "GET",
        credentials: "include",
      }),
      invalidatesTags: ["auth", "logout"],
    }),

    // @public
    // Seller Registration
    getSellerRegistration: builder.mutation({
      query: (body) => ({
        url: "seller/registration",
        method: "POST",
        body: body,
        credentials: "include",
      }),
      invalidatesTags: ["auth"],
    }),

    // #################################################

    // @public
    // get Auth User
    getAuthUser: builder.query({
      query: () => ({
        url: "user/getUser",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["user", "isLoggedIn"],
    }),

    // @public
    // update User
    updateUser: builder.mutation({
      query: (body) => ({
        url: "user/updateUser",
        method: "PATCH",
        body: body,
        credentials: "include",
      }),
      invalidatesTags: ["user"],
    }),

    // @public
    // update user password
    updateUserPassword: builder.mutation({
      query: (body) => ({
        url: "user/updateUserPassword",
        method: "PATCH",
        body: body,
        credentials: "include",
      }),
      invalidatesTags: ["user"],
    }),

    // @public
    // delete User
    deleteUser: builder.mutation({
      query: () => ({
        url: "user/deleteUser",
        method: "DELETE",
        body: "",
        credentials: "include",
      }),
      invalidatesTags: ["user"],
    }),

    // ################################################################

    //@public
    // get All Products
    getAllProducts: builder.query({
      query: () => ({
        url: "product/getAllProduct",
        method: "GET",
      }),
      providesTags: ["product"],
    }),

  
    //@public
    // get All filtered Products
    getCatProduct: builder.query({
      query: () => ({
        url: "product/getCatProduct",
        method: "GET",
      }),
      providesTags: ["product"],
    }),

    //@public
    // search product by key value
    getSearchProducts: builder.query({
      query: (search) => ({
        url: `product/searchProduct/${search}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),

    //@public
    // get single product by id
    getSingleProduct: builder.query({
      query: (props) => ({
        url: `product/getProduct/${props.id}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["product"],
    }),

    // ##############################################################

    // @private
    // get Seller Product
    getSellerProduct: builder.query({
      query: () => ({
        url: "product/seller/getAllProduct",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["product", "signin"],
    }),

    // @private
    // delete Seller Product
    deleteSellerProduct: builder.mutation({
      query: (props) => ({
        url: `product/seller/deleteProduct/${props.id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["product"],
    }),

    // @private
    // update Seller Product
    updateSellerProduct: builder.mutation({
      query: (props) => ({
        url: `product/seller/updateProduct/${props.id}`,
        method: "PATCH",
        body: props.body,
        credentials: "include",
      }),
      invalidatesTags: ["product"],
    }),

    // @private
    // add Seller product
    addSellerProduct: builder.mutation({
      query: (props) => ({
        url: "product/seller/addProduct",
        method: "POST",
        body: props.body,
        credentials: "include",
      }),
      invalidatesTags: ["product"],
    }),

    // ############################################################

    // @private
    // get Cart Items
    getCartItems: builder.query({
      query: () => ({
        url: "user/cart/getItems",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["cart", "signin"],
    }),

    // @private
    // get total Cart count
    getTotalCartCount: builder.query({
      query: () => ({
        url: "user/cart/getTotalCartCount",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["cart", "signin"],
    }),

    // @private
    // get Cart Count
    getCartItemCount: builder.query({
      query: (prop) => ({
        url: `user/cart/getCartItemCount/${prop.id}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["cart", "signin"],
    }),

    // @private
    // add Cart Item
    addCartItem: builder.mutation({
      query: (props) => ({
        url: "user/cart/addItem",
        method: "PUT",
        body: props.body,
        credentials: "include",
      }),
      invalidatesTags: ["cart"],
    }),

    // @private
    // remove Cart Item
    removeCartItem: builder.mutation({
      query: (props) => ({
        url: `user/cart/removeItem/${props.id}`,
        method: "PUT",
        credentials: "include",
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});

export const {
  useGetAuthQuery,
  useGetSignInMutation,
  useGetSignUpMutation,
  useGetLogOutMutation,
  useGetSellerRegistrationMutation,
  useGetAuthUserQuery,
  useUpdateUserMutation,
  useUpdateUserPasswordMutation,
  useDeleteUserMutation,
  useGetAllProductsQuery,
  useGetSearchProductsQuery,
  useGetSellerProductQuery,
  useAddSellerProductMutation,
  useUpdateSellerProductMutation,
  useDeleteSellerProductMutation,
  useGetSingleProductQuery,
  useGetCartItemsQuery,
  useAddCartItemMutation,
  useRemoveCartItemMutation,
  useGetCartItemCountQuery,
  useGetTotalCartCountQuery,
  useGetCatProductQuery,
} = iKartApi;
