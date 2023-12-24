import styled from "styled-components";
import { Image, Row, Col } from "antd";
import {
  UserOutlined,
  ContactsOutlined,
  HomeOutlined,
  MailOutlined,
  RocketOutlined,
  GithubOutlined,
} from "@ant-design/icons";
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
            부지런한 개발자 김승원 입니다.
          </p>
        </Circle>
        <BoxContainer>
          <Box>
            <TitleComponent IconComponent={ColDiv} text="ABOUT" />
            <ContainerComponent IconComponent={UserOutlined} text="김승원" />
            <ContainerComponent
              IconComponent={ContactsOutlined}
              text="1997.06.02"
            />
            <ContainerComponent
              IconComponent={HomeOutlined}
              text="서울 강서구 마곡동"
            />
            <ContainerComponent
              IconComponent={MailOutlined}
              text="soonger3300@gmail.com"
            />
            <ContainerComponent
              IconComponent={RocketOutlined}
              text="한양여자대학교 - 니트패션디자인과"
            />
            <LinkComponent IconComponent={GithubOutlined} text="Github" />
          </Box>
          <Box>
            <TitleComponent IconComponent={ColDiv} text="EDUCATION" />
            <ContainerComponent text="한양여자대학교 - 니트패션디자인과" />
            <ContainerComponent text="이노베이션 캠프 - 웹 프론트엔드 수료" />
          </Box>
        </BoxContainer>
        <Text2Container />
      </Body>
    </Container>
  );
}
export default Produce;

export const ContainerComponent = ({ IconComponent, text }) => (
  <DivContainer>
    {IconComponent && <IconComponent />}
    <span style={{ paddingRight: "5px" }} />
    <p>{text}</p>
  </DivContainer>
);
export const TitleComponent = ({ text }) => (
  <DivContainer>
    <ColDiv />
    <span style={{ paddingRight: "10px" }} />
    <Title>{text}</Title>
  </DivContainer>
);
export const LinkComponent = ({ IconComponent, text }) => (
  <DivContainer>
    <IconComponent />
    <span style={{ paddingRight: "5px" }} />
    <p>
      <a
        href="https://github.com/so0ng0970"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#2e302f" }}
      >
        {text}
      </a>
    </p>
  </DivContainer>
);

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
  overflow: hidden;
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
  top: -120px;
  right: 120px;
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
    right: 60px;
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
    height: 300px;
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
  padding: 15px;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  text-align: start;
  top: 70px;
  right: 100px;
  border-radius: 50%;
  border: 1px solid black;
  position: relative;
  background-color: #fd6e55;
  @media (max-width: 790px) {
    right: 70px;
    width: 260px;
    height: 190px;
  }
`;
const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
`;
export const Box = styled.div`
  width: 250px;
`;
export const ColDiv = styled.div`
  background-color: #fd6e55;
  width: 3px;
  height: 30px;
`;

export const DivContainer = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 30px;
`;

export const Title = styled.p`
  font-family: "OTF® Glusp";
  font-size: 22px;
`;
