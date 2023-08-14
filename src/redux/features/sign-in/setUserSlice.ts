import { RootState } from "redux/Interfaces/RootState";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetPreviewProfileDTO } from "modules/user/components/accountInformation/dto/get-user.dto";

const initialState: RootState<GetPreviewProfileDTO | null> = {
  value: {} as GetPreviewProfileDTO,
  status: "idle",
};

export const setUserSlide = createSlice({
  name: "setUser",
  initialState,
  reducers: {
    setUser: (state, actions: PayloadAction<GetPreviewProfileDTO | null>) => {
      state.value = actions.payload;
    },
  },
});

export const { setUser } = setUserSlide.actions;
export default setUserSlide.reducer;
