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
  background: ${({ isActive }) => (isActive ? colors.purple : colors.greyLight)};
  border: 1px solid lightgrey;
  cursor: pointer;
  &:hover {
    background: ${({ isActive }) => (isActive ? colors.purpleDarker : colors.greyMedium)};
  }
`;
