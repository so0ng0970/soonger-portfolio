import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import { useScrollAnimation } from "../component/userScrollAnimation";
import { projects } from "../const/projects";
import SwiperImage from "../styles/slider";

function ProjectList({ currentProject, setCurrentProject }) {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <Container>
      {" "}
      <BgComponent />{" "}
      <ButtonContainer>
        <Button onClick={() => setCurrentProject(projects[0])}>
          You & I Diary
        </Button>
        <Button onClick={() => setCurrentProject(projects[1])}>MAAP:</Button>
        <Button onClick={() => setCurrentProject(projects[2])}>WTTR</Button>
        <Button onClick={() => setCurrentProject(projects[3])}>
          STOCK'S TALK
        </Button>
      </ButtonContainer>
      <Body>
        <ProjectContainer>
          <ProjectSubContainer>
            <ProjectName>{currentProject.name}</ProjectName>
            <ProjectDescription>
              {currentProject.description}
            </ProjectDescription>
          </ProjectSubContainer>
          <ProjectImage>
            {hoverIndex !== null && (
              <HoverContainer>
                <HoverTitleText>
                  {currentProject.implement[hoverIndex]}
                </HoverTitleText>

                <HoverText>
                  {currentProject.hoverMessages[hoverIndex]}
                </HoverText>
              </HoverContainer>
            )}
            <SwiperImage bgArr={currentProject.images} />
          </ProjectImage>
        </ProjectContainer>
        <DivContainer>
          <TitleContainer>
            <Title>프로젝트 </Title>

            <NameContainer>
              <GitName
                onClick={() => window.open(currentProject.github, "_blank")}
              >
                Git-Hub
                <Arrow />
              </GitName>
              <SiteExplain>자세한 프로젝트 설명을 원한다면..</SiteExplain>
            </NameContainer>
          </TitleContainer>
          <br />
          {currentProject.content.map((item, index) => (
            <Text key={index}>{item}</Text>
          ))}
          <br />
          <TitleContainer>
            <Title>개발 영역</Title>
            <NameContainer>
              <SiteName
                onClick={() => window.open(currentProject.notion, "_blank")}
              >
                Notion
                <Arrow />
              </SiteName>
              <SiteExplain>자세한 구현 내용을 원한다면..</SiteExplain>
            </NameContainer>
          </TitleContainer>
          <br />
          {currentProject.implementation.map((item, index) => (
            <Text key={index}>{item}</Text>
          ))}
          <br />
          {hoverIndex !== null && (
            <MobileHoverContainer>
              <HoverTitleText>
                {currentProject.implement[hoverIndex]}
              </HoverTitleText>

              <HoverText>{currentProject.hoverMessages[hoverIndex]}</HoverText>
            </MobileHoverContainer>
          )}
          <TitleContainer>
            <Title>구현 목록</Title>
            <p> - 마우스를 올려보세요 ↓</p>
          </TitleContainer>
          <br />
          <ImplementContainer>
            {currentProject.implement.map((item, index) => (
              <div>
                <Implement
                  key={index}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  {item}
                </Implement>
              </div>
            ))}
          </ImplementContainer>
          <br />
          <Divider>
            <Stack>기술 스택</Stack>
            <StackContainer>
              {currentProject.stack.map((item, index) => (
                <StackText key={index}>{item}</StackText>
              ))}
            </StackContainer>
          </Divider>
        </DivContainer>
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
    transform: translateY(-5%) ;
   
  }
  100% {
    transform: translateY(5%) ;
 
  }
`;
export const Container = styled.div`
  background-color: #292826;
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
    height: 100vh;
    min-height: 1500px;
  }
`;
export const BgContainer = styled.div`
  -webkit-scrollbar-button: none;
  background-image: url("assets/images/background4.jpg");
  background-size: 100% auto;
  position: absolute;
  right: 0px;
  display: flex;
  width: 100%;
  height: 100%;
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
    background-size: cover;
    position: absolute;
    width: 800px;
    height: 1000px;
    min-height: 0px;
    top: -550px;
    &.slide-in {
      animation: ${slideTransAnimation} 2s forwards;
    }
  }
`;

export const Body = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  padding: 50px 0px;
  align-items: center;
  justify-content: space-between;
  /* background-color: #25252599; */
  width: 100%;
  height: 100%;
  @media (max-width: 977px) {
  }
  @media (max-width: 790px) {
    flex-direction: column;
    font-size: 13px;
  }
`;

export const ProjectContainer = styled.div`
  padding-left: 60px;
  top: 10px;
  width: 40%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  @media (max-width: 977px) {
  }
  @media (max-width: 790px) {
    padding-left: 0px;
    font-size: 13px;
    top: -50px;
    width: 100%;
    height: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ProjectSubContainer = styled.div`
  position: relative;
  display: flex;
  width: 65%;
  height: 150px;

  flex-direction: column;
  @media (max-width: 1100px) {
    width: 65%;
  }

  @media (max-width: 790px) {
    font-size: 13px;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const ProjectName = styled.div`
  padding-left: 10px;
  border-left: 3px solid #eae7e0;
  font-size: 40px;

  color: white;
  @media (max-width: 1100px) {
    font-size: 3vw;
    left: 50px;
  }
  @media (max-width: 790px) {
    border-left: 3px solid #000000;
    color: #000000;
    font-size: 20px;
  }
`;
export const ProjectDescription = styled.div`
  margin-top: 30px;
  font-size: 16px;
  color: white;
  @media (max-width: 1100px) {
    font-size: 1.5vw;
  }
  @media (max-width: 790px) {
    color: #000000;
    font-size: 10px;
    margin-top: 20px;
  }
`;
export const ProjectImage = styled.div`
  position: relative;
  top: 50;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;
  height: 35vw;
  width: 25vw;
  overflow: hidden;
  @media (max-width: 1100px) {
  }
  @media (max-width: 790px) {
    top: 20px;
    height: 250px;
    width: 200px;
  }
`;

export const ButtonContainer = styled.div`
  justify-content: center;
  align-items: center;

  width: 57%;
  height: 100px;
  display: flex;
  flex-direction: row;
  position: absolute;
  justify-content: space-around;
  top: 0;
  right: 50px;
  @media (max-width: 977px) {
  }
  @media (max-width: 790px) {
    font-size: 13px;
    width: 100%;
    height: 400px;
    right: 10px;
    top: -150px;
  }
`;
export const Button = styled.button`
  color: black;
  z-index: 1;
  font-size: 15px;
  cursor: url("assets/images/cursor_4.png") 16 16, auto;
  font-family: "RubikMonoOne-Regular";
  border: none;
  border-radius: 20px;
  border-right: 2px solid #999999;
  border-bottom: 5px solid #303030;
  width: 200px;
  margin-left: 15px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ceccc1ed;
  &:hover {
    border-bottom: 2px solid #303030;
  }

  @media (max-width: 977px) {
    font-size: 12px;
  }
  @media (max-width: 790px) {
    width: 230px;
    height: 50px;
    font-size: 12px;
  }
`;
export const DivContainer = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: column;

  white-space: pre-wrap;
  width: 50%;
  height: 87%;
  left: -100px;
  position: relative;

  @media (max-width: 1200px) {
    left: -80px;
  }
  @media (max-width: 977px) {
  }
  @media (max-width: 790px) {
    left: 0px;
    top: -80px;
    color: white;

    font-size: 13px;
    width: 90%;
    height: 950px;
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  height: 30px;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;
export const Title = styled.div`
  padding-left: 10px;
  border-left: 4px solid #000000;
  font-size: 25px;

  color: #000000;
  @media (max-width: 1100px) {
  }

  @media (max-width: 790px) {
    border-left: 4px solid #ffffff;
    color: white;
    font-size: 20px;
  }
`;

export const NameContainer = styled.div`
  font-size: 10px;
`;
export const SiteName = styled.div`
  cursor: url("assets/images/cursor_4.png") 16 16, auto;
  color: #3d3d3d;
  font-size: 16px;
  background-color: "#41986c";
  width: 130px;
  height: 20px;
  font-family: "NaNHoloGigawide-Ultra";
  border-bottom: 2px solid #272727;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  &:hover {
    color: #5b5c5c;
  }

  @media (max-width: 1100px) {
    font-size: 13px;
    height: 15px;
  }
  @media (max-width: 790px) {
    color: #e7e7e7;
    border-bottom: 2px solid #ffffff;
  }
`;
export const GitName = styled(SiteName)`
  width: 150px;
`;
export const SiteExplain = styled.p`
  color: #292929;
  position: relative;
  top: -8px;

  @media (max-width: 790px) {
    color: white;
  }
`;

export const Arrow = styled.div`
  background-image: url("assets/images/arrow.png");
  background-size: cover;
  position: relative;
  top: 0px;
  margin-left: 5px;
  width: 20px;
  height: 20px;

  @media (max-width: 1100px) {
    width: 15px;
    height: 15px;
  }
  @media (max-width: 790px) {
  }
`;
export const Text = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 1.1vw;
  line-height: 1.8;
  white-space: pre-wrap;
  @media (max-width: 1100px) {
    font-size: 1.5vw;
  }
  @media (max-width: 790px) {
    font-size: 15px;
  }
`;
export const Divider = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 2px solid #979797;
  margin: 20px 0px 50px 0px;
`;
export const Stack = styled(Title)`
  font-size: 20px;

  @media (max-width: 1100px) {
  }

  @media (max-width: 790px) {
  }
`;

export const ImplementTitleContainer = styled(TitleContainer)`
  justify-content: none;
`;
export const ImplementContainer = styled(TitleContainer)`
  width: 100%;
  margin-bottom: 40px;
  line-height: 1.8;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  @media (max-width: 790px) {
    margin-top: 0px;
    margin-bottom: 10px;
    height: 100px;
  }
`;
export const Implement = styled.div`
  padding: 5px;
  margin-bottom: 10px;
  position: relative;
  font-family: "Pretendard-ExtraBold";
  height: 25px;
  border-bottom: 2px dashed #696969c0;
  font-size: 1.2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: url("assets/images/arrow_cursor.png") 16 16, auto;
  @media (max-width: 1100px) {
    font-size: 1.3vw;
  }
  @media (max-width: 790px) {
    font-size: 15px;
  }
`;
const HoverContainer = styled.div`
  white-space: pre-wrap;
  z-index: 101;
  background-color: #fdfdfdef;
  position: absolute;
  white-space: pre-wrap;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 790px) {
    display: none;
  }
`;
const MobileHoverContainer = styled.div`
  display: none;
  @media (max-width: 790px) {
    top: 270px;
    left: -5px;
    white-space: pre-wrap;
    z-index: 101;
    background-color: #f0f0f0;
    position: absolute;
    white-space: pre-wrap;
    width: 97%;
    height: 250px;
    display: flex;
    border-radius: 3px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: black;
    padding: 10px;
    outline: 2px dashed #888888;
    outline-offset: -10px;
  }
`;
export const HoverText = styled(Text)`
  font-family: "Pretendard-ExtraBold";
  font-size: 1.2vw;
  line-height: 1.8;
  white-space: pre-wrap;
  padding: 10px;
  @media (max-width: 790px) {
    font-size: 15px;
  }
`;
export const HoverTitleText = styled(Text)`
  font-family: "Pretendard-ExtraBold";
  font-size: 1.3vw;
  line-height: 1.8;
  white-space: pre-wrap;
  margin-bottom: 50px;
  @media (max-width: 790px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;
export const StackContainer = styled(TitleContainer)`
  margin-top: 15px;
  width: 100%;
`;
export const StackText = styled(Text)`
  font-size: 1.1vw;
  line-height: 1.8;
  white-space: pre-wrap;
  @media (max-width: 1100px) {
    font-size: 1.3vw;
  }
  @media (max-width: 790px) {
    font-size: 10px;
  }
`;
