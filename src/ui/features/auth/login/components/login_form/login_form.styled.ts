import styled from "styled-components";
import { px2rem } from "../../../../../styles/utils.ts";
import { colors } from "../../../../../styles/colors.ts";

const ErrorMessage = styled.p`
  margin-bottom: ${px2rem(10)};
  margin-top: ${px2rem(10)};
  font-size: ${px2rem(14)};
  color: ${colors.red};
  text-align: center;
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

export default { ErrorMessage, Form, SubmitButton };
