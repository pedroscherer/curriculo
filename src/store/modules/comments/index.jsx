import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "comments",
  initialState: [],
  reducers: {
    insertComment: (state, action) => state,
    startComments: (state, action) => action.payload,
  },
});

export default slice.reducer;
export const { insertComment, startComments } = slice.actions;
