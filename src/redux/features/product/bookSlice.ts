import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IBooks {
  status: boolean;
  priceRange: number;
}

const initialState: IBooks = {
  status: false,
  priceRange: 150,
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    toggleState: (state) => {
      state.status = !state.status;
    },
  },
});

export const { toggleState } = bookSlice.actions;

export default bookSlice.reducer;
