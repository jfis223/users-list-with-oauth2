import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import session from "./session/session.slice.ts";
import users from "./users/users.slice.ts";
import sessionSaga from "./session/session.saga.ts";
import usersSaga from "./users/users.saga.ts";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: { session, users },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga)
});
saga.run(sessionSaga);
saga.run(usersSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
