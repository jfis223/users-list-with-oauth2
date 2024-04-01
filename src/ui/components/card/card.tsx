import type { PropsWithChildren } from "react";
import Styled from "./card.styled.ts";

export interface Props {
  width?: number;
  widthAuto?: boolean;
  height?: number;
  heightAuto?: boolean;
}

export default function Card({ children, width, widthAuto, heightAuto, height }: PropsWithChildren<Props>) {
  return (
    <Styled.Card widthAuto={widthAuto} width={width} heightAuto={heightAuto} height={height}>
      {children}
    </Styled.Card>
  );
}
