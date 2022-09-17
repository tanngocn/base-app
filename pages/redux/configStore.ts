import { persistStore } from "redux-persist";
import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const persistedReducer = combineReducers({ rootReducer });
const middleWare = getDefaultMiddleware({ thunk: false, serializableCheck: false });
const env = "development";

const store = configureStore({
  reducer: persistedReducer,
  devTools: env === process.env.NEXT_PUBLIC_ENV,
  middleware: [...middleWare],
});

const persistor = persistStore(store);
export default function config() {
  return { store, persistor };
}
