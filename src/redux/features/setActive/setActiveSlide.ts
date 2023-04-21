import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../Interfaces/RootState";

export interface NavbarItemActiveState {
  navbarItemActive: string;
}

const initialState: RootState<NavbarItemActiveState> = {
  value: {
    navbarItemActive: "",
  },
  status: "idle",
};

export const setActiveSlide = createSlice({
  name: "setActive",
  initialState,
  reducers: {
    setNavbarItemActive: (state, actions: PayloadAction<string>) => {
      state.value.navbarItemActive = actions.payload;
    },
  },
});

export const { setNavbarItemActive } = setActiveSlide.actions;
export default setActiveSlide.reducer;
