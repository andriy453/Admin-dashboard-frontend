import { configureStore,combineReducers} from "@reduxjs/toolkit";
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


const persistConfig = {
  key: "auth",
  storage,
  whitelist:'auth' ,
};
const combinedReducer = combineReducers({
  auth: authReducer,
  lists: listsReducer,
})

const persistedReducer = persistReducer(persistConfig, combinedReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);