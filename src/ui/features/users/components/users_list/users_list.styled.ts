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
    object-fit: contain;
    border-radius: 50%;
    border: 1px solid ${colors.lightGray};
    margin: 0 auto;
  }
  a {
    all: unset;
    cursor: pointer;
    transition: all 0.3s ease;
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

export default { Table, THead, TableWrapper, TD, Centerer, PaginationWrapper, PaginationButton };
