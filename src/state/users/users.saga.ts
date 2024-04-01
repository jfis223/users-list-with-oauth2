import { call, put, takeEvery } from "redux-saga/effects";
import {
  getUserDetailFailure,
  getUserDetailFetch,
  getUserDetailSuccess,
  getUsersFailure,
  getUsersSuccess,
  patchUserDetailFailure,
  patchUserDetailSuccess,
  postUserDetailFailure,
  postUserDetailSuccess
} from "./users.slice.ts";
import type { SagaIterator } from "redux-saga";
import { locator } from "../../core/app/ioc";
import type { IocProvider } from "../../core/app/ioc/interfaces.ts";
import { TYPES } from "../../core/app/ioc/types.ts";
import { instanceToPlain } from "class-transformer";
import type { User } from "../../core/users/domain/models/user.ts";
import type { GetUsersListUseCase } from "../../core/users/domain/use_cases/get_users_list_use_case.ts";
import type { Page } from "../../core/app/domain/models/page.ts";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { GetUserDetailUseCase } from "../../core/users/domain/use_cases/get_user_detail_use_case.ts";
import type { PatchUserUseCase } from "../../core/users/domain/use_cases/patch_user_use_case.ts";
import type EditUserInput from "../../core/users/domain/view_models/edit_user_input.ts";
import type NewUserInput from "../../core/users/domain/view_models/new_user_input.ts";
import type { PostNewUserUseCase } from "../../core/users/domain/use_cases/post_new_user_use_case.ts";

function* workGetUsersFetch(action: PayloadAction<number>): SagaIterator {
  try {
    const getUsersListUseCase = yield call(() => locator.get<IocProvider<GetUsersListUseCase>>(TYPES.GetUsersListUseCase)());
    const users = yield call(() => getUsersListUseCase.execute(action.payload));
    yield put(getUsersSuccess(instanceToPlain(users) as Page<User>));
  } catch {
    yield put(getUsersFailure());
  }
}

function* workGetUserDetailFetch(action: PayloadAction<string>): SagaIterator {
  try {
    const getUserDetailUseCase = yield call(() => locator.get<IocProvider<GetUserDetailUseCase>>(TYPES.GetUserDetailUseCase)());
    const user = yield call(() => getUserDetailUseCase.execute(action.payload));
    yield put(getUserDetailSuccess(instanceToPlain(user) as User));
  } catch {
    yield put(getUserDetailFailure());
  }
}

function* workPatchUserDetail(action: PayloadAction<EditUserInput>): SagaIterator {
  try {
    const patchUserDetailUseCase = yield call(() => locator.get<IocProvider<PatchUserUseCase>>(TYPES.PatchUserUseCase)());
    yield call(() => patchUserDetailUseCase.execute(action.payload));
    yield put(patchUserDetailSuccess());
    yield put(getUserDetailFetch(action.payload.id));
  } catch {
    yield put(patchUserDetailFailure());
  }
}

function* workPostUser(action: PayloadAction<NewUserInput>): SagaIterator {
  try {
    const postNewUserUseCase = yield call(() => locator.get<IocProvider<PostNewUserUseCase>>(TYPES.PostNewUserUseCase)());
    const id = yield call(() => postNewUserUseCase.execute(action.payload));
    yield put(postUserDetailSuccess(id));
  } catch {
    yield put(postUserDetailFailure());
  }
}

function* usersSaga(): SagaIterator {
  yield takeEvery("users/getUsersFetch", workGetUsersFetch);
  yield takeEvery("users/getUserDetailFetch", workGetUserDetailFetch);
  yield takeEvery("users/patchUserDetail", workPatchUserDetail);
  yield takeEvery("users/postUserDetail", workPostUser);
}

export default usersSaga;
