import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.div`
  background-color: rgba(0, 0, 0, 0.068);
  display: grid;
  grid-template-rows: 20rem repeat(2, min-content) 1fr;
  justify-items: center;
  grid-gap: 5rem;
  border-radius: 5px;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
  margin: 2rem 0;
  position: relative;
  border: 2px solid rgba(0, 0, 0, 0.1);
`;

export const CardImg = styled.img`
  grid-row: 1/2;
  margin-top: 3rem;
  height: 100%;
`;

export const CardName = styled.div`
  grid-row: 2/3;
  grid-column: 1/-1;
  font-size: 2.2rem;
  width: 100%;
  text-align: center;
  position: relative;
  text-transform: uppercase;

  :after {
    content: "";
    height: 2px;
    width: 100%;
    display: block;
    background-color: rgba(99, 98, 88, 0.514);
    position: absolute;
    bottom: 0;
    left: 0;
    transition: all 0.3s;
  }
`;

export const CardDesc = styled.div`
  margin: 0 2rem;
  text-align: center;
  grid-row: 3/4;
  grid-column: 1/-1;
  font-family: "Manjari", sans-serif;
`;

export const CardLinkButton = styled(Link)`
  text-decoration: none;
  text-align: center;
  border: none;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 0.2rem;
  background-color: rgba(250, 250, 250, 0.507);
  align-self: flex-end;
  width: 100%;
  font-size: 2rem;
  padding: 2rem 7rem;
  position: relative;
  transition: all 0.3s;
  outline: none;
  color: rgb(35, 36, 28);
  cursor: pointer;
  box-shadow: 0rem -0.1rem 0.7rem rgba(0, 0, 0, 0.5);

  :after {
    content: "";
    position: absolute;
    height: 4px;
    width: 100%;
    display: block;
    background-color: rgba(45, 46, 43, 0.781);
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transition: all 0.3s;
  }

  :hover:after {
    transform: scaleX(1);
  }
`;
