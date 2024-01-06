import styled, { keyframes } from "styled-components";
import { Card, Row, Col } from "antd";
import { useScrollAnimation } from "../component/userScrollAnimation";

function Project() {
  return (
    <Container>
      <SeaComponent />

      <ProjectContainer>
        <CardComponent
          backgroundImage="assets/images/project1.jpg"
          text="You & I Diary"
          subText="- solo"
        />
        <CardComponent
          backgroundImage="assets/images/project2.jpg"
          text="MAAP"
          subText="- solo"
        />
        <CardComponent
          backgroundImage="assets/images/project3.jpg"
          text="STOCK'S TALK"
          subText="- member"
        />
        <CardComponent
          backgroundImage="assets/images/project4.jpg"
          text="PORTFOLIO"
          subText="- solo"
        />
      </ProjectContainer>

      <RockComponent />
    </Container>
  );
}

const slideInAnimation = keyframes`
  0% {
    transform: translateY(-40%);
  }
  100% {
    transform: translateY(0%);
  }
`;
const slideOutAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10%);
  }
  100% {
    opacity: 100;
    transform: translateY(0%);
  }
`;
export const SeaComponent = () => {
  const { ref, isInViewport } = useScrollAnimation();

  return <Sea ref={ref} className={isInViewport ? "slide-in" : ""} />;
};
export const RockComponent = () => {
  const { ref, isInViewport } = useScrollAnimation();

  return <Rock ref={ref} className={isInViewport ? "slide-in" : ""} />;
};

export const CardComponent = ({ subText, backgroundImage, text }) => {
  return (
    <CardWrapper>
      <TitleContainer>
        <TitleComponent text={text} subText={subText} />
      </TitleContainer>

      <ProjectImage backgroundImage={backgroundImage} />
    </CardWrapper>
  );
};
export const TitleComponent = ({ text, subText }) => (
  <DivContainer>
    <ColDiv />
    <TitleContainer>
      <Title>{text}</Title>
      <SubTitle>{subText}</SubTitle>
    </TitleContainer>
  </DivContainer>
);
export default Project;

export const Container = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  -webkit-scrollbar-button: none;
  background-image: url("assets/images/background2.jpg");
  background-size: cover;
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: flex-start;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 790px) {
    width: 100%;
    height: 260vh;
  }
`;
export const Sea = styled.div`
  background-image: url("assets/images/sea.png");
  background-size: cover;
  display: flex;
  width: 100%;
  height: 100vh;
  &.slide-in {
    animation: ${slideInAnimation} 2s forwards;
  }

  @media (max-width: 790px) {
    width: 100%;
    height: 50vh;
  }
`;

export const Rock = styled.div`
  background-image: url("assets/images/rock.png");
  background-size: cover;
  display: flex;
  width: 100%;
  height: 95vh;

  &.slide-in {
    animation: ${slideOutAnimation} 2s forwards;
  }
`;
const ProjectContainer = styled.div`
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 30vh;
  @media (max-width: 1400px) {
    justify-content: space-between;
  }
  @media (max-width: 790px) {
    height: 220vh;
    margin-top: 50px;
    flex-direction: column;
  }
`;

export const ProjectImage = styled.div`
  cursor: url("assets/images/cursor.png") 32 32, auto;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;
  height: 400px;
  width: 100%;
  &:hover {
    transform: scale(1.05); // hover 시 10% 확대
  }

  &:hover::before {
    content: "";

    position: absolute;
    width: 100%;
    height: 400px;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &:hover::after {
    content: "click";
    font-size: 25px;
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    font-family: "LeferiPoint-BlackObliqueA";
    color: white;
    animation: bounce 1s infinite;
  }
  @keyframes bounce {
    100% {
      transform: translateX(-50%) scale(1);
    }
    50% {
      transform: translateX(-50%) scale(1.1);
    }
  }
  @media (max-width: 1400px) {
    width: 80%;
    height: 300px;
  }
  @media (max-width: 977px) {
  }
  @media (max-width: 790px) {
  }
`;
const CardWrapper = styled.div`
  margin-top: 10px;

  @media (min-width: 791px) {
    &:nth-of-type(even) {
      position: relative;
      top: 2rem;
    }
  }
  @media (max-width: 1400px) {
    width: 80%;
  }
`;

export const DivContainer = styled.div`
  @media (max-width: 977px) {
    width: 250px;
  }
  @media (max-width: 790px) {
    font-size: 13px;
    width: 150px;
    height: 300px;
  }
`;
export const ColDiv = styled.div`
  background-color: #001e2c;
  width: 100%;
  height: 20px;
  /* @media (max-width: 1400px) {
    width: 250px;
    height: 20px;
  } */
`;
export const TitleContainer = styled.div`
  width: 350px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  @media (max-width: 1400px) {
    width: 250px;
  }
`;
export const Title = styled.p`
  color: #002230;
  font-family: "CWDangamAsac-Bold";
  font-size: 27px;
  @media (max-width: 1400px) {
    font-size: 20px;
  }
  @media (max-width: 977px) {
    font-size: 16px;
  }
  @media (max-width: 790px) {
    font-size: 14px;
  }
`;
export const SubTitle = styled.p`
  color: #002230;
  font-family: "CWDangamAsac-Bold";
  font-size: 17px;
  @media (max-width: 1400px) {
    font-size: 13px;
  }
  @media (max-width: 977px) {
    font-size: 16px;
  }
  @media (max-width: 790px) {
    font-size: 14px;
  }
`;
