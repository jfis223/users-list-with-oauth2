import type { PropsWithChildren } from "react";
import Styled from "./background_image_layout.styled.ts";
import { Texture } from "../../../assets/icons";

export default function BackgroundImageLayout({ children }: PropsWithChildren) {
  return (
    <Styled.Section>
      <Styled.BlackWrapper>
        {children}
        <Styled.PositionedTexture>
          <Texture />
        </Styled.PositionedTexture>
      </Styled.BlackWrapper>
      <Styled.Background src={"https://source.unsplash.com/random/1920x1080/?texture"} alt={"Background"} />
    </Styled.Section>
  );
}
