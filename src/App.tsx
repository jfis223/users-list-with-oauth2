import { useEffect } from "react";
import { GlobalStyles } from "./ui/styles/Globals.tsx";
import { RouterProvider } from "react-router-dom";
import { routes } from "./ui/router/routes.tsx";
import { useDispatch } from "react-redux";
import { logInFetch } from "./state/session/session.slice.ts";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logInFetch());
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
