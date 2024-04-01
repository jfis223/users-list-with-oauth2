import styled from "styled-components";
import { colors } from "../../../styles/colors.ts";
import { px2rem } from "../../../styles/utils.ts";

const Section = styled.section`
  position: relative;
  width: 100dvw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: -1;
  width: 100dvw;
  height: 100dvh;
  object-fit: cover;
  filter: grayscale(100%);
`;

const BlackWrapper = styled.div`
  background-color: ${colors.blueGray};
  border-radius: ${px2rem(20)};
  width: 80%;
  height: 80%;
  position: relative;
  border: 1px solid ${colors.lightGray};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`;

const PositionedTexture = styled.div`
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 100%;
  height: 100%;
  object-fit: cover;
  svg {
    position: absolute;

    z-index: 0;
    path {
      fill: ${colors.clearGray}!important;
    }
  }
`;
export default { Section, Background, BlackWrapper, PositionedTexture };
