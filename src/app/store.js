import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import searchSliceReducer from "../features/searchSlice";
import { iKartApi } from "../api/iKartApi";

export const store = configureStore({
  reducer: {
    search: searchSliceReducer,
    [iKartApi.reducerPath]: iKartApi.reducer,
  },
  middleware: (gDM) => gDM().concat(iKartApi.middleware),
});

setupListeners(store.dispatch);
