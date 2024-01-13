import styled, { keyframes } from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import { useScrollAnimation } from "../component/userScrollAnimation";
import { CurvedTextStyle } from "../styles/CurvedTextStyle";

function ProduceSkill() {
  const [modalOpen, setModalOpen] = useState(false);

  const modalOpenClick = () => {
    setModalOpen(!modalOpen);
    console.log(modalOpen);
  };
  const [rockClicked, setRockClicked] = useState(false);
  const handleClick = () => {
    setRockClicked(!rockClicked);
    console.log(rockClicked);
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const logos = [
    {
      logo: "dart",
      text: "Dart",
      description:
        "Dart 언어에 대해 다양한 데이터 타입의 활용, 함수의 정의 및 사용, 제어문을 통한 로직 제어, 클래스와 생성자를 활용한 객체 지향 프로그래밍 등을 자유롭게 다룰 수 있습니다.",
    },
    {
      logo: "flutter",
      text: "Flutter",
      description:
        " Dart 언어를 기반으로 한 Flutter를 이용해 효율적이고 동적인 사용자 인터페이스를 제작하는 능력을 보유하고 있습니다.",
    },
    {
      logo: "riverpod",
      text: "Riverpod",
      description:
        "Riverpod의 Provider를 활용하여 프로젝트에 효율적인 상태 관리를 도입했습니다. Provider를 통해 모듈 간의 의존성을 최소화하고, 복잡한 상태 변화를 쉽게 관리할 수 있었습니다",
    },
    {
      logo: "firebase",
      text: "Firebase",
      description:
        "Cloud Function을 사용해 알림 기능과 소셜로그인을 firebase 연동하여 사용할 수 있게 서버리스 작업을 했습니다. 또한, Firebase의 Storage와 Database 기능을 활용해 데이터를 관리했고, Authentication 기능을 통해 사용자의 로그인과 관련된 기능을 구현했습니다",
    },
    {
      logo: "figma",
      text: "Figma",
      description: "Figma를 통해 와이어프레임을 \n 구현했습니다.",
    },
    {
      logo: "github",
      text: "GitHub",
      description:
        "GitHub를 활용하여 협업과 코드 관리에 대한 실질적인 경험을 쌓았습니다. 그리고 주기적으로 코드를 커밋하고 푸시하여 프로젝트를 진행을 했습니다.",
    },
  ];

  let radius, centerX, centerY, angleStep;
  if (windowWidth <= 750) {
    radius = (240 * logos.length) / 6;
    centerX = 230;
    centerY = 550;
    angleStep = (1.8 * Math.PI) / 17;
  } else {
    radius = 500;
    centerX = 160;
    centerY = 40;
    angleStep = Math.PI / 1.4 / logos.length;
  }

  return (
    <Container rockClicked={rockClicked}>
      <SunComponent rockClicked={rockClicked} />
      <Body>
        {logos.map((logo, index) => {
          let angle;
          if (windowWidth <= 750) {
            angle = index * angleStep + 0.8 * Math.PI;
          } else {
            angle = index * angleStep;
          }
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);
          return (
            <LogoComponent
              onClick={() => setModalOpen(logo)}
              logo={logo.logo}
              text={logo.text}
              x={x}
              y={y}
            />
          );
        })}
      </Body>
      {modalOpen && (
        <Modal
          description={modalOpen.description}
          onClose={() => modalOpenClick(false)}
        />
      )}
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
export const Modal = ({ description, onClose }) => (
  <StyledModal>
    <div>
      <p>{description}</p>
    </div>
    <button onClick={onClose}>Close</button>
  </StyledModal>
);
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
const RockComponent = ({ onClick }) => {
  const { ref, isInViewport } = useScrollAnimation();

  return (
    <RockContainer ref={ref} className={isInViewport ? "slide-in" : ""}>
      <img
        src="assets/images/background2_rock.png"
        alt="rock"
        onClick={onClick}
      />
    </RockContainer>
  );
};
export const LogoComponent = ({ logo, text, x, y, onClick }) => (
  <LogoContainer x={x} y={y} onClick={onClick}>
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
  min-height: 800px;
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
  background-size: 1600px;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  width: 2200px;
  height: 2000px;
  left: -900px;
  top: -1100px;
  position: absolute;
  &.slide-in {
    animation: ${sunTransAnimation} 2s forwards;
  }
  @media (max-width: 750px) {
    height: 800px;
    background-size: 800px;
    left: -700px;
    top: 200px;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  height: 500px;

  @media (max-width: 750px) {
  }
`;

const RockContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 500px;
  left: 150px;
  bottom: -250px;
  &.slide-in {
    animation: ${rockTransAnimation} 2s forwards;
  }
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

  @media (max-width: 750px) {
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

  @media (max-width: 750px) {
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
  width: 65%;
  height: 30px;
  font-size: 20px;

  left: ${(props) => props.x || 0}px;
  top: ${(props) => props.y || 0}px;
  @media (max-width: 1550px) {
    font-size: 18px;
  }
  @media (max-width: 977px) {
  }
  @media (max-width: 750px) {
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
  @media (max-width: 750px) {
    width: 20px;
    height: 20px;
  }
`;
export const LogoName = styled.p`
  font-size: 20px;
  @media (max-width: 1122px) {
  }
  @media (max-width: 750px) {
    font-size: 18px;
  }
`;

export const StyledModal = styled.div`
  position: absolute;
  display: flex;
  left: 100px;
  top: 100px;
  padding: 5px;
  width: 300px;
  height: 300px;
  /* background-color: #aa8327; */
  @media (max-width: 1122px) {
  }
  @media (max-width: 750px) {
    width: 250px;
    height: 250px;
    position: absolute;
    top: 450px;
    left: 200px;
  }
`;
export default ProduceSkill;
