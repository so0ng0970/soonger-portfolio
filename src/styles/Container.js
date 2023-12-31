import styled, { keyframes } from "styled-components";

const frameInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-60%);
  }

  100%{
    opacity: 35;
    transform: translateX(0%);
  }
`;

export const Container = styled.div`
  &.frame-in {
    animation: ${frameInAnimation} 2s forwards;
  }
`;
