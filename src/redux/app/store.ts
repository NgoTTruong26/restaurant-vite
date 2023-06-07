import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import setNavbarItemActiveReducer from "../features/setActive/setActiveSlide";
import setUserReducer from "../features/sign-in/setUserSlide";

export const store = configureStore({
  reducer: {
    setNavbarItemActive: setNavbarItemActiveReducer,
    setUser: setUserReducer,
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
