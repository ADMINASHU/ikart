import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { productApi } from "../services/productApi";
import searchSliceReducer from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    search: searchSliceReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (gDM) => gDM().concat(productApi.middleware),
});

setupListeners(store.dispatch);
