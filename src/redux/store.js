import { configureStore } from "@reduxjs/toolkit";
import {tourApi}  from "./TourApi";

export const store = configureStore({
    reducer: {
      // Add the generated reducer as a specific top-level slice
      [tourApi.reducerPath]: tourApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(tourApi.middleware),
  })