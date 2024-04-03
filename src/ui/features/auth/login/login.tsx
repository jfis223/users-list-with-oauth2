import BackgroundImageLayout from "../../../components/layouts/background_image_layout/background_image_layout.tsx";
import Card from "../../../components/card/card.tsx";
import Styled from "./login.styled.ts";
import { Amazon, Github, Google } from "../../../assets/icons";
import LoginForm from "./components/login_form/login_form.tsx";
import { useSearchParams } from "react-router-dom";

export default function LogIn() {
  const [params] = useSearchParams();
  return (
    <BackgroundImageLayout>
      <Card width={400}>
        <Styled.Center>
          <div>
            <Styled.Title>Welcome</Styled.Title>
            <Styled.Subtitle>Please log in using one of the methods below</Styled.Subtitle>
          </div>
          <div>
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
            <Styled.OrWrapper>
              <Styled.Line />
              <Styled.Or>OR</Styled.Or>
              <Styled.Line />
            </Styled.OrWrapper>
            <LoginForm />
            {params.get("error") === "true" && <Styled.ErrorMessage>{"We couldn't log you in. Please try again."}</Styled.ErrorMessage>}
          </div>
        </Styled.Center>
      </Card>
    </BackgroundImageLayout>
  );
}
