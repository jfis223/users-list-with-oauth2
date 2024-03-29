import type { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../state/session/session.slice.ts";

export function LoggedInMiddleware({ children }: PropsWithChildren) {
  const isLogged = useSelector(selectIsLoggedIn);

  if (!isLogged) {
    return <Navigate to={"/auth/login"} replace />;
  }
  return <>{children}</>;
}

export function LoggedOutMiddleware({ children }: PropsWithChildren) {
  const isLogged = useSelector(selectIsLoggedIn);

  if (isLogged) {
    return <Navigate to={"/"} replace />;
  }
  return <>{children}</>;
}
