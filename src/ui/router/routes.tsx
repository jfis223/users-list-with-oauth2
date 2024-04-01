import type { RouteObject } from "react-router-dom";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { LoggedInMiddleware, LoggedOutMiddleware } from "./middlewares/auth_middlewares.tsx";
import LogIn from "../features/auth/login/login.tsx";
import Users from "../features/users/users.tsx";
import UserDetail from "../features/users/components/user_detail/user_detail.tsx";
import UserEdit from "../features/users/components/user_edit/user_edit.tsx";
import UserNew from "../features/users/components/user_new/user_new.tsx";

const BaseLayout = lazy(() => import("../components/layouts/base_layout/base_layout.tsx"));

export const routes = createBrowserRouter([
  {
    path: "/auth/*",
    element: (
      <LoggedOutMiddleware>
        <LogIn />
      </LoggedOutMiddleware>
    )
  },
  {
    path: "/*",
    element: (
      <LoggedInMiddleware>
        <BaseLayout />
      </LoggedInMiddleware>
    )
  }
]);

export const loggedInRoutes: Array<RouteObject> = [
  { index: true, element: <Navigate to={"/users"} /> },
  { path: "/users/:id/", element: <UserDetail /> },
  { path: "/users/:id/edit/", element: <UserEdit /> },
  { path: "/users/new/", element: <UserNew /> },
  { path: "/users/*", element: <Users /> },
  { path: "/auth/*", element: <Navigate to={"/users"} /> },
  { path: "*", element: <h1>404</h1> }
];
