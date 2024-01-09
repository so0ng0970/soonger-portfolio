import styled, { keyframes } from "styled-components";

import { useScrollAnimation } from "../component/userScrollAnimation";
import ReactCurvedText from "react-curved-text";

function ProduceSkill() {
  return (
    <Container>
      <SunComponent />
      <Body>
        <LogoComponent logo="dart" text="dart" />
        <LogoComponent logo="flutter" text="flutter" />
        <LogoComponent logo="riverpod" text="riverpod" />{" "}
      </Body>
      <CurvedTextComponent />
      <ArrowContainer />
      <RockComponent />
    </Container>
  );
}

export default ProduceSkill;

const sunTransAnimation = keyframes`
  0% {
    transform: translate(-10%, -10%);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const rockTransAnimation = keyframes`
  0% {
    transform: translateY(20%) ;
  }
  100% {
    transform: translateY(0%) ;
  }
`;
export const SunComponent = () => {
  const { ref, isInViewport } = useScrollAnimation();

  return <SunContainer ref={ref} className={isInViewport ? "slide-in" : ""} />;
};
export const RockComponent = () => {
  const { ref, isInViewport } = useScrollAnimation();

  return <RockContainer ref={ref} className={isInViewport ? "slide-in" : ""} />;
};
export const LogoComponent = ({ logo, text }) => (
  <>
    <LogoContainer>
      <Logo src={`assets/logos/${logo}.png`} />
      <LogoName> {text}</LogoName>
    </LogoContainer>
  </>
);
const CurvedTextComponent = () => (
  <CurvedText>
    <span>c</span>
    <span>l</span>
    <span>i</span>
    <span>c</span>
    <span>k</span>
    <span>!</span>
  </CurvedText>
);

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
export const SunContainer = styled.div`
  background-image: url("assets/images/background2_sun.png");
  background-size: 50;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  width: 170%;
  height: 200%;
  left: -800px;
  top: -700px;
  position: absolute;
  &.slide-in {
    animation: ${sunTransAnimation} 2s forwards;
  }
  @media (max-width: 790px) {
    background-size: 110%;
    left: -200px;
    top: -150px;
  }
`;

export const RockContainer = styled.div`
  position: absolute;
  background-image: url("assets/images/background2_rock.png");
  background-size: 700px;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  width: 100%;
  height: 500px;
  left: 150px;
  bottom: -180px;

  &.slide-in {
    animation: ${rockTransAnimation} 2s forwards;
  }
  @media (max-width: 790px) {
    background-size: 500px;
    left: 50px;
    bottom: -350px;
  }
`;
export const ArrowContainer = styled.div`
  position: absolute;
  background-image: url("assets/images/background2_arrow.png");
  background-size: 150px;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  width: 100%;
  height: 100px;
  left: 300px;
  bottom: 150px;

  &.slide-in {
    animation: ${rockTransAnimation} 2s forwards;
  }
  @media (max-width: 790px) {
    background-size: 300px;
    left: 50px;
    bottom: -350px;
  }
`;

const CurvedText = styled.div`

 position: absolute;
  font-size: 30px;
  display: flex;
  width: 100%;
  height: 100px;
  left: 140px;
  bottom: 200px;
  text-align: center;
  justify-content: center;
  align-items: center;

  span {
    padding-right: 15px
    position: relative;
    display: inline-block;
    text-align: center;
  }

  span:nth-child(1) {
    padding-left: 5px;
    transform: rotate(-10deg);
  }
  span:nth-child(2) {
    padding-left: 5px;
    transform: rotate(-5deg);
  }
  span:nth-child(3) {
    padding-left: 5px;
    transform: rotate(0deg);
  }
  span:nth-child(4) {
    padding-left: 5px;
    transform: rotate(5deg);
  }
  span:nth-child(5) {
    padding-left: 5px;
    transform: rotate(10deg);
    position: relative;
    bottom: -5px;
  }
  span:nth-child(6) {
    position: relative;
    padding-left: 5px;
    transform: rotate(10deg);
    bottom: -10px;
  }
`;

export const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 50%;
  height: 500px;

  @media (max-width: 1122px) {
  }
  @media (max-width: 790px) {
  }
`;
export const LogoContainer = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  width: 350px;
  height: 30px;
  font-size: 20px;
  @media (max-width: 1550px) {
    font-size: 18px;
  }
  @media (max-width: 977px) {
    font-size: 13px;
    width: 250px;
  }
  @media (max-width: 790px) {
    font-size: 13px;
    width: 300px;
    height: 20px;
  }
`;
export const Logo = styled.img`
  width: 25px;
  height: 25px;
  @media (max-width: 1122px) {
  }
  @media (max-width: 790px) {
    width: 30px;
    height: 30px;
  }
`;
export const LogoName = styled.p`
  font-size: 20px;
  @media (max-width: 1122px) {
  }
  @media (max-width: 790px) {
  }
`;
