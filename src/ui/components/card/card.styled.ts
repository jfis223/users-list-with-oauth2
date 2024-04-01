import styled, { css } from "styled-components";
import { px2rem } from "../../styles/utils.ts";
import { colors } from "../../styles/colors.ts";
import { minWidth } from "../../styles/breakpoints.ts";
import type { Props } from "./card.tsx";

const Card = styled.div<Props>`
  background-color: ${colors.gray};
  border-radius: ${px2rem(10)};
  border: 1px solid ${colors.clearGray};
  padding: ${px2rem(30)};
  color: ${colors.white};
  z-index: 1;
  width: ${(props) => (props.widthAuto ? "auto" : "100%")};
  height: ${(props) => (props.heightAuto ? "auto" : "100%")};
  font-family: "Noto Sans", sans-serif;
  position: relative;
  transition: all 0.3s ease;
  border: 1px solid ${colors.lightGray};
  ${(props) =>
    minWidth<Props>(
      "sm",
      css`
        width: ${props.width ? px2rem(props.width) : props.widthAuto ? "auto" : "100%"};
        height: ${props.height ? px2rem(props.height) : props.heightAuto ? "auto" : "80%"};
        box-shadow: 18px 35px 60px 8px rgba(0, 0, 0, 0.56);
      `
    )}
`;
export default { Card };
