import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFeatured: false,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    showFeatured: (state, action) => {
      state.isFeatured = action.payload;
    },
  },
});

export default booksSlice.reducer;
export const {showFeatured} = booksSlice.actions;