import styled from "styled-components";
import { px2rem } from "../../styles/utils.ts";

const Wrapper = styled.div`
  z-index: 1;
  width: inherit;
  display: flex;
  flex-direction: column;
  gap: ${px2rem(20)};
`;

export default { Wrapper };
