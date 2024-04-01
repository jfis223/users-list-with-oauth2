import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { UsersSlice } from "../view_models/users.slice.ts";
import type { User } from "../../core/users/domain/models/user.ts";
import type { Page } from "../../core/app/domain/models/page.ts";
import type { RootState } from "../index.ts";
import type EditUserInput from "../../core/users/domain/view_models/edit_user_input.ts";
import type NewUserInput from "../../core/users/domain/view_models/new_user_input.ts";

const initialState = (): UsersSlice => ({
  users: null,
  isLoading: true,
  hasError: false,
  userDetail: null,
  patchDetailSuccess: null,
  postDetailSuccess: null
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
    patchUserDetail: (state, action: PayloadAction<EditUserInput>) => {
      if (action.payload) {
        state.patchDetailSuccess = false;
        state.isLoading = true;
        state.hasError = false;
      }
    },
    patchUserDetailSuccess: (state) => {
      state.hasError = false;
      state.isLoading = false;
      state.patchDetailSuccess = true;
    },
    patchUserDetailFailure: (state) => {
      state.patchDetailSuccess = false;
      state.isLoading = false;
      state.hasError = true;
    },
    postUserDetail: (state, action: PayloadAction<NewUserInput>) => {
      if (action.payload) {
        state.postDetailSuccess = null;
        state.isLoading = true;
        state.hasError = false;
      }
    },
    postUserDetailSuccess: (state, action: PayloadAction<string>) => {
      state.hasError = false;
      state.isLoading = false;
      state.postDetailSuccess = action.payload;
    },
    postUserDetailFailure: (state) => {
      state.postDetailSuccess = null;
      state.isLoading = false;
      state.hasError = true;
    }
  }
});

export const {
  getUsersFetch,
  getUsersSuccess,
  getUsersFailure,
  getUserDetailFetch,
  getUserDetailSuccess,
  getUserDetailFailure,
  patchUserDetailSuccess,
  patchUserDetail,
  patchUserDetailFailure,
  postUserDetail,
  postUserDetailSuccess,
  postUserDetailFailure
} = usersSlice.actions;

const selectUsersBase = (state: RootState) => state.users;

export const selectUsers = createSelector(selectUsersBase, (slice) => slice.users);
export const selectUserDetail = createSelector(selectUsersBase, (slice) => slice.userDetail);
export const selectUserLoading = createSelector(selectUsersBase, (slice) => slice.isLoading);
export const selectUserError = createSelector(selectUsersBase, (slice) => slice.hasError);
export const selectUserPatchSuccess = createSelector(selectUsersBase, (slice) => slice.patchDetailSuccess);
export const selectUserPostSuccess = createSelector(selectUsersBase, (slice) => slice.postDetailSuccess);

export default usersSlice.reducer;
