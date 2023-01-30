import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isModelShown: false,
};

export const uiSlices = createSlice({
  initialState,
  name: "ui",
  reducers: {
    handleLoading(state, action) {
      state.isLoading = action.payload;
    },
    handleModel(state, action) {
      state.isModelShown = action.payload;
    },
  },
});

export const { handleLoading, handleModel } = uiSlices.actions;
