import styled from "styled-components";
import cardTypes from "../enums/cardTypes";
import colors from "./colors";

export const CardWrapper = styled.div`
  margin: 0 1rem 5rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 0.5rem;
  position: relative;
  @media (max-width: 700px) {
    margin: 0 1rem 3rem 1rem;
  }
  box-shadow: 0px 1px 2px 2px rgba(50,50,50,0.1);
`;

export const CardText = styled.p`
  margin: 1rem 0;
  text-align: center;
  padding: 1rem 0.5rem;
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

export const SocialIconWrapper = styled.div`
  width: 50px;
  height: 50px;
  background: ${({ type }) => (type === cardTypes.TWITTER ? colors.blueTwitter : colors.instagramGradient)}; 
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -12px;
`;

export const CardTimestamp = styled.time`
  color: ${colors.textLighter};
  font-size: 12px;
`;
