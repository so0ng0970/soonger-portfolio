import styled, { keyframes } from "styled-components";
import { Card, Row, Col } from "antd";
import { useScrollAnimation } from "../component/userScrollAnimation";
import { ScrollAnimationContainer } from "../styles/ScrollAnimaiton";
function ProjectList() {
  return (
    <Container>
      <BgComponent />
      <Body>
        <ProjectImage />
        <DivContainer />
      </Body>
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
    transform: translateY(-20%) ;
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
    height: 100vh;
    min-height: 900px;
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
    width: 800px;
    height: 1000px;
    min-height: 0px;
    top: -430px;
    &.slide-in {
      animation: ${slideTransAnimation} 2s forwards;
    }
  }
`;

export const Body = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  /* background-color: #5d80917a; */
  width: 100%;
  height: 100%;
  @media (max-width: 977px) {
  }
  @media (max-width: 790px) {
    flex-direction: column;
    font-size: 13px;
  }
`;

export const ProjectImage = styled.div`
  background-image: url("assets/images/profile.jpg");
  background-size: cover;
  background-position: center;

  transform: scale(1);
  transition: transform 0.3s ease-in-out;
  height: 60%;
  width: 30%;

  @media (max-width: 977px) {
  }
  @media (max-width: 790px) {
    height: 400px;
    width: 300px;
  }
`;
export const DivContainer = styled.div`
  background-color: #5f83946f;
  width: 60%;
  height: 100%;
  @media (max-width: 977px) {
  }
  @media (max-width: 790px) {
    font-size: 13px;
    width: 80%;
    height: 400px;
  }
`;
