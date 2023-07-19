import { RootState } from "redux/Interfaces/RootState";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "modules/user/interfaces/user.interface";

const initialState: RootState<Omit<IUser, "accessToken"> | null> = {
  value: null,
  status: "idle",
};

export const setUserSlide = createSlice({
  name: "setUser",
  initialState,
  reducers: {
    setUser: (
      state,
      actions: PayloadAction<Omit<IUser, "accessToken"> | null>
    ) => {
      state.value = actions.payload;
    },
  },
});

export const { setUser } = setUserSlide.actions;
export default setUserSlide.reducer;
