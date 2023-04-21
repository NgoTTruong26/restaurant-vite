import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import setNavbarItemActiveReducer from "../features/setActive/setActiveSlide";

export const store = configureStore({
  reducer: {
    setNavbarItemActive: setNavbarItemActiveReducer,
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
