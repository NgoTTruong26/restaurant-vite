import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { GetPreviewProfileAdminDTO } from 'modules/admin/components/auth/dto/get-profile-admin.dto';
import { RootState } from 'redux/Interfaces/RootState';

const initialState: RootState<GetPreviewProfileAdminDTO | null> = {
  value: null,
  status: 'idle',
};

export const setAdminSlide = createSlice({
  name: 'setAdmin',
  initialState,
  reducers: {
    setAdmin: (
      state,
      actions: PayloadAction<GetPreviewProfileAdminDTO | null>,
    ) => {
      state.value = actions.payload;
    },
    signOutAdmin: (state) => {
      state.value = null;
      localStorage.removeItem(import.meta.env.VITE_ACCESS_TOKEN_ADMIN);
      Cookies.remove(import.meta.env.VITE_REFRESH_TOKEN_ADMIN);
    },
  },
});

export const { setAdmin, signOutAdmin } = setAdminSlide.actions;
export default setAdminSlide.reducer;
