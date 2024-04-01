import styled from "styled-components";
import { px2rem } from "../../../../styles/utils.ts";
import { colors } from "../../../../styles/colors.ts";

const ErrorMessage = styled.p`
  margin-bottom: ${px2rem(10)};
  margin-top: ${px2rem(10)};
  font-size: ${px2rem(14)};
  color: ${colors.red};
  text-align: center;
`;

const SuccessMessage = styled.p`
  margin-bottom: ${px2rem(10)};
  margin-top: ${px2rem(10)};
  font-size: ${px2rem(14)};
  color: ${colors.secondary};
  text-align: center;
  a {
    color: ${colors.secondary};
  }
`;

const SubmitButton = styled.button`
  cursor: pointer;
  width: 100%;
  background-color: ${colors.main};
  padding: ${px2rem(8)} ${px2rem(25)};
  color: ${colors.white};
  border-radius: ${px2rem(4)};
  border: 1px solid ${colors.clearGray};
  box-shadow: 18px 35px 60px -27px rgba(0, 0, 0, 0.56);
  transition: all 0.3s ease;
  display: block;
  &:hover {
    background-color: ${colors.variant};
  }
`;

const Form = styled.form`
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  position: relative;
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

export default { ErrorMessage, Form, SubmitButton, Wrapper, SuccessMessage, IconLink };
