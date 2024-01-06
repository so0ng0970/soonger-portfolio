import { ScrollAnimationContainer } from "../styles/ScrollAnimaiton";
import { Container } from "../styles/Container";
import Produce from "./Produce";
import Project from "./Project";

function Home() {
  return (
    <>
      <Container>
        <Produce />
      </Container>

      <Container>
        <Project />
      </Container>
    </>
  );
}
export default Home;
