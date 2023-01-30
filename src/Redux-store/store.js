import { configureStore } from "@reduxjs/toolkit";
import { uiSlices } from "./ui-slices";

export const store = configureStore({
  reducer: {
    ui: uiSlices.reducer,
  },
});
