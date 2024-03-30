import type { PropsWithChildren } from "react";
import Styled from "./card.styled.ts";

export default function Card({ children }: PropsWithChildren) {
  return <Styled.Card>{children}</Styled.Card>;
}
