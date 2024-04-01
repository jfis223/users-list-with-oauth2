import styled, { css } from "styled-components";
import { colors } from "../../../../styles/colors.ts";
import { px2rem } from "../../../../styles/utils.ts";
import { minWidth } from "../../../../styles/breakpoints.ts";

const CTA = styled.a`
  all: unset;
  cursor: pointer;
  font-family: "Noto Sans", sans-serif;
  background-color: ${colors.main};
  padding: ${px2rem(8)} ${px2rem(25)};
  color: ${colors.white};
  border-radius: ${px2rem(4)};
  border: 1px solid ${colors.clearGray};
  box-shadow: 18px 35px 60px -27px rgba(0, 0, 0, 0.56);
  transition: all 0.3s ease;
  display: block;
  text-transform: capitalize;
  width: auto;
  text-align: center;
  z-index: 10;
  &:hover {
    background-color: ${colors.variant};
  }
  ${() =>
    minWidth(
      "sm",
      css`
        margin-left: auto;
      `
    )}
`;

export default { CTA };
