import { ScrollAnimationContainer } from "../styles/ScrollAnimaiton";
import { Container } from "../styles/Container";
import Produce from "./Produce";
import ProduceSkill from "./ProduceSkill";
import Project from "./Project";
import ProjectList from "./ProjectList";
function Home() {
  return (
    <>
      <Container>
        <Produce />
      </Container>
      <Container>
        <ProduceSkill />
      </Container>

      <Container>
        <Project />
      </Container>
      <Container>
        <ProjectList />
      </Container>
    </>
  );
}
export default Home;
