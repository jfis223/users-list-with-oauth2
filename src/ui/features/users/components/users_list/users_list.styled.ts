import styled from "styled-components";
import { px2rem } from "../../../../styles/utils.ts";
import { colors } from "../../../../styles/colors.ts";

const Table = styled.table`
  width: 100%;
  background-color: ${colors.blueGray};
  min-width: ${px2rem(600)};
`;

const THead = styled.th`
  padding: ${px2rem(10)} 0;
  background-color: ${colors.blueGray10};
  border-right: 1px solid ${colors.lightGray};
  &:last-of-type {
    border-right: unset;
  }
`;

const TD = styled.td`
  border: 1px solid ${colors.lightGray};
  padding: ${px2rem(10)};
  vertical-align: middle;
  &:last-of-type {
    border-right: unset;
  }
  &:first-of-type {
    border-left: unset;
  }
  img {
    width: ${px2rem(50)};
    height: ${px2rem(50)};
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid ${colors.lightGray};
    margin: 0 auto;
  }
  a {
    transition: all 0.3s ease;
    color: ${colors.white};
    text-decoration: none;
    &:hover {
      color: ${colors.main};
    }
  }
`;

const Centerer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TableWrapper = styled.div`
  overflow: hidden;
  overflow-x: auto;
  border-radius: ${px2rem(10)};
  border: 1px solid ${colors.lightGray};
  box-shadow: 18px 35px 60px 8px rgba(0, 0, 0, 0.56);
`;

const PaginationWrapper = styled.div`
  padding: ${px2rem(10)};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const PaginationButton = styled.button`
  all: unset;
  cursor: pointer;
  font-weight: 800;
  margin: 0 ${px2rem(10)};
  transition: color 0.3s ease;
  &:hover {
    color: ${colors.main};
  }
  &.current {
    color: ${colors.variant};
    pointer-events: none;
  }
`;

const ErrorMessage = styled.h2`
  color: ${colors.red};
  z-index: 10;
  font-family: "Noto Sans", sans-serif;
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
`;

export default { Table, THead, TableWrapper, TD, Centerer, PaginationWrapper, PaginationButton, IconLink, ErrorMessage };
