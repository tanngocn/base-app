import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import authSlice from "./auth/slice";
import countSlice from "./example/slice";

const authConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authConfig, authSlice),
  count: countSlice,
});

export default rootReducer;
