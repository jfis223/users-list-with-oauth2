import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../index.ts";

const initialState = () => ({
  isLoggedIn: false
});

export const sessionSlice = createSlice({
  name: "session",
  initialState: initialState(),
  reducers: {
    logIn: (state) => {
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
    }
  }
});
const selectSessionBase = (state: RootState) => state.session;

export const { logIn, logOut } = sessionSlice.actions;

export const selectIsLoggedIn = createSelector(selectSessionBase, (slice) => slice.isLoggedIn);

export default sessionSlice.reducer;
