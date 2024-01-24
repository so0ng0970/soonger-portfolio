import React, { useState } from "react";
import { Container } from "../styles/Container";
import Produce from "./Produce";
import ProduceSkill from "./ProduceSkill";
import Project from "./Project";
import ProjectList from "./ProjectList";
import { projects } from "../component/projects";
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
      </Container>
    </>
  );
}
export default Home;
