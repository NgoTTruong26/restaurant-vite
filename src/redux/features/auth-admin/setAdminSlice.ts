import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GetPreviewProfileAdminDTO } from 'modules/admin/components/auth/dto/get-profile-admin.dto';
import { RootState } from 'redux/Interfaces/RootState';

const initialState: RootState<GetPreviewProfileAdminDTO | null> = {
  value: null,
  status: 'loading',
};

export const setAdminSlide = createSlice({
  name: 'setAdmin',
  initialState,
  reducers: {
    setAdmin: (
      state,
      actions: PayloadAction<GetPreviewProfileAdminDTO | null>,
    ) => {
      (state.value = actions.payload), (state.status = 'idle');
    },
  },
});

export const { setAdmin } = setAdminSlide.actions;
export default setAdminSlide.reducer;
