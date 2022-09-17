import { createSlice } from "@reduxjs/toolkit";

type auth = {
  token: string;
  role: string;
};

const initialState = {
  token: "",
  role: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state: auth, action) => {
      state.token = action.payload;
    },
    setRole: (state: auth, action) => {
      state.role = action.payload;
    },
  },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;
