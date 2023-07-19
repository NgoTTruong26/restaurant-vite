import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import setNavbarItemActiveReducer from "../features/set-active/setActiveSlice";
import setUserReducer from "../features/sign-in/setUserSlice";
import listLastPageSliceReducer from "redux/features/get-menu/listLastPageSlice";

export const store = configureStore({
  reducer: {
    setNavbarItemActive: setNavbarItemActiveReducer,
    setUser: setUserReducer,
    setListLastPage: listLastPageSliceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
