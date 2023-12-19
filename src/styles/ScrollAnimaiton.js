import { Container } from "../styles/Container";
import { useScrollAnimation } from "../component/userScrollAnimation";

export const ScrollAnimationContainer = ({ children }) => {
  const { ref, isInViewport } = useScrollAnimation();
  return (
    <Container ref={ref} className={isInViewport ? "frame-in" : ""}>
      {children}
    </Container>
  );
};
