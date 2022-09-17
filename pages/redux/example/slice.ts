import { createSlice } from "@reduxjs/toolkit";

export type counter = {
  count: number;
};

const initialState = {
  count: 0,
};

const countSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: counter, action) => {
      state.count += 1;
    },
  },
});

export const { increment } = countSlice.actions;
export default countSlice.reducer;
