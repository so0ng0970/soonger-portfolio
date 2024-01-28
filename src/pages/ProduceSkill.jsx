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

  return (
    <Container rockClicked={rockClicked}>
      <SunComponent rockClicked={rockClicked} />
      <Name rockClicked={rockClicked}>{rockClicked ? "WEB" : "APP"}</Name>
      <Body rockClicked={rockClicked}>
        <LogoBody>
          <AppContainer>
            <AppSectionTitle rockClicked={rockClicked} />
            {(rockClicked ? [...webLogos] : [...appLogos]).map(
              (logo, index) => (
                <LogoComponent
                  onClick={() => setModalOpen(logo)}
                  logo={logo.logo}
                  text={logo.text}
                />
              )
            )}
          </AppContainer>
          <EctContainer>
            <EctSectionTitle rockClicked={rockClicked} />
            {ectLogos.map((logo, index) => (
              <LogoComponent
                onClick={() => setModalOpen(logo)}
                logo={logo.logo}
                text={logo.text}
              />
            ))}
          </EctContainer>
        </LogoBody>
        <ModalBody modalOpen={modalOpen} rockClicked={rockClicked}>
          {modalOpen && (
            <>
              <Modal
                rockClicked={rockClicked}
                modalOpen={modalOpen}
                logo={modalOpen.text}
                description={modalOpen.description}
              />
            </>
          )}

          {!modalOpen && (
            <Modal
              rockClicked={rockClicked}
              description="로고를 클릭해주세요!"
            />
          )}
        </ModalBody>
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
export const Modal = ({ modalOpen, rockClicked, logo, description }) => (
  <StyledModal modalOpen={modalOpen} rockClicked={rockClicked}>
    {modalOpen && (
      <LogoBorderLine rockClicked={rockClicked}>
        {" "}
        <ModalTitleContainer>
          <p style={{ fontSize: "30px" }}>{logo}</p>
          <TextContainer>Welcome to my</TextContainer>
        </ModalTitleContainer>
      </LogoBorderLine>
    )}
    <DescriptionContainer modalOpen={modalOpen}>
      <p>{description}</p>
    </DescriptionContainer>
    <Portfolio>portfolio</Portfolio>
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

const AppSectionTitle = ({ rockClicked }) => (
  <BorderLine rockClicked={rockClicked}>
    {rockClicked ? "Web" : "App"}
  </BorderLine>
);

const EctSectionTitle = ({ rockClicked }) => (
  <BorderLine rockClicked={rockClicked}>Ect</BorderLine>
);
export const LogoComponent = ({ logo, text, onClick }) => (
  <LogoContainer onClick={onClick}>
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
export const TextContainer = styled.div`
  transform: rotate(90deg);
  position: relative;
  top: -10px;
  font-size: 10px;
  @media (max-width: 1140px) {
  }
  @media (max-width: 977px) {
  }
  @media (max-width: 790px) {
  }
`;
export const Portfolio = styled.div`
  padding-top: 3px;
  padding-left: 7px;
  width: 65px;
  height: 16px;
  background-color: #2f4752;
  color: white;
  transform: rotate(-90deg);
  font-size: 10px;
  position: relative;
  border-radius: 5px 5px 0px 0px;
  bottom: -40px;
  left: -60px;
  @media (max-width: 1140px) {
  }
  @media (max-width: 977px) {
  }
  @media (max-width: 790px) {
  }
`;
export const ModalTitleContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 977px) {
  }
  @media (max-width: 790px) {
  }
`;

export const Container = styled.div`
  background-color: ${(props) => (props.rockClicked ? "#131313" : "#eae7e0")};
  background-image: url("assets/images/background2.jpg");

  background-size: cover;
  overflow: hidden;
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  min-height: 900px;

  align-items: flex-start;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 790px) {
    height: 100vh;
    min-height: 900px;
  }
`;

export const SunContainer = styled.div`
  background-image: url(${(props) =>
    props.rockClicked
      ? "assets/images/background2_moon.png"
      : "assets/images/background2_sun.png"});
  background-size: 550px;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  width: 600px;
  height: 600px;
  left: -250px;
  top: -300px;
  position: absolute;
  &.slide-in {
    animation: ${sunTransAnimation} 2s forwards;
  }
  @media (max-width: 1130px) {
    left: -350px;
    top: -300px;
  }
  @media (max-width: 750px) {
    height: 800px;
    background-size: 800px;
    left: -900px;
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
  left: 300px;
  bottom: -260px;
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
  @media (max-width: 790px) {
    width: 220px;
    height: 450px;
    bottom: -350px;
    left: 200px;
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
  left: 460px;
  bottom: 120px;

  @media (max-width: 1130px) {
    background-size: 120px;
    width: 30%;
    left: 600px;
    bottom: 100px;
  }

  @media (max-width: 790px) {
    transform: scaleX(-1);
    background-size: 120px;
    width: 300px;
    left: 0px;
    bottom: 30px;
  }
`;

export const Name = styled.div`
  position: absolute;
  display: flex;
  font-size: 30px;
  top: 50px;
  left: 50px;
  padding: 5px;
  width: 200px;
  height: 60px;

  @media (max-width: 1122px) {
  }
  @media (max-width: 750px) {
    color: ${(props) => (props.rockClicked ? "#ffffff" : "#000000")};
    top: 50px;
    left: 35px;
  }
`;

export const Body = styled.div`
  color: ${(props) => (props.rockClicked ? "#ffffff" : "#000000")};
  position: absolute;
  top: -50px;
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
  }
`;

export const LogoBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 50%;
  padding: 5px;
  margin-left: 400px;
  height: 600px;
  @media (max-width: 1130px) {
    margin-left: 200px;
  }
  @media (max-width: 790px) {
    margin-left: 80px;
    padding: 0px;
    flex-direction: row;
    top: 240px;
    width: 100%;
  }
`;
export const AppContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 50px;
  height: 600px;
  @media (max-width: 790px) {
    margin-bottom: 0px;
    width: 50%;
  }
`;
export const EctContainer = styled.div`
  position: relative;
  width: 100%;

  height: 600px;
  @media (max-width: 790px) {
    width: 50%;
  }
`;
export const ModalBody = styled.div`
  display: flex;
  /* background-color: #ff914d; */
  position: relative;
  padding: 5px;
  width: 50%;
  height: 600px;
  @media (max-width: 790px) {
    width: 80%;
    height: 500px;
    top: -70px;
  }
`;
export const BorderLine = styled.div`
  display: flex;
  padding-bottom: 10px;
  font-size: 20px;
  border-bottom: ${(props) =>
    props.rockClicked ? "1px solid #ffffff" : "1px solid #000000"};
  position: relative;

  width: 200px;
  @media (max-width: 790px) {
    width: 120px;
  }
`;
export const LogoBorderLine = styled.div`
  display: flex;

  font-size: 20px;
  border-bottom: ${(props) =>
    props.rockClicked ? "1px solid #ffffff" : "1px solid #000000"};
  position: relative;
  width: 100%;
`;

export const LogoContainer = styled.div`
  position: relative;
  margin: 12px 0px 0px 0px;
  display: flex;
  align-items: center;
  z-index: 1;
  width: 280px;
  height: 40px;
  font-size: 20px;
  cursor: url("assets/images/cursor_2-1.png") 16 16, auto;
  left: ${(props) => props.x || 0}px;
  top: ${(props) => props.y || 0}px;

  @media (max-width: 750px) {
    font-size: 13px;
    margin: 5px 0px 0px 0px;
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
  &:hover {
    color: #5e5e5e;
  }
  font-size: 20px;
  margin-left: 5px;

  @media (max-width: 1122px) {
  }
  @media (max-width: 750px) {
    font-size: 15px;
  }
`;

export const StyledModal = styled.div`
  flex-direction: column;
  background-color: ${(props) => (props.rockClicked ? "#292929" : "#ffffff8f")};
  display: flex;
  position: relative;

  /* left: 100px; */
  /* top: ${(props) => (props.modalOpen ? "120px" : "200px")}; */
  padding: 15px;
  width: 70%;
  height: 80%;
  font-size: 18px;
  border-radius: 5px;
  box-shadow: ${(props) =>
    props.rockClicked
      ? " rgba(255, 255, 255, 0.15) 0px 2px 8px"
      : "rgba(0, 0, 0, 0.15) 0px 2px 8px"};

  line-height: 1.5;
  @media (max-width: 1122px) {
  }
  @media (max-width: 790px) {
    font-size: 14px;
    width: 800px;
    height: 280px;
  }
`;
export const DescriptionContainer = styled.div`
  display: flex;
  position: relative;
  top: ${(props) => (props.modalOpen ? "10%" : "40%")};
  width: 100%;
  height: 250px;
  @media (max-width: 790px) {
    top: ${(props) => (props.modalOpen ? "5%" : "40%")};
  }
`;

export default ProduceSkill;
