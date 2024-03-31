import BackgroundImageLayout from "../../../components/layouts/background_image_layout/background_image_layout.tsx";
import Card from "../../../components/card/card.tsx";
import Styled from "./login.styled.ts";
import { Amazon, Github, Google } from "../../../assets/icons";
import { locator } from "../../../../core/app/ioc";
import type { IocProvider } from "../../../../core/app/ioc/interfaces.ts";
import { TYPES } from "../../../../core/app/ioc/types.ts";
import type { PostLocalLoginUseCase } from "../../../../core/auth/domain/use_cases/post_local_login_use_case.ts";
import { useDispatch } from "react-redux";
import { logInFetch } from "../../../../state/session/session.slice.ts";
import { useCallback } from "react";

export default function LogIn() {
  const dispatch = useDispatch();

  const post = useCallback(async () => {
    const getAuthProfileUseCase = await locator.get<IocProvider<PostLocalLoginUseCase>>(TYPES.PostLocalLoginUseCase)();
    const result = await getAuthProfileUseCase.execute("eve.holt@reqres.in", "cityslicka");
    if (result) {
      dispatch(logInFetch());
    }
  }, [dispatch]);

  return (
    <BackgroundImageLayout>
      <Card>
        <Styled.Title>Welcome</Styled.Title>
        <button onClick={post}>LOGIN</button>
        <Styled.ButtonWrapper>
          <Styled.SocialButton href="http://localhost:3000/auth/google" target="_self">
            Google
            <Google />
          </Styled.SocialButton>
          <Styled.SocialButton href="http://localhost:3000/auth/github" target="_self">
            Github
            <Github />
          </Styled.SocialButton>
          <Styled.SocialButton href="http://localhost:3000/auth/amazon" target="_self">
            Amazon
            <Amazon />
          </Styled.SocialButton>
        </Styled.ButtonWrapper>
      </Card>
    </BackgroundImageLayout>
  );
}
