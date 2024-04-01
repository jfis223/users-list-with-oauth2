import styled, { keyframes } from "styled-components";
import { px2rem } from "../../styles/utils.ts";

const LoadingAnimation = keyframes`
    0% {
        height:  ${px2rem(80)};
        background-color: rgb(111, 163, 240);
    }
    20% {
        height:  ${px2rem(80)};
    }
    40% {
        height:  ${px2rem(120)};
        background-color: rgb(111, 200, 240);
    }
    80% {
        height:  ${px2rem(80)};
    }
    100% {
        height:  ${px2rem(80)};
        background-color: rgb(111, 163, 240);
    }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: ${px2rem(90)};
  height: ${px2rem(120)};
  z-index: 10;
`;

const Detail = styled.div`
  width: ${px2rem(17)};
  height: ${px2rem(80)};
  margin: auto auto;
  border-radius: ${px2rem(4)};
  &.one {
    animation: ${LoadingAnimation} 1200ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s infinite;
  }
  &.two {
    animation: ${LoadingAnimation} 1200ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 200ms infinite;
  }
  &.three {
    animation: ${LoadingAnimation} 1200ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 400ms infinite;
  }
`;

export default { Detail, Wrapper };
