import type { PropsWithChildren } from "react";
import { useEffect, useMemo } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../state/session/session.slice.ts";
import { useLocation } from "react-router-dom";
import { debounce } from "lodash";

export function LoggedInMiddleware({ children }: PropsWithChildren) {
  const isLogged = useSelector(selectIsLoggedIn);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location, "apa");
  console.log(location.search, "epa");

  const verify = useMemo(
    () =>
      debounce(() => {
        if (!isLogged) {
          navigate("/auth/login" + location.search, { replace: true });
        }
      }, 1000),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isLogged, location]
  );

  useEffect(() => {
    verify();
    return () => verify.cancel();
  }, [isLogged, verify]);

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
