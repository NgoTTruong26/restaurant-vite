import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { GetUserProfileDTO } from 'modules/customer/components/user/components/accountInformation/dto/get-user.dto';
import { RootState } from 'redux/Interfaces/RootState';

const initialState: RootState<GetUserProfileDTO | null> = {
  value: null,
  status: 'idle',
};

export const authSlide = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, actions: PayloadAction<GetUserProfileDTO | null>) => {
      state.value = actions.payload;
    },
    signOut: (state) => {
      state.value = null;
      localStorage.removeItem(import.meta.env.VITE_ACCESS_TOKEN);
      Cookies.remove(import.meta.env.VITE_REFRESH_TOKEN);
    },
  },
});

export const { setUser, signOut } = authSlide.actions;
export default authSlide.reducer;
