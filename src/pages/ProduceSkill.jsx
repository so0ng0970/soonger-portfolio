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
  const radius = 200; // 원의 반지름
  const logos = [
    { logo: "dart", text: "Dart" },
    { logo: "flutter", text: "Flutter" },
    { logo: "riverpod", text: "Riverpod" },
    { logo: "firebase", text: "Firebase" },
    { logo: "figma", text: "Figma" },
    { logo: "github", text: "GitHub" },
  ];
  const centerX = 250; // 원의 중심 x 좌표
  const centerY = 250; // 원의 중심 y 좌표
  const angleStep = (2 * Math.PI) / logos.length;
  return (
    <Container rockClicked={rockClicked}>
      <SunComponent rockClicked={rockClicked} />
      <Body>
        {logos.map((logo, index) => {
          const angle = index * angleStep;
          const x = centerX + radius * Math.cos(angle); // x 좌표 계산
          const y = centerY + radius * Math.sin(angle); // y 좌표 계산
          return (
            <LogoComponent logo={logo.logo} text={logo.text} x={x} y={y} />
          );
        })}
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
export const LogoComponent = ({ logo, text, x, y }) => (
  <LogoContainer x={x} y={y}>
    <Logo src={`assets/logos/${logo}.png`} alt={text} />
    <LogoName>{text}</LogoName>
  </LogoContainer>
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
    height: 800px;
    background-size: 800px;
    left: -200px;
    top: 50px;
  }
`;

export const BottomContainer = styled.div`
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
    height: 450px;
    bottom: -300px;
    left: 90px;
    img {
      &:hover {
        width: 700px;
      }
      width: 600px;
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
  background-color: #fd6e553b;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 65%;
  height: 600px;

  @media (max-width: 1122px) {
  }
  @media (max-width: 790px) {
  }
`;
export const LogoContainer = styled.div`
  position: absolute;
  margin: 10px;
  display: flex;
  align-items: center;
  width: 350px;
  height: 30px;
  font-size: 20px;
  left: ${(props) => props.x || 0}px;
  top: ${(props) => props.y || 0}px;
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
