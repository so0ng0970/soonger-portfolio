import styled, { keyframes } from "styled-components";

import { useScrollAnimation } from "../component/userScrollAnimation";
import { projects } from "../const/projects";
function Project({ setCurrentProject }) {
  return (
    <Container>
      <SeaComponent />
      <ProjectContainer>
        <CardComponent
          onClick={() => {
            setCurrentProject(projects[0]);
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            });
          }}
          number="01"
          backgroundImage="assets/images/project1.jpg"
          text="You & I Diary"
          subText="- App"
        />
        <CardComponent
          onClick={() => {
            setCurrentProject(projects[1]);
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            });
          }}
          number="02"
          backgroundImage="assets/images/project2.jpg"
          text="MAAP:"
          subText="- App"
        />
        <CardComponent
          onClick={() => {
            setCurrentProject(projects[2]);
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            });
          }}
          number="03"
          backgroundImage="assets/images/project3.jpg"
          text="STOCK'S TALK"
          subText="- Web"
        />
        <CardComponent
          onClick={() => {
            setCurrentProject(projects[3]);
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            });
          }}
          number="04"
          backgroundImage="assets/images/project4.jpg"
          text="PORTFOLIO"
          subText="- Web"
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
    transform: translateY(10%);
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

export const CardComponent = ({
  onClick,
  subText,
  backgroundImage,
  text,
  number,
}) => {
  return (
    <CardWrapper onClick={onClick}>
      <CardContainer>
        <NumberComponent number={number} />

        <TitleContainer>
          <TitleComponent text={text} subText={subText} />
        </TitleContainer>
        <ProjectImage backgroundImage={backgroundImage} />
      </CardContainer>
    </CardWrapper>
  );
};
export const TitleComponent = ({ text, subText }) => (
  <>
    <DivContainer>
      <ColDiv />
      <TitleContainer>
        <Title>{text}</Title>
        <SubTitle>{subText}</SubTitle>
      </TitleContainer>
    </DivContainer>
  </>
);
export const NumberComponent = ({ number }) => (
  <NumberContainer>
    <NumberDiv />
    <Number>{number}</Number>
  </NumberContainer>
);
export default Project;

export const Container = styled.div`
  background-color: #eae7e0;
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

  @media (max-width: 790px) {
    width: 100%;
    height: 1700px;
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
  position: relative;
  @media (max-width: 790px) {
    width: 100%;
    height: 200px;
  }
`;

export const Rock = styled.div`
  background-image: url("assets/images/rock.png");
  background-size: cover;
  display: flex;
  width: 100%;
  height: 100vh;
  @media (max-width: 790px) {
    height: 200px;
  }
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
  height: 400px;

  @media (max-width: 1400px) {
    justify-content: space-between;
  }
  @media (max-width: 790px) {
    height: 1300px;

    flex-direction: column;
  }
`;

const CardContainer = styled.div`
  height: 30vw;
  width: 22vw;

  @media (max-width: 1400px) {
  }
  @media (max-width: 790px) {
    height: 320px;
    width: 270px;
  }
`;
export const ProjectImage = styled.div`
  cursor: url("assets/images/cursor_3.png") 32 32, auto;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;
  height: 90%;
  width: 100%;

  &:hover {
    transform: scale(1.05); // hover 시 10% 확대
  }

  &:hover::before {
    content: "";

    position: absolute;
    height: 100%;
    width: 100%;
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
  /* @media (max-width: 1400px) {
    width: 80%;
    height: 300px;
  } */
  @media (max-width: 977px) {
  }
  @media (max-width: 790px) {
  }
`;
const CardWrapper = styled.div`
  top: -140px;
  padding: 10px;
  position: relative;
  @media (min-width: 791px) {
    &:nth-of-type(even) {
      position: relative;
      top: -6rem;
    }
  }
  @media (max-width: 790px) {
    top: -100px;
    margin-bottom: 30px;
  }
  /* @media (max-width: 1400px) {
    width: 80%;
  } */
`;
export const NumberContainer = styled.div`
  height: 10vw;

  @media (max-width: 977px) {
  }
  @media (max-width: 790px) {
    font-size: 13px;
  }
`;

export const NumberDiv = styled.div`
  background-color: #001e2c;
  height: 25%;
  width: 2px;
  right: 10px;
  position: absolute;
  /* @media (max-width: 1400px) {
    width: 250px;
    height: 20px;
  } */
  @media (max-width: 790px) {
    display: none;
  }
`;
export const Number = styled.p`
  font-size: 2.5em;
  top: -30px;
  right: 10px;
  position: absolute;
  -ms-transform: rotate(-90deg);
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
  @media (max-width: 790px) {
    display: none;
  }
  /* @media (max-width: 1400px) {
    width: 250px;
    height: 20px;
  } */
`;
export const DivContainer = styled.div`
  width: 100%;
  @media (max-width: 977px) {
  }
  @media (max-width: 790px) {
    font-size: 13px;
  }
`;

export const ColDiv = styled.div`
  background-color: #001e2c;
  height: 20px;
  /* @media (max-width: 1400px) {
    width: 250px;
    height: 20px;
  } */
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  /* @media (max-width: 1400px) {
    width: 250px;
  } */
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
