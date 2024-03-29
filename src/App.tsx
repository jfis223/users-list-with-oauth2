import { useEffect } from "react";
import { locator } from "./core/app/ioc";
import type { IocProvider } from "./core/app/ioc/interfaces.ts";
import type { GetUsersListUseCase } from "./core/users/domain/use_cases/get_users_list_use_case.ts";
import { TYPES } from "./core/app/ioc/types.ts";
import { GlobalStyles } from "./ui/styles/Globals.tsx";
import { RouterProvider } from "react-router-dom";
import { routes } from "./ui/router/routes.tsx";

function App() {
  const get = async () => {
    const getPostsUseCase = await locator.get<IocProvider<GetUsersListUseCase>>(TYPES.GetUsersListUseCase)();
    return await getPostsUseCase.execute(1);
  };
  useEffect(() => {
    get().then((r) => console.log(r, "response"));
  }, []);
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
