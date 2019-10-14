import React from "react";
import styled, { keyframes } from "styled-components";
const RotateSpinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  display: inline-block;
  position: fixed;
  bottom: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;

  :after {
    content: " ";
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 5px solid yellowgreen;
    border-color: yellowgreen transparent yellowgreen transparent;
    animation: ${RotateSpinner} 1.1s linear infinite;
    margin: 0;
  }
`;

const Spinner = () => {
  return <StyledSpinner />;
};

export default Spinner;
