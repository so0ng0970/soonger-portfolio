import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import { useScrollAnimation } from "../component/userScrollAnimation";
import { projects } from "../component/projects";
import SwiperImage from "../styles/slider";

function ProjectList({ currentProject, setCurrentProject }) {
  return (
    <Container>
      {" "}
      <BgComponent />{" "}
      <ButtonContainer>
        <Button onClick={() => setCurrentProject(projects[0])}>
          You & I Diary
        </Button>
        <Button onClick={() => setCurrentProject(projects[1])}>MAAP</Button>
        <Button onClick={() => setCurrentProject(projects[2])}>
          STOCK'S TALK
        </Button>
        <Button onClick={() => setCurrentProject(projects[3])}>
          PORTFOLIO
        </Button>
      </ButtonContainer>
      <Body>
        <ProjectName>{currentProject.name}</ProjectName>
        <ProjectContainer>
          <ProjectImage>
            <SwiperImage bgArr={currentProject.images} />
          </ProjectImage>
        </ProjectContainer>
        <DivContainer>
          <p>프로젝트 소개 </p>
          <p>{currentProject.description}</p>
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
  min-height: 800px;
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
  background-size: 100% auto;

  position: absolute;
  right: -30px;
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
    top: -430px;
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

export const ProjectContainer = styled.div`
  @media (max-width: 977px) {
  }
  @media (max-width: 790px) {
    font-size: 13px;
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const ProjectName = styled.div`
  padding-left: 10px;
  border-left: 3px solid #eae7e0;
  font-size: 40px;
  left: 100px;
  top: 70px;
  position: absolute;
  color: white;
  @media (max-width: 1100px) {
    font-size: 3vw;
    left: 50px;
  }
  @media (max-width: 790px) {
    border-left: 3px solid #000000;
    color: #000000;
    top: 120px;
  }
`;
export const ProjectImage = styled.div`
  position: relative;
  top: 50;
  left: 100px;
  margin-right: 50px;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;
  height: 35vw;
  width: 25vw;
  overflow: hidden;
  @media (max-width: 1100px) {
    top: -50px;
    left: 50px;
  }
  @media (max-width: 790px) {
    top: 100px;
    left: 30px;

    height: 400px;
    width: 300px;
  }
`;
export const DivContainer = styled.div`
  width: 50%;
  height: 80%;
  margin-right: 50px;
  position: relative;
  top: 30px;
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
    width: 100%;
    height: 400px;
    right: 10px;
    top: -140px;
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
    font-size: 12px;
  }
  @media (max-width: 790px) {
    width: 230px;
    font-size: 12px;
  }
`;
