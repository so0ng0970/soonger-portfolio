import styled, { keyframes } from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import { useScrollAnimation } from "../component/userScrollAnimation";
import { CurvedTextStyle } from "../styles/CurvedTextStyle";
import { appLogos, webLogos, ectLogos } from "../const/skills";

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
    <TextContainer>Welcome to my</TextContainer>
    {modalOpen && (
      <LogoBorderLine rockClicked={rockClicked}>
        {" "}
        <ModalTitleContainer>
          <ModalLogoName>{logo}</ModalLogoName>
        </ModalTitleContainer>
      </LogoBorderLine>
    )}
    <DescriptionContainer modalOpen={modalOpen}>
      <p>{description}</p>
    </DescriptionContainer>
    <Portfolio modalOpen={modalOpen} rockClicked={rockClicked}>
      portfolio
    </Portfolio>
    <Text2Container modalOpen={modalOpen}>Welcome to my</Text2Container>
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
    -webkit-backface-visibility: hidden;
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
    left: 130px;
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
    left: -60px;
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
    top: 210px;
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

  @media (max-width: 790px) {
    font-size: 13px;
    margin: 5px 0px 0px 0px;
  }
`;
export const Logo = styled.img`
  width: 25px;

  height: 25px;
  @media (max-width: 1122px) {
  }
  @media (max-width: 790px) {
    width: 20px;
    height: 20px;
  }
`;
export const LogoName = styled.p`
  &:hover {
    font-size: 23px;
  }
  font-size: 20px;
  margin-left: 5px;

  @media (max-width: 1122px) {
  }
  @media (max-width: 790px) {
    font-size: 15px;
    &:hover {
      font-size: 18px;
    }
  }
`;
export const ModalLogoName = styled.p`
  font-size: 30px;

  @media (max-width: 1122px) {
  }
  @media (max-width: 750px) {
    font-size: 23px;
  }
`;
export const StyledModal = styled.div`
  flex-direction: column;
  background-color: ${(props) => (props.rockClicked ? "#292929" : "#F4F4F3")};
  display: flex;
  position: relative;
  padding: 20px;
  width: 75%;
  height: 82%;
  font-size: 19px;
  border-radius: 5px;
  box-shadow: ${(props) =>
    props.rockClicked
      ? " rgba(255, 255, 255, 0.15) 0px 2px 8px"
      : "rgba(0, 0, 0, 0.15) 0px 2px 8px"};
  outline: 2px dashed #b3b3b3;
  outline-offset: -10px;
  line-height: 1.5;
  @media (max-width: 1122px) {
    font-size: 17px;
  }
  @media (max-width: 790px) {
    top: -40px;
    font-size: 13px;
    width: 800px;
    height: 280px;
  }
`;
export const DescriptionContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  font-family: "SBAggroM";

  top: ${(props) => (props.modalOpen ? "10%" : "40%")};
  width: 100%;
  height: 250px;
  @media (max-width: 790px) {
    top: ${(props) => (props.modalOpen ? "5%" : "40%")};
  }
`;
export const TextContainer = styled.div`
  position: relative;
  top: 0px;
  font-size: 10px;
  @media (max-width: 1140px) {
  }
  @media (max-width: 977px) {
  }
  @media (max-width: 790px) {
    font-size: 8px;
  }
`;
export const Text2Container = styled.div`
  transform: rotate(-180deg);
  position: relative;
  font-size: 10px;
  top: ${(props) => (props.modalOpen ? "90px" : "195px")};
  @media (max-width: 1140px) {
  }
  @media (max-width: 977px) {
  }
  @media (max-width: 790px) {
    font-size: 8px;
    top: 0px;
  }
`;
export const Portfolio = styled.div`
  padding-top: 3px;
  padding-left: 7px;
  width: 65px;
  height: 16px;
  background-color: ${(props) => (props.rockClicked ? "#ececec" : "#2f4752")};
  color: ${(props) => (props.rockClicked ? "black" : "white")};
  transform: rotate(-90deg);
  font-size: 10px;
  position: relative;
  border-radius: 5px 5px 0px 0px;
  bottom: ${(props) => (props.modalOpen ? "-54px" : "-160px;")};

  left: -66px;
  @media (max-width: 1140px) {
  }
  @media (max-width: 977px) {
  }
  @media (max-width: 790px) {
    left: -64px;
    bottom: ${(props) => (props.modalOpen ? "40px" : "28px;")};
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

export default ProduceSkill;
