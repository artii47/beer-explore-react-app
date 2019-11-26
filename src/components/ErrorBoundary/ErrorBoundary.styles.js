import styled from "styled-components";

export const ErrorBoundaryOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`;

export const ErrorBoundaryImage = styled.div`
  background-image: ${props => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;
