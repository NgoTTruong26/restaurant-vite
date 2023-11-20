import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import listLastPageSliceReducer from 'redux/features/get-menu/listLastPageSlice';
import setAdminReducer from '../features/auth-admin/setAdminSlice';
import setUserReducer from '../features/auth/setUserSlice';
import setNavbarItemActiveReducer from '../features/set-active/setActiveSlice';

export const store = configureStore({
  reducer: {
    setNavbarItemActive: setNavbarItemActiveReducer,
    setListLastPage: listLastPageSliceReducer,
    setUser: setUserReducer,
    setAdmin: setAdminReducer,
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
