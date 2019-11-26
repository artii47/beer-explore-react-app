import styled from "styled-components";
export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(204, 204, 204, 0.219);
  border-bottom: 2px solid rgba(168, 219, 0, 0.315);
  position: sticky;

  @media only screen and (max-width: 1300px) {
    flex-direction: column;
  }
`;

export const HeaderLogo = styled.div`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  cursor: pointer;
  font-size: 3.5rem;
  font-weight: 600;
  letter-spacing: 2px;
  position: absolute;
  top: 50%;
  left: 15%;
  transform: translate(-50%, -50%);
  @media only screen and (max-width: 1300px) {
    position: initial;
    transform: translate(0);
  }
`;

export const HeaderLogo1 = styled.span`
  color: yellowgreen;
`;
export const HeaderLogo2 = styled.span`
  color: #ccc;
`;
