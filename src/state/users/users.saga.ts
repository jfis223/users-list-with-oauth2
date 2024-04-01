import { call, put, takeEvery } from "redux-saga/effects";
import { getUsersFailure, getUsersSuccess } from "./users.slice.ts";
import type { SagaIterator } from "redux-saga";
import { locator } from "../../core/app/ioc";
import type { IocProvider } from "../../core/app/ioc/interfaces.ts";
import { TYPES } from "../../core/app/ioc/types.ts";
import { instanceToPlain } from "class-transformer";
import type { User } from "../../core/users/domain/models/user.ts";
import type { GetUsersListUseCase } from "../../core/users/domain/use_cases/get_users_list_use_case.ts";
import type { Page } from "../../core/app/domain/models/page.ts";
import type { PayloadAction } from "@reduxjs/toolkit";

function* workGetUsersFetch(action: PayloadAction<number>): SagaIterator {
  try {
    const getUsersListUseCase = yield call(() => locator.get<IocProvider<GetUsersListUseCase>>(TYPES.GetUsersListUseCase)());
    const users = yield call(() => getUsersListUseCase.execute(action.payload));
    yield put(getUsersSuccess(instanceToPlain(users) as Page<User>));
  } catch {
    yield put(getUsersFailure());
  }
}

function* usersSaga(): SagaIterator {
  yield takeEvery("users/getUsersFetch", workGetUsersFetch);
}

export default usersSaga;