import styled, { keyframes } from "styled-components";
import { Card, Row, Col } from "antd";
import { useScrollAnimation } from "../component/userScrollAnimation";
import { ScrollAnimationContainer } from "../styles/ScrollAnimaiton";
function ProjectList() {
  return (
    <Container>
      <BgComponent />
    </Container>
  );
}

export default ProjectList;
export const BgComponent = () => {
  const { ref, isInViewport } = useScrollAnimation();

  return <BgContainer ref={ref} className={isInViewport ? "slide-in" : ""} />;
};
const slideInAnimation = keyframes`
  0% {
    transform: translateX(40%);
  }
  100% {
    transform: translateX(0%);
  }
`;
const slideTransAnimation = keyframes`
  0% {
    transform: translateY(20%) ;
  }
  100% {
    transform: translateY(0%) ;
  }
`;
export const Container = styled.div`
  background-color: #292826;
  overflow: hidden;
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: flex-start;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 790px) {
    height: 120vh;
  }
`;

export const BgContainer = styled.div`
  -webkit-scrollbar-button: none;
  background-image: url("assets/images/background4.jpg");
  background-size: cover;
  display: flex;
  width: 100%;
  height: 100vh;
  min-height: 800px;
  flex-direction: column;
  align-items: flex-start;
  &::-webkit-scrollbar {
    display: none;
  }
  &.slide-in {
    animation: ${slideInAnimation} 2s forwards;
  }
  @media (max-width: 790px) {
    background-image: url("assets/images/background4-mobile.png");
    position: absolute;
    width: 100%;
    height: 500px;
    bottom: 0px;
    &.slide-in {
      animation: ${slideTransAnimation} 2s forwards;
    }
  }
`;
