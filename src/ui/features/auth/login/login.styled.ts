import styled from "styled-components";
import { px2rem } from "../../../styles/utils.ts";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${px2rem(10)};
`;
export default { Wrapper };
