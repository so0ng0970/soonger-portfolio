import styled, { keyframes } from "styled-components";
import React, { useState } from "react";
import { useScrollAnimation } from "../component/userScrollAnimation";
import { CurvedTextStyle } from "../styles/CurvedTextStyle";

function ProduceSkill() {
  const [rockClicked, setRockClicked] = useState(false);
  const handleClick = () => {
    setRockClicked(!rockClicked);
    console.log(rockClicked);
  };
  return (
    <Container rockClicked={rockClicked}>
      <SunComponent rockClicked={rockClicked} />
      <Body>
        <LogoComponent logo="dart" text="dart" />
        <LogoComponent logo="flutter" text="flutter" />
        <LogoComponent logo="riverpod" text="riverpod" />{" "}
      </Body>

      <CurvedTextComponent rockClicked={rockClicked} />
      <ArrowContainer rockClicked={rockClicked} />
      <RockComponent onClick={handleClick} />
    </Container>
  );
}

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
export const SunComponent = ({ rockClicked }) => {
  const { ref, isInViewport } = useScrollAnimation();

  return (
    <SunContainer
      rockClicked={rockClicked}
      ref={ref}
      className={isInViewport ? "slide-in" : ""}
    />
  );
};
const RockComponent = ({ onClick }) => (
  <RockContainer>
    <img
      src="assets/images/background2_rock.png"
      alt="rock"
      onClick={onClick}
    />
  </RockContainer>
);
export const LogoComponent = ({ logo, text }) => (
  <>
    <LogoContainer>
      <Logo src={`assets/logos/${logo}.png`} />
      <LogoName> {text}</LogoName>
    </LogoContainer>
  </>
);
const CurvedTextComponent = ({ rockClicked }) => (
  <CurvedTextStyle rockClicked={rockClicked}>
    <span>{rockClicked ? "A" : "W"}</span>
    <span>{rockClicked ? "P" : "E"}</span>
    <span>{rockClicked ? "P" : "B"}</span>
    <span>s</span>
    <span>k</span>
    <span>i</span>
    <span>l</span>
    <span>l</span>
    <span>s</span>
    <span>?</span>
    <span>c</span>
    <span>l</span>
    <span>i</span>
    <span>c</span>
    <span>k</span>
  </CurvedTextStyle>
);

export const Container = styled.div`
  background-color: ${(props) => (props.rockClicked ? "#272727" : "#eae7e0")};
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
  background-image: url(${(props) =>
    props.rockClicked
      ? "assets/images/background2_moon.png"
      : "assets/images/background2_sun.png"});
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

export const BottomContainer = styled.div`
  background-color: #fd6e55;
  display: flex;
  width: 100%;
  height: 500px;

  @media (max-width: 790px) {
  }
`;

const RockContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 500px;
  left: 150px;
  bottom: -250px;

  img {
    position: absolute;
    width: 700px;
    height: auto;
    left: 50%;
    transform: translateX(-50%);
    cursor: url("assets/images/cursor_2.png") 16 16, auto;
    &:hover {
      width: 800px;
    }
  }

  @media (max-width: 790px) {
    img {
      width: 500px;
      left: 50px;
      bottom: -350px;
    }
  }
`;
export const ArrowContainer = styled.div`
  position: absolute;
  background-image: url(${(props) =>
    props.rockClicked
      ? "assets/images/background2_arrow2.png"
      : "assets/images/background2_arrow.png"});

  background-size: 150px;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  width: 100%;
  height: 100px;
  left: 320px;
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
export default ProduceSkill;
