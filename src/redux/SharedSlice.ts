import { createSlice } from "@reduxjs/toolkit";

interface SharedSliceState {
  headerStatus: boolean;
}

interface sharedSliceInterface {
  sharedSlice: SharedSliceState;
}

const initialState = {
  headerStatus: false
};

const sharedSlice = createSlice({
  name: "sharedSlice",
  initialState,
  reducers: {
    toggleHeader: (state, action) => {
      state.headerStatus = action.payload;
    }
  }
});

export const { toggleHeader } = sharedSlice.actions;

export const getHeaderStatus = (state: sharedSliceInterface) =>
  state.sharedSlice.headerStatus;

export default sharedSlice.reducer;
