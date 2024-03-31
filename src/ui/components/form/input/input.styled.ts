import styled from "styled-components";
import { px2rem } from "../../../styles/utils.ts";
import { colors } from "../../../styles/colors.ts";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: ${px2rem(14)};
  color: ${colors.lightGray};
`;

const ErrorMessage = styled.p`
  margin-bottom: ${px2rem(10)};
  font-size: ${px2rem(12)};
  color: ${colors.red};
`;

const Span = styled.span`
  margin-bottom: ${px2rem(10)};
`;

const Input = styled.input`
  background-color: ${colors.blueGray10};
  border: 1px solid ${colors.clearGray};
  color: ${colors.lightGray};
  border-radius: ${px2rem(4)};
  transition: all 0.3s ease;
  margin: 0 0 ${px2rem(10)} 0;
  padding: ${px2rem(5)} ${px2rem(10)};
  &:focus {
    border: 1px solid ${colors.lightGray};
    outline: none !important;
  }
`;

export default { ErrorMessage, Wrapper, Label, Span, Input };
