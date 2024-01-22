import styled, { keyframes } from "styled-components";
import { useScrollAnimation } from "../component/userScrollAnimation";
import SwiperImage from "../styles/slider";
// const images = [
//   "assets/images/background4.jpg",
//   "assets/images/background4-mobile.png",
//   "assets/images/profile.jpg",
// ];
const images = [
  { img: "assets/images/background4.jpg" },
  { img: "assets/images/background4-mobile.png" },
  { img: "assets/images/profile.jpg" },
];
function ProjectList() {
  return (
    <Container>
      {" "}
      <BgComponent />{" "}
      <ButtonContainer>
        <Button>You & I Diary</Button>
        <Button>MAAP</Button>
        <Button>STOCK'S TALK</Button>
        <Button>PORTFOLIO</Button>
      </ButtonContainer>
      <Body>
        <ProjectImage>
          <SwiperImage bgArr={images} />
        </ProjectImage>
        <DivContainer></DivContainer>
      </Body>
    </Container>
  );
}

export default ProjectList;
export const BgComponent = () => {
  const { ref, isInViewport } = useScrollAnimation();

  return <BgContainer ref={ref} className={isInViewport ? "slide-in" : ""} />;
};
const slideInAnimation = keyframes`
  0% {
    transform: translateX(40%);
  }
  100% {
    transform: translateX(0%);
  }
`;
const slideTransAnimation = keyframes`
  0% {
    transform: translateY(-20%) ;
  }
  100% {
    transform: translateY(0%) ;
  }
`;
export const Container = styled.div`
  background-color: #292826;
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
    height: 100vh;
    min-height: 900px;
  }
`;
export const BgContainer = styled.div`
  -webkit-scrollbar-button: none;
  background-image: url("assets/images/background4.jpg");
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
  &.slide-in {
    animation: ${slideInAnimation} 2s forwards;
  }
  @media (max-width: 790px) {
    background-image: url("assets/images/background4-mobile.png");

    position: absolute;
    width: 800px;
    height: 1000px;
    min-height: 0px;
    top: -430px;
    &.slide-in {
      animation: ${slideTransAnimation} 2s forwards;
    }
  }
`;

export const Body = styled.div`
  position: absolute;
  top: 0;
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
    font-size: 13px;
  }
`;

export const ProjectImage = styled.div`
  background-color: #5d80917a;
  position: absolute;
  top: 50;
  left: 100px;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;
  height: 40vw;
  width: 30vw;
  overflow: hidden;
  @media (max-width: 977px) {
  }
  @media (max-width: 790px) {
    height: 400px;
    width: 300px;
  }
`;
export const DivContainer = styled.div`
  width: 60%;
  height: 100%;
  @media (max-width: 977px) {
  }
  @media (max-width: 790px) {
    font-size: 13px;
    width: 80%;
    height: 400px;
  }
`;
export const ButtonContainer = styled.div`
  justify-content: center;
  align-items: center;
  /* background-color: #001a256e; */
  width: 60%;
  height: 150px;
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0;
  right: 0;
  @media (max-width: 977px) {
  }
  @media (max-width: 790px) {
    font-size: 13px;
    width: 80%;
    height: 400px;
  }
`;
export const Button = styled.button`
  z-index: 1;
  font-size: 18px;
  font-family: "RubikMonoOne-Regular";
  border: none;
  border-radius: 20px;
  border-right: 2px solid #999999;
  border-bottom: 5px solid #303030;
  width: 220px;
  margin-left: 15px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e4e2d6;
  &:hover {
    border-bottom: 2px solid #303030;
  }

  @media (max-width: 977px) {
  }
  @media (max-width: 790px) {
  }
`;
