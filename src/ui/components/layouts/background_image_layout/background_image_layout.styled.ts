import styled from "styled-components";

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
  //filter: grayscale(100%);
`;
export default { Section, Background };
