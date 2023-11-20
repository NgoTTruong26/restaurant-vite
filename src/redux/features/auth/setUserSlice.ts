import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GetPreviewProfileDTO } from 'modules/customer/components/user/components/accountInformation/dto/get-user.dto';
import { RootState } from 'redux/Interfaces/RootState';

const initialState: RootState<GetPreviewProfileDTO | null> = {
  value: null,
  status: 'loading',
};

export const setUserSlide = createSlice({
  name: 'setUser',
  initialState,
  reducers: {
    setUser: (state, actions: PayloadAction<GetPreviewProfileDTO | null>) => {
      state.value = actions.payload;
      state.status = 'idle';
    },
  },
});

export const { setUser } = setUserSlide.actions;
export default setUserSlide.reducer;
