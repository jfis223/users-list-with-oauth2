import { useRoutes } from "react-router-dom";
import { loggedInRoutes } from "../../../router/routes.tsx";
import BackgroundImageLayout from "../background_image_layout/background_image_layout.tsx";

export default function BaseLayout() {
  const page = useRoutes(loggedInRoutes);

  return <BackgroundImageLayout>{page}</BackgroundImageLayout>;
}
