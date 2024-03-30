import { call, put, takeEvery } from "redux-saga/effects";
import type { SagaIterator } from "redux-saga";
import { logIn } from "./session.slice.ts";
import { locator } from "../../core/app/ioc";
import type { IocProvider } from "../../core/app/ioc/interfaces.ts";
import type { GetAuthProfileUseCase } from "../../core/auth/domain/use_cases/get_auth_profile_use_case.ts";
import { TYPES } from "../../core/app/ioc/types.ts";
import { instanceToPlain } from "class-transformer";
import type { User } from "../../core/users/domain/models/user.ts";

function* workLogIn(): SagaIterator {
  const getAuthProfileUseCase = yield call(() => locator.get<IocProvider<GetAuthProfileUseCase>>(TYPES.GetAuthProfileUseCase)());
  const user = yield call(() => getAuthProfileUseCase.execute());
  yield put(logIn(instanceToPlain(user) as User));
}

function* sessionSaga(): SagaIterator {
  yield takeEvery("session/logInFetch", workLogIn);
}

export default sessionSaga;
