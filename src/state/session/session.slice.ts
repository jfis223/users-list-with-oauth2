import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index.ts";
import type { LogInPayload, SessionSlice } from "../view_models/session.slice.ts";
import type { User } from "../../core/users/domain/models/user.ts";

const initialState = (): SessionSlice => ({
  isLoading: false,
  isLoggedIn: false,
  loginError: false,
  profile: null
});

export const sessionSlice = createSlice({
  name: "session",
  initialState: initialState(),
  reducers: {
    logInFetch: (state) => {
      state.isLoading = true;
      state.loginError = false;
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
      state.loginError = false;
    },
    logInFailure: (state) => {
      state.isLoading = false;
      state.loginError = true;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.profile = null;
    },
    localLoginFetch: (state, action: PayloadAction<LogInPayload>) => {
      if (action.payload.email && action.payload.password) {
        state.isLoading = true;
      }
    }
  }
});
const selectSessionBase = (state: RootState) => state.session;

export const { logIn, logInFetch, logInFailure, logOut, localLoginFetch } = sessionSlice.actions;

export const selectIsLoggedIn = createSelector(selectSessionBase, (slice) => slice.isLoggedIn);
export const selectUser = createSelector(selectSessionBase, (slice) => slice.profile);
export const selectLoginError = createSelector(selectSessionBase, (slice) => slice.loginError);

export default sessionSlice.reducer;
