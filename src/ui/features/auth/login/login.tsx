import BackgroundImageLayout from "../../../components/layouts/background_image_layout/background_image_layout.tsx";
import Card from "../../../components/card/card.tsx";

export default function LogIn() {
  return (
    <BackgroundImageLayout>
      <Card>
        <a href="http://localhost:3000/auth/google" target="_self">
          Google
        </a>
        <a href="http://localhost:3000/auth/github" target="_self">
          Github
        </a>
        <a href="http://localhost:3000/auth/amazon" target="_self">
          Amazon
        </a>
      </Card>
    </BackgroundImageLayout>
  );
}
