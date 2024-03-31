import styled, { css } from "styled-components";
import { px2rem } from "../../styles/utils.ts";
import { colors } from "../../styles/colors.ts";
import { minWidth } from "../../styles/breakpoints.ts";

const Card = styled.div`
  background-color: ${colors.gray};
  border-radius: ${px2rem(10)};
  border: 1px solid ${colors.clearGray};
  padding: ${px2rem(30)};
  color: ${colors.white};
  z-index: 1;
  width: 100%;
  height: 100%;
  font-family: "Noto Sans", sans-serif;
  transition: all 0.3s ease;
  ${minWidth(
    "sm",
    css`
      width: ${px2rem(400)};
      height: 80%;
      border: 1px solid ${colors.lightGray};
      box-shadow: 18px 35px 60px 8px rgba(0, 0, 0, 0.56);
    `
  )}
`;
export default { Card };
