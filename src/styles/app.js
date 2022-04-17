/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

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
