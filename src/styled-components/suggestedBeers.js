import styled from "styled-components";
import { Link } from "react-router-dom";

export const SuggestedBeerName = styled.div`
  color: rgba(0, 0, 0, 0.7);
  @media only screen and (max-width: 700px) {
    font-size: 1rem;
  }
  @media only screen and (max-height: 450px) {
    display: none;
  }
`;

export const SuggestedBeerImg = styled.img`
  height: 15rem;
  @media only screen and (max-width: 700px) {
    height: 10rem;
  }
  @media only screen and (max-height: 700px) {
    height: 10rem;
    width: 3rem;
  }
  @media only screen and (max-height: 550px) {
    height: 8rem;
    width: 3rem;
  }

  @media only screen and (max-height: 450px) {
    display: none;
  }
`;

export const SuggestedItem = styled(Link)`
  text-align: center;
  margin: 0.5rem 5rem;
  text-decoration: none;
  @media only screen and (max-width: 700px) {
    margin: 0 2rem;
  }
`;
