import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import session from "./session/session.slice.ts";
import sessionSaga from "./session/session.saga.ts";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: { session },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga)
});
saga.run(sessionSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
