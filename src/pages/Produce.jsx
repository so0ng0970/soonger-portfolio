import styled from "styled-components";
import { Image, Row, Col } from "antd";
function Produce() {
  return (
    <Container>
      <Header>
        <span style={{ paddingRight: "10px" }} />
        <WelcomeText>Welcome to my</WelcomeText>
        <span style={{ paddingRight: "10px" }} />
        <Portfolio>portfolio</Portfolio>
        <span style={{ paddingRight: "20px" }} />
        <Divider />
        <span style={{ paddingRight: "30px" }} />
        <Num>01</Num>
      </Header>
      <Body>
        <ProfileContainer>
          <ProfileImage />
        </ProfileContainer>
        <Circle>
          <p>
            안녕하세요.
            <br />
            저는 플러터를 좋아하고
            <br />
            부지런한 개발자 김승원입니다.
          </p>
        </Circle>
      </Body>
    </Container>
  );
}
export default Produce;
export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid grey;
  width: 100%;
  margin: 0px 5px;
`;
export const Num = styled.p`
  font-size: 10px;
  margin-right: 30px;
  @media (max-width: 480px) {
    font-size: 10px;
    margin-right: 20px;
  }
`;
export const Container = styled.div`
  background-image: url("assets/images/background1.jpg");
  background-size: cover;
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: flex-start;
`;
export const line = styled.div`
  background-image: url("assets/images/background1.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  width: 80%;
  height: 100vh;
`;
export const WelcomeText = styled.h2`
  white-space: nowrap;
  font-family: "ClimateCrisisKR-1979";
  font-size: 1.9vw;
`;
export const Portfolio = styled.h1`
  font-family: "Effluent";
  font-size: 3vw;
`;

export const Text2Container = styled.div`
  position: absolute;
  top: -35px;
  right: 10px;
  background-image: url("assets/images/text.png");
  background-size: cover;
  background-position: center;
  width: 50px;
  height: 500px;
  display: flex;
  flex-direction: row;
  @media (max-width: 790px) {
    top: 0px;
    width: 30px;
    height: 300px;
  }
`;
export const Body = styled.div`
  width: 100%;
  margin-top: 100px;
  /* background-color: blue; */
  margin-left: 100px;
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: 790px) {
    margin-left: 45px;
    margin-top: 10px;
  }
`;

export const ProfileContainer = styled.div`
  width: 300px;
  height: 400px;

  @media (max-width: 790px) {
    width: 300px;
    height: 350px;
  }
`;

export const ProfileImage = styled.div`
  background-image: url("assets/images/profile.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`;
export const Circle = styled.div`
  font-family: "SBAggroB";
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 70px;
  right: 100px;
  border-radius: 50%;
  border: 1px solid black;
  position: relative;
  background-color: #fd6e55;
  @media (max-width: 790px) {
    right: 70px;
    width: 250px;
    height: 190px;
  }
`;
