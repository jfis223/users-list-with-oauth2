import styled, { css } from "styled-components";
import { colors } from "../../../../styles/colors.ts";
import { px2rem } from "../../../../styles/utils.ts";
import { minWidth } from "../../../../styles/breakpoints.ts";

const ErrorMessage = styled.h2`
  color: ${colors.red};
  z-index: 10;
  font-family: "Noto Sans", sans-serif;
`;

const Avatar = styled.div`
  width: inherit;
  height: inherit;
  border-radius: ${px2rem(8)};
  overflow: hidden;
  border: 1px solid ${colors.lightGray};
  box-shadow: 18px 35px 60px 8px rgba(0, 0, 0, 0.56);
  aspect-ratio: 1 / 1;
  max-width: ${px2rem(200)};
  max-height: ${px2rem(200)};
  align-self: center;
  margin-bottom: ${px2rem(30)};
  img,
  svg {
    width: inherit;
    height: inherit;
  }
  ${() =>
    minWidth(
      "sm",
      css`
        width: ${px2rem(200)};
        height: ${px2rem(200)};
        min-width: ${px2rem(200)};
        img,
        svg {
          width: ${px2rem(200)};
          height: ${px2rem(200)};
        }
      `
    )}
`;

const Title = styled.h1`
  font-size: ${px2rem(20)};
  text-align: start;
  margin: ${px2rem(20)} 0;
`;

const Thin = styled.span`
  font-weight: 200;
`;

const Wrapper = styled.span`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
  position: relative;
`;

const Element = styled.p`
  font-size: ${px2rem(20)};
  text-align: start;
  margin: ${px2rem(20)} 0;
  font-weight: 800;
`;

const IconLink = styled.a`
  all: unset;
  cursor: pointer;
  background-color: ${colors.main};
  padding: ${px2rem(8)} ${px2rem(10)};
  color: ${colors.white};
  font-size: 0;
  border-radius: ${px2rem(4)};
  border: 1px solid ${colors.clearGray};
  box-shadow: 18px 35px 60px -27px rgba(0, 0, 0, 0.56);
  transition: all 0.3s ease;
  display: block;
  text-transform: capitalize;
  width: fit-content;
  text-align: center;
  margin: 0 auto;
  &:hover {
    background-color: ${colors.variant};
  }
  svg {
    width: ${px2rem(30)};
    height: ${px2rem(30)};
    path {
      fill: ${colors.white}!important;
    }
  }
  &.absolute {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export default { ErrorMessage, Avatar, Title, Thin, Element, Wrapper, IconLink };
