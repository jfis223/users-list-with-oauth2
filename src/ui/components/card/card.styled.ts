import styled from "styled-components";
import { px2rem } from "../../styles/utils.ts";
import { colors } from "../../styles/colors.ts";

const Card = styled.div`
  background-color: rgba(16, 18, 27, 0.8);
  backdrop-filter: blur(${px2rem(20)});
  border-radius: ${px2rem(4)};
  border: 1px solid ${colors.clearGray};
  padding: ${px2rem(20)};
  color: ${colors.white};
`;
export default { Card };
