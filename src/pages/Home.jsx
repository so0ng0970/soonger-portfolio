import React, { useState } from "react";
import { Container } from "../styles/Container";
import Produce from "./Produce";
import ProduceSkill from "./ProduceSkill";
import Project from "./Project";
import ProjectList from "./ProjectList";
import { projects } from "../component/projects";
import FloatingButton from "../component/floatingButton";
import styled, { keyframes } from "styled-components";
function Home() {
  const [currentProject, setCurrentProject] = useState(projects[0]);

  return (
    <>
      <Container>
        <Produce />
      </Container>
      <Container>
        <ProduceSkill />
      </Container>

      <Container>
        <Project setCurrentProject={setCurrentProject} />
      </Container>
      <Container>
        <ProjectList
          currentProject={currentProject}
          setCurrentProject={setCurrentProject}
        />
        <FloatingButton />
      </Container>
    </>
  );
}
export default Home;
const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const MainButton = styled.button`
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #ff6347;
  color: white;
  font-size: 24px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;
