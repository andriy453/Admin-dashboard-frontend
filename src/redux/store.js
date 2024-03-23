import { configureStore} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { authReducer } from "./auth/authSlice";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist/es/constants";
import { listsReducer } from "./lists/listSlice";


const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken", "refreshToken"],
};
const rootReducer = {
  auth: persistReducer(authPersistConfig, authReducer),
  lists: listsReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);