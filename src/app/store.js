import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import searchSliceReducer from "../features/searchSlice";
import { authApi } from "../api/authApi";
import { productApi } from "../api/productApi";
import { kartApi } from "../api/kartApi";


export const store = configureStore({
  reducer: {
    search: searchSliceReducer,
    [productApi.reducerPath]: productApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [kartApi.reducerPath]: kartApi.reducer,
  },
  middleware: (gDM) => gDM().concat(productApi.middleware).concat(authApi.middleware).concat(kartApi.middleware),
});

setupListeners(store.dispatch);
