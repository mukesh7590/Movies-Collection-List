import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import movies from "./movieSlice";
import search from "./searchSlice";

const persistConfig = {
   key: "root",
   storage,
};

const reducer = combineReducers({
   movies,
   search,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
   reducer: persistedReducer,
});
export default store;
