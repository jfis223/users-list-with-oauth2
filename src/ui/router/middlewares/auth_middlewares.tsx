import type { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../state/session/session.slice.ts";
import { useLocation } from "react-router-dom";

export function LoggedInMiddleware({ children }: PropsWithChildren) {
  const isLogged = useSelector(selectIsLoggedIn);
  const location = useLocation();

  if (!isLogged) {
    return <Navigate to={"/auth/login" + location.search} replace />;
  }
  return <>{children}</>;
}

export function LoggedOutMiddleware({ children }: PropsWithChildren) {
  const isLogged = useSelector(selectIsLoggedIn);
  const location = useLocation();

  if (isLogged) {
    return <Navigate to={"/users" + location.search} replace />;
  }
  return <>{children}</>;
}
