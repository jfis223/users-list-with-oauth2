import { useRoutes } from "react-router-dom";
import { loggedInRoutes } from "../../../router/routes.tsx";

export default function BaseLayout() {
  const page = useRoutes(loggedInRoutes);

  return <div>{page}</div>;
}
