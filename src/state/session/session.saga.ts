import { put, takeEvery } from "redux-saga/effects";
import { logIn } from "./session.slice.ts";
import type { SagaIterator } from "redux-saga";

function* workLogIn(): SagaIterator {
  // TODO Login logic
  yield put(logIn());
}

function* sessionSaga(): SagaIterator {
  yield takeEvery("session/logIn", workLogIn);
}

export default sessionSaga;
