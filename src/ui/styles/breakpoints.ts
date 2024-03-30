import type { FlattenSimpleInterpolation } from "styled-components";
import { css } from "styled-components";

export const breakpoints: Record<BreakpointTypes, number> = {
  sm: 480,
  md: 1035,
  lg: 1245
};

export type BreakpointTypes = "sm" | "md" | "lg";
export const minWidth = (type: BreakpointTypes, styles: FlattenSimpleInterpolation) => css`
  @media (min-width: ${breakpoints[type]}px) {
    ${styles}
  }
`;

export const maxWidth = (type: BreakpointTypes, styles: FlattenSimpleInterpolation) => css`
  @media (max-width: ${breakpoints[type]}px) {
    ${styles}
  }
`;
