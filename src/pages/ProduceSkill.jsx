import styled, { keyframes } from "styled-components";
import { Card, Row, Col } from "antd";
import { useScrollAnimation } from "../component/userScrollAnimation";
import { ScrollAnimationContainer } from "../styles/ScrollAnimaiton";
function ProduceSkill() {
  return (
    <Container>
      <RockComponent />
    </Container>
  );
}

export default ProduceSkill;

const slideTransAnimation = keyframes`
  0% {
    transform: translateY(20%) ;
  }
  100% {
    transform: translateY(0%) ;
  }
`;
export const RockComponent = () => {
  const { ref, isInViewport } = useScrollAnimation();

  return <RockContainer ref={ref} className={isInViewport ? "slide-in" : ""} />;
};
export const Container = styled.div`
  background-image: url("assets/images/background2.jpg");
  background-size: cover;
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
  }
`;
export const RockContainer = styled.div`
  background-image: url("assets/images/background2_rock.png");
  background-size: 50;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  width: 100%;
  height: 80vh;
  left: 320px;
  bottom: -300px;
  position: relative;
  &.slide-in {
    animation: ${slideTransAnimation} 2s forwards;
  }
  @media (max-width: 790px) {
    background-size: 500px;
    left: 50px;
    bottom: -350px;
  }
`;
