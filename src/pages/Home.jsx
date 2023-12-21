import { ScrollAnimationContainer } from "../styles/ScrollAnimaiton";
import { Container } from "../styles/Container";
import Produce from "./Produce";

function Home() {
  return (
    <>
      <Container>
        <Produce />
      </Container>

      <ScrollAnimationContainer>
        <h1>안녕</h1>
      </ScrollAnimationContainer>

      <ScrollAnimationContainer>
        <h1>하세요</h1>
      </ScrollAnimationContainer>

      <ScrollAnimationContainer>
        <h1>반갑습니다</h1>
      </ScrollAnimationContainer>
    </>
  );
}
export default Home;
