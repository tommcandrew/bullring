/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const AppWrapper = styled.div`
  padding: 2rem 0;
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
`;
