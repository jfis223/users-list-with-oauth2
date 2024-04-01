import { call, put, takeEvery } from "redux-saga/effects";
import type { SagaIterator } from "redux-saga";
import { logIn, logInFailure, logInFetch } from "./session.slice.ts";
import { locator } from "../../core/app/ioc";
import type { IocProvider } from "../../core/app/ioc/interfaces.ts";
import type { GetAuthProfileUseCase } from "../../core/auth/domain/use_cases/get_auth_profile_use_case.ts";
import { TYPES } from "../../core/app/ioc/types.ts";
import { instanceToPlain } from "class-transformer";
import type { User } from "../../core/users/domain/models/user.ts";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { LogInPayload } from "../view_models/session.slice.ts";
import type { PostLocalLoginUseCase } from "../../core/auth/domain/use_cases/post_local_login_use_case.ts";

function* workLogIn(): SagaIterator {
  try {
    const getAuthProfileUseCase = yield call(() => locator.get<IocProvider<GetAuthProfileUseCase>>(TYPES.GetAuthProfileUseCase)());
    const user = yield call(() => getAuthProfileUseCase.execute());
    yield put(logIn(instanceToPlain(user) as User));
  } catch {
    yield put(logInFailure());
  }
}

function* workLocalLogIn(action: PayloadAction<LogInPayload>): SagaIterator {
  try {
    const { email, password } = action.payload;
    const getLocalLoginUseCase = yield call(() => locator.get<IocProvider<PostLocalLoginUseCase>>(TYPES.PostLocalLoginUseCase)());
    const result = yield call(() => getLocalLoginUseCase.execute(email, password));
    if (result) {
      yield put(logInFetch());
    } else {
      yield put(logInFailure());
    }
  } catch {
    yield put(logInFailure());
  }
}

function* sessionSaga(): SagaIterator {
  yield takeEvery("session/logInFetch", workLogIn);
  yield takeEvery("session/localLoginFetch", workLocalLogIn);
}

export default sessionSaga;
