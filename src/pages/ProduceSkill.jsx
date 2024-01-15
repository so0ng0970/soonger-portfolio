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
    if (modalOpen) {
      modalOpenClick(false);
    }
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const appLogos = [
    {
      logo: "dart",
      text: "Dart",
      description:
        "Dart 언어를 자유롭게 활용해 다양한 데이터 타입의 사용, 함수 정의와 활용, 제어문을 통한 로직 제어, 클래스와 생성자를 활용한 객체 지향 프로그래밍을 구현하는 능력을 보유하고 있습니다.",
    },
    {
      logo: "flutter",
      text: "Flutter",
      description:
        "Flutter 프레임워크를 이용하여 효율적이고 동적인 사용자 인터페이스를 제작하는 능력을 갖추고 있으며, Dart 언어를 기반으로 모바일 앱 개발을 진행하였습니다. 또한 재사용 가능한 위젯을 만들어서 개발한 경험이 있습니다.",
    },

    {
      logo: "riverpod",
      text: "Riverpod",
      description:
        "Riverpod의 Provider를 활용하여 프로젝트의 상태 관리를 효율적으로 수행했습니다. 이를 통해 모듈 간의 의존성을 최소화하고, 복잡한 상태 변화를 쉽게 관리했습니다.",
    },
    {
      text: "GoRouter",
      description:
        "GoRouter를 활용하여 애플리케이션 내의 페이지 라우팅을 관리하였습니다.",
    },
    {
      text: "JsonSerializable",
      description:
        "JsonSerializable을 사용하여 반복적인 JSON 직렬화 및 역직렬화 코드를 자동화하였습니다.",
    },
  ];
  const webLogos = [
    {
      logo: "javascript",
      text: "Javascript",
      description:
        "ES6+ 문법을 공부했고 객체 지향 프로그래밍과 다양한 내장 객체의 활용을 했으며, 비동기 처리를 다뤘습니다",
    },
    {
      logo: "react",
      text: "React",
      description:
        "컴포넌트 기반의 구조를 이해하고 이를 웹 애플리케이션 개발에 적용해 보았습니다. 상태 관리는 Props와 State를 활용하여 진행하였습니다.",
    },
    {
      logo: "recoil",
      text: "Recoil",
      description:
        "atom을 활용하여 React 애플리케이션의 상태 관리를 진행한 경험이 있습니다.",
    },
    {
      logo: "reactquery",
      text: "React-Query",
      description:
        "React-Query를 이용하여 서버 상태와 비동기 작업을 효율적으로 관리한 경험이 있습니다.",
    },

    {
      logo: "styled-components",
      text: "Styled-Components",
      description:
        "Styled-Components를 사용하여 React 애플리케이션의 스타일링을 진행한 경험이 있습니다.",
    },
  ];

  const ectLogos = [
    {
      logo: "firebase",
      text: "Firebase",
      description:
        "Cloud Function을 사용해 알림 기능과 소셜로그인을 firebase 연동하여 사용할 수 있게 서버리스 작업을 했습니다. 또한, Firebase의 Storage와 Database 기능을 활용해 데이터를 관리했고, Authentication 기능을 통해 사용자의 로그인과 관련된 기능을 구현했습니다",
    },
    {
      logo: "figma",
      text: "Figma",
      description: "Figma를 통해 와이어프레임을 구현했습니다.",
    },
    {
      logo: "github",
      text: "GitHub",
      description:
        "GitHub를 활용하여 협업과 코드 관리에 대한 실질적인 경험을 쌓았습니다. 그리고 주기적으로 코드를 커밋하고 푸시하여 프로젝트를 진행을 했습니다.",
    },
  ];
  let radius, centerX, centerY, angleStep;
  if (windowWidth > 1130) {
    radius = rockClicked ? 580 : 600;
    centerX = rockClicked ? 70 : 50;
    centerY = 20;
    angleStep = rockClicked ? (1.8 * Math.PI) / 24 : (1.8 * Math.PI) / 24.5;
  } else if (windowWidth <= 1130 && windowWidth > 750) {
    radius = 620;
    centerX = -10;
    centerY = 40;
    angleStep = (1.8 * Math.PI) / 26;
  } else {
    radius = (240 * [...appLogos, ...ectLogos].length) / 6;
    centerX = 330;
    centerY = 550;
    angleStep = (1.8 * Math.PI) / 19;
  }
  return (
    <Container rockClicked={rockClicked}>
      <SunComponent rockClicked={rockClicked} />
      <Name rockClicked={rockClicked}>{rockClicked ? "WEB" : "APP"}</Name>
      <Body>
        {(rockClicked
          ? [...webLogos, ...ectLogos]
          : [...appLogos, ...ectLogos]
        ).map((logo, index) => {
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
        <>
          <Modal
            modalOpen={modalOpen}
            logo={modalOpen.text}
            description={modalOpen.description}
          />
        </>
      )}

      {!modalOpen && <Modal description="로고를 클릭해주세요!" />}
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
export const Modal = ({ modalOpen, logo, description }) => (
  <StyledModal modalOpen={modalOpen}>
    <p style={{ fontSize: "20px" }}>{logo}</p>
    <div>
      <p>{description}</p>
    </div>
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
    {logo && <Logo src={`assets/logos/${logo}.png`} alt={text} />}
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
  background-size: 1450px;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  width: 2200px;
  height: 2000px;
  left: -900px;
  top: -950px;
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
  @media (max-width: 1130px) {
    /* background-color: #ff914d; */
    width: 30%;
    height: 450px;
    bottom: -300px;
    left: 450px;
    img {
      &:hover {
        width: 500px;
      }
      width: 400px;
    }
  }
  @media (max-width: 750px) {
    width: 220px;
    height: 450px;
    bottom: -350px;
    left: 220px;
    img {
      &:hover {
        width: 220px;
      }
      width: 300px;
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

  @media (max-width: 1130px) {
    background-size: 120px;
    width: 30%;
    left: 600px;
    bottom: 100px;
  }

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
export const Name = styled.div`
  position: absolute;
  display: flex;
  font-size: 30px;
  top: 20px;
  left: 20px;
  padding: 5px;
  width: 200px;
  height: 60px;

  @media (max-width: 1122px) {
  }
  @media (max-width: 750px) {
    color: ${(props) => (props.rockClicked ? "#ffffff" : "#000000")};
    top: 80px;
  }
`;
export const LogoContainer = styled.div`
  position: absolute;
  margin: 10px;
  display: flex;
  align-items: center;
  z-index: 1;
  width: 120px;
  height: 40px;
  font-size: 20px;
  cursor: url("assets/images/cursor_2-1.png") 16 16, auto;
  left: ${(props) => props.x || 0}px;
  top: ${(props) => props.y || 0}px;

  @media (max-width: 977px) {
  }
  @media (max-width: 750px) {
    font-size: 13px;
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
  font-size: 23px;
  margin-left: 5px;
  text-shadow: 0 5px #fff7f1;
  @media (max-width: 1122px) {
  }
  @media (max-width: 750px) {
    font-size: 15px;
  }
`;

export const StyledModal = styled.div`
  background-color: ${(props) => (props.modalOpen ? "#f8f1f17b" : "#0000000")};
  position: absolute;
  flex-direction: column;
  display: flex;
  align-items: center;
  left: 100px;
  top: ${(props) => (props.modalOpen ? "120px" : "200px")};
  padding: 10px;
  width: 300px;
  height: 320px;
  font-size: 20px;
  border-radius: 20px;
  border: ${(props) => (props.modalOpen ? "3px solid #e9d6b6" : "none")};

  @media (max-width: 1122px) {
  }
  @media (max-width: 750px) {
    font-size: 15px;
    width: 200px;
    height: 270px;
    position: absolute;
    top: 450px;
    left: 190px;
  }
`;

export default ProduceSkill;
