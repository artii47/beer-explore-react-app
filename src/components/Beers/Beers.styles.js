import styled from "styled-components";

export const Beers = styled.div`
  position: relative;
  display: grid;
  height: 80vh;
  width: 100vw;
  grid-template-columns: repeat(auto-fill, minmax(38rem, min-content));
  grid-gap: 5rem;
  grid-auto-flow: column;
  justify-content: center;
  overflow-y: scroll;
  grid-auto-flow: row;

  @media only screen and (max-width: 450px) {
    grid-template-columns: repeat(auto-fill, minmax(30rem, min-content));
  }
`;

export const BeersNotFound = styled.div`
  display: flex;
  font-size: 5rem;
  color: yellowgreen;
  justify-content: center;
`;
