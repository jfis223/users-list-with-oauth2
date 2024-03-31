import styled from "styled-components";
import { px2rem } from "../../../styles/utils.ts";
import { colors } from "../../../styles/colors.ts";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${px2rem(10)};
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: ${px2rem(20)};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: ${px2rem(10)};
`;

const SocialButton = styled.a`
  all: unset;
  cursor: pointer;
  background-color: ${colors.blueGray10};
  padding: ${px2rem(8)} ${px2rem(25)};
  color: ${colors.white};
  border-radius: ${px2rem(10)};
  font-size: 0;
  flex: 1;
  display: flex;
  justify-content: center;
  border: 1px solid ${colors.clearGray};
  box-shadow: 18px 35px 60px -27px rgba(0, 0, 0, 0.56);
  transition: all 0.3s ease;
  &:hover {
    background-color: ${colors.blueGray};
  }
  svg {
    width: ${px2rem(25)};
    height: ${px2rem(25)};
  }
`;

export default { Wrapper, Title, SocialButton, ButtonWrapper };
