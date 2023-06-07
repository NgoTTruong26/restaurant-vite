import { RootState } from "redux/Interfaces/RootState";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ResponseAuth } from "modules/user/interfaces/user.interface";

const initialState: RootState<Omit<ResponseAuth, "accessToken"> | null> = {
  value: null,
  status: "idle",
};

export const setUserSlide = createSlice({
  name: "setUser",
  initialState,
  reducers: {
    setUser: (
      state,
      actions: PayloadAction<Omit<ResponseAuth, "accessToken"> | null>
    ) => {
      state.value = actions.payload;
    },
  },
});

export const { setUser } = setUserSlide.actions;
export default setUserSlide.reducer;
