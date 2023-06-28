import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import themeReducer from "./slices/theme";

const combinedReducer = combineReducers({
  theme: themeReducer,
});

const store = configureStore({
  reducer: combinedReducer,
});

type RootState = ReturnType<typeof combinedReducer>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
