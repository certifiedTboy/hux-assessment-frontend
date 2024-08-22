import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: null,
};

export const requestMessageSlice = createSlice({
  initialState,
  name: "requestMessageState",
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export default requestMessageSlice.reducer;

export const { setMessage } = requestMessageSlice.actions;
