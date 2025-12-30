import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFeatured: false,
  text: "",
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    showFeatured: (state, action) => {
      state.isFeatured = action.payload;
    },
    searchedText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export default booksSlice.reducer;
export const { showFeatured, searchedText } = booksSlice.actions;
