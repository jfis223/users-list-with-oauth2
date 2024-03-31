import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index.ts";
import type { SessionSlice } from "../../ui/view_models/session.slice.ts";
import type { User } from "../../core/users/domain/models/user.ts";

const initialState = (): SessionSlice => ({
  isLoading: false,
  isLoggedIn: false,
  profile: null
});

export const sessionSlice = createSlice({
  name: "session",
  initialState: initialState(),
  reducers: {
    logInFetch: (state) => {
      state.isLoading = true;
    },
    logIn: (state, action: PayloadAction<User | null>) => {
      if (action.payload) {
        state.isLoggedIn = true;
        state.profile = {
          name: action.payload.name,
          id: action.payload.id,
          avatar: action.payload.avatar,
          email: action.payload.email
        };
      }
      state.isLoading = false;
    },
    logInFailure: (state) => {
      state.isLoading = false;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.profile = null;
    }
  }
});
const selectSessionBase = (state: RootState) => state.session;

export const { logIn, logInFetch, logInFailure, logOut } = sessionSlice.actions;

export const selectIsLoggedIn = createSelector(selectSessionBase, (slice) => slice.isLoggedIn);
export const selectUser = createSelector(selectSessionBase, (slice) => slice.profile);

export default sessionSlice.reducer;
