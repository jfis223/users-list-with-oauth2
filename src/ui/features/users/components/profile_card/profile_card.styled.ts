import styled, { css } from "styled-components";
import { px2rem } from "../../../../styles/utils.ts";
import { colors } from "../../../../styles/colors.ts";
import { minWidth } from "../../../../styles/breakpoints.ts";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  gap: ${px2rem(30)};
  ${() =>
    minWidth(
      "sm",
      css`
        align-items: center;
        flex-direction: row;
      `
    )}
`;

const Avatar = styled.div`
  width: inherit;
  height: inherit;
  border-radius: ${px2rem(8)};
  overflow: hidden;
  border: 1px solid ${colors.lightGray};
  box-shadow: 18px 35px 60px 8px rgba(0, 0, 0, 0.56);
  aspect-ratio: 1 / 1;
  img,
  svg {
    width: inherit;
    height: inherit;
  }
  ${() =>
    minWidth(
      "sm",
      css`
        width: ${px2rem(100)};
        height: ${px2rem(100)};
        min-width: ${px2rem(100)};
        img,
        svg {
          width: ${px2rem(100)};
          height: ${px2rem(100)};
        }
      `
    )}
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${px2rem(20)};
  margin-left: auto;
`;

const LightSpan = styled.span`
  font-weight: 200;
`;

const LogOutButton = styled.a`
  all: unset;
  cursor: pointer;
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

const Email = styled.h3`
  ${() =>
    minWidth(
      "sm",
      css`
        text-align: end;
      `
    )}
`;

export default { Wrapper, Avatar, TextGroup, LightSpan, LogOutButton, Email };
