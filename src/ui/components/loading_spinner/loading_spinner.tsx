import Styled from "./loading_spinner.styled.ts";
export default function LoadingSpinner() {
  return (
    <Styled.Wrapper>
      <Styled.Detail className={"one"} />
      <Styled.Detail className={"two"} />
      <Styled.Detail className={"three"} />
    </Styled.Wrapper>
  );
}
