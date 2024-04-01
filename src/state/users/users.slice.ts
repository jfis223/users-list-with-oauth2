import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { UsersSlice } from "../view_models/users.slice.ts";
import type { User } from "../../core/users/domain/models/user.ts";
import type { Page } from "../../core/app/domain/models/page.ts";
import type { RootState } from "../index.ts";

const initialState = (): UsersSlice => ({
  users: null,
  isLoading: true,
  hasError: false,
  userDetail: null
});

export const usersSlice = createSlice({
  name: "users",
  initialState: initialState(),
  reducers: {
    getUsersFetch: (state, action: PayloadAction<number>) => {
      if (action.payload) {
        state.isLoading = true;
        state.hasError = false;
      }
    },
    getUsersSuccess: (state, action: PayloadAction<Page<User> | null>) => {
      state.hasError = false;
      state.users = action.payload;
      state.isLoading = false;
    },
    getUsersFailure: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    getUserDetailFetch: (state, action: PayloadAction<string>) => {
      if (action.payload) {
        state.isLoading = true;
        state.hasError = false;
      }
    },
    getUserDetailSuccess: (state, action: PayloadAction<User | null>) => {
      state.hasError = false;
      state.userDetail = action.payload;
      state.isLoading = false;
    },
    getUserDetailFailure: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    getUserDetailClear: (state) => {
      state.userDetail = null;
    }
  }
});

export const { getUsersFetch, getUsersSuccess, getUsersFailure, getUserDetailFetch, getUserDetailSuccess, getUserDetailFailure, getUserDetailClear } =
  usersSlice.actions;

const selectUsersBase = (state: RootState) => state.users;

export const selectUsers = createSelector(selectUsersBase, (slice) => slice.users);
export const selectUserDetail = createSelector(selectUsersBase, (slice) => slice.userDetail);
export const selectUserLoading = createSelector(selectUsersBase, (slice) => slice.isLoading);
export const selectUserError = createSelector(selectUsersBase, (slice) => slice.hasError);

export default usersSlice.reducer;
