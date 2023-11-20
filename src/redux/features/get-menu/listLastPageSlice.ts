import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IListLastPage {
  idBuffetMenu: string;
  idSetDish: string;
}

interface ListLastPageState {
  value: IListLastPage[];
}

const initialState: ListLastPageState = {
  value: [],
};

const listLastPageSlice = createSlice({
  name: 'listLastPage',
  initialState,
  reducers: {
    setListLastPage: (state, actions: PayloadAction<IListLastPage>) => {
      return {
        ...state,
        value: [...state.value, actions.payload],
      };
    },
  },
});

export const { setListLastPage } = listLastPageSlice.actions;

export default listLastPageSlice.reducer;
