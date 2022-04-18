/* eslint-disable import/prefer-default-export */
import styled from "styled-components";
import colors from "./colors";

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  margin-bottom: 3rem;
`;

export const FilterButton = styled.button`
  border-radius: 24px;
  white-space: nowrap;
  height: 48px;
  min-width: 60px;
  text-align: center;
  padding: 0 1rem;
  color: ${({ isActive }) => (isActive ? "white" : "black")};
  background: ${({ isActive }) => (isActive ? colors.red : colors.greyLight)};
  border: ${({ isActive }) => (isActive ? 0 : "1px solid lightgrey")};
  cursor: pointer;
  &:hover {
    background: ${({ isActive }) => (isActive ? colors.redDarker : colors.greyMedium)};
  }
`;
