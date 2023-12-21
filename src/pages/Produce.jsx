import styled from "styled-components";

function Produce() {
  return (
    <Container>
      <Header>
        <span style={{ paddingRight: "10px" }} />
        <h2>Welcome to my</h2>
        <span style={{ paddingRight: "10px" }} />
        <Portfolio>portfolio</Portfolio>
      </Header>
      <h1>플러터 개발자 김승원입니다</h1>
    </Container>
  );
}
export default Produce;

export const Container = styled.div`
  background-image: url("assets/images/background1.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: flex-start;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #0a4d32;
`;
export const Portfolio = styled.h1`
  font-family: "GoldenPlains-Demo";
  size: 30px;
`;
