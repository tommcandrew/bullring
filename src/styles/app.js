/* eslint-disable import/prefer-default-export */
import styled, { keyframes, css } from "styled-components";
import colors from "./colors";

export const AppWrapper = styled.div`
  padding: 5rem;
  .my-masonry-grid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: -30px;
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px;
    background-clip: padding-box;
  }
  @media (max-width: 700px) {
    padding: 2rem;
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0turn);
  }
  to {
    transform: rotate(1turn);
  }
`;

export const LoadMoreButton = styled.button`
  border-radius: 24px;
  white-space: nowrap;
  height: 48px;
  min-width: 60px;
  text-align: center;
  padding: 0 1rem;
  color: white;
  background: ${colors.red};
  border: 0;
  cursor: pointer;
  position: relative;
  ${({ loading }) => {
    if (loading) {
      return css`
      span {
        display: none;
      }
      &:after {
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        border: 4px solid transparent;
        border-top-color: #ffffff;
        border-radius: 50%;
        animation: ${spin} 1s ease infinite;
      }
      `;
    }
    return null;
  }}
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
