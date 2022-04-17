import styled from "styled-components";
import colors from "./colors";

export const CardWrapper = styled.div`
  margin: 0 1rem 5rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 0.5rem;
`;

export const CardText = styled.p`
  margin: 1rem 0;
  text-align: center;
`;

export const CardImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

export const CardLinkWrapper = styled.div`
    text-align: center;
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
`;

export const CardUsername = styled.div`
  font-weight: bold;
  text-align: center;
  color: ${colors.heading};
`;
