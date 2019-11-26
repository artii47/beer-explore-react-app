import styled from "styled-components";
import { Link } from "react-router-dom";

export const SuggestedBeerName = styled.div`
  color: rgba(0, 0, 0, 0.7);
  @media only screen and (max-width: 700px) {
    font-size: 1rem;
  }
  @media only screen and (max-height: 450px) {
    font-size: 0.7rem;
  }
`;

export const SuggestedBeerImg = styled.img`
  height: 15rem;
  width: 5rem;
  @media only screen and (max-height: 800px) {
    height: 10rem;
    width: 3rem;
  }
  @media only screen and (max-height: 600px) {
    height: 7rem;
    width: 2rem;
  }
`;

export const SuggestedItem = styled(Link)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 10rem;
  margin: 0.5rem 5rem;
  text-decoration: none;
  @media only screen and (max-width: 700px) {
    margin: 0 2rem;
  }
`;
