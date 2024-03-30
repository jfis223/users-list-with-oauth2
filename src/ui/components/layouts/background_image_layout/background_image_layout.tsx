import type { PropsWithChildren } from "react";
import Styled from "./background_image_layout.styled.ts";

export default function BackgroundImageLayout({ children }: PropsWithChildren) {
  return (
    <Styled.Section>
      {children}
      <Styled.Background src={"https://source.unsplash.com/random/1920x1080/?texture"} alt={"Background"} />
    </Styled.Section>
  );
}
