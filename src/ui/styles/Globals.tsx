import { createGlobalStyle } from "styled-components";
import { ResetCSS } from "./reset.ts";
import { colors } from "./colors";

const Styles = createGlobalStyle`
  body {
    background-color: ${colors.gray};
    overflow-x: hidden;
  }
`;

export const GlobalStyles = () => (
  <>
    <Styles />
    <ResetCSS />
  </>
);
