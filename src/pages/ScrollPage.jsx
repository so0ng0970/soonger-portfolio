import { ScrollAnimationContainer } from "../styles/ScrollAnimaiton";
import { Container } from "../styles/Container";

export default function App() {
  return (
    <>
      <Container>
        <h1>아래로 스크롤 하세요</h1>
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
