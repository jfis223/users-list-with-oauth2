import type { FlattenSimpleInterpolation, InterpolationFunction } from "styled-components";
import { css } from "styled-components";

export const breakpoints: Record<BreakpointTypes, number> = {
  sm: 480,
  md: 1035,
  lg: 1245
};

export type BreakpointTypes = "sm" | "md" | "lg";

export const minWidth = <T extends object>(type: BreakpointTypes, styles: FlattenSimpleInterpolation | InterpolationFunction<T>) => css<T>`
  @media (min-width: ${breakpoints[type]}px) {
    ${styles}
  }
`;

export const maxWidth = <T extends object>(type: BreakpointTypes, styles: FlattenSimpleInterpolation | InterpolationFunction<T>) => css<T>`
  @media (max-width: ${breakpoints[type]}px) {
    ${styles}
  }
`;
