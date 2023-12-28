import styled from "styled-components";

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
      {" "}
      <Header>
        <span style={{ paddingRight: "10px" }} />
        <WelcomeText>Welcome to my</WelcomeText>
        <span style={{ paddingRight: "10px" }} />
        <Portfolio>portfolio</Portfolio>
        <span style={{ paddingRight: "20px" }} />
        <Divider />
        <span style={{ paddingRight: "30px" }} />
        <Num>01</Num>
      </Header>{" "}
      <Body>
        <ProfileCircleContainer>
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
        </ProfileCircleContainer>
        <AllBoxContainer>
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

              <LinkComponent IconComponent={GithubOutlined} text="Github" />
            </Box>
            <Box>
              <TitleComponent IconComponent={ColDiv} text="EDUCATION" />
              <ContainerComponent text="한양여자대학교 - 니트패션디자인과" />
              <ContainerComponent text="이노베이션 캠프 - 웹 프론트엔드 수료" />
            </Box>
          </BoxContainer>
          <BoxContainer>
            <Box>
              <TitleComponent IconComponent={ColDiv} text="SKILLS" />
              <LogoBox>
                <LogoComponent url="dart" text="Dart" />
                <LogoComponent url="flutter" text="Flutter" />
                <LogoComponent url="javascript" text="Javascript" />
                <LogoComponent url="react" text="React" />
              </LogoBox>
            </Box>
            <Box>
              <TitleComponent IconComponent={ColDiv} text="EDUCATION" />
              <ContainerComponent text="한양여자대학교 - 니트과" />
              <ContainerComponent text="이노베이션 캠프 - 웹 프론트엔드 수료" />
            </Box>
          </BoxContainer>
        </AllBoxContainer>
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

export const LogoComponent = ({ url, text }) => (
  <LogosBox>
    <LogoContainer>
      <Logo
        src={`https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/${url}.svg`}
      />
    </LogoContainer>
    <p>{text}</p>
  </LogosBox>
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
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-scrollbar-button: none;
  background-image: url("assets/images/background1.jpg");
  background-size: cover;
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: flex-start;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 790px) {
    height: 1000px;
  }
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
  @media (max-width: 1220px) {
    width: 0px;
    height: 0px;
  }
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
  margin-left: 100px;
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: 790px) {
    flex-direction: column;
    margin-left: 45px;
    margin-top: 10px;
  }
`;
const ProfileCircleContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 790px) {
    flex-direction: row;
  }
`;
export const ProfileContainer = styled.div`
  width: 300px;
  height: 400px;

  @media (max-width: 790px) {
    margin-left: 45px;
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
  @media (max-width: 1500px) {
    width: 60%;
    height: 70%;
  }
  @media (max-width: 790px) {
    width: 200px;
    height: 280px;
  }
`;

export const AllBoxContainer = styled.div`
  /* background-color: #fd6e55; */
  justify-content: space-around;
  display: flex;
  height: 50vh;
  width: 50%;
  @media (max-width: 1500px) {
    width: 80vh;
    font-size: 1.2vw;
  }
  @media (max-width: 1220px) {
    width: 30vh;
    font-size: 1.2vw;
  }
  @media (max-width: 790px) {
    margin-top: 10px;
    width: 400px;
    min-height: 500px;
    display: flex;
    flex-direction: column;
  }
`;
export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  @media (max-width: 790px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
export const Box = styled.div`
  @media (max-width: 790px) {
    margin-bottom: 10px;
  }
`;
export const ColDiv = styled.div`
  background-color: #fd6e55;
  width: 3px;
  height: 30px;
  @media (max-width: 790px) {
    height: 15px;
  }
`;

export const DivContainer = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 30px;
  @media (max-width: 790px) {
    font-size: 13px;
    width: 300px;
    height: 20px;
  }
`;

export const Title = styled.p`
  font-family: "OTF® Glusp";
  font-size: 22px;
  @media (max-width: 790px) {
    font-size: 15px;
  }
`;
export const Circle = styled.div`
  padding: 15px;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  text-align: start;
  top: 150px;
  right: 100px;
  border-radius: 50%;
  border: 1px solid black;
  position: relative;
  background-color: #fd6e55;
  @media (max-width: 1220px) {
    font-size: 1.5vw;
    top: 220px;
    right: 280px;
    width: 20vh;
    height: 20vh;
  }
  @media (max-width: 1500px) {
    font-size: 14px;
    top: 220px;
    right: 280px;
    width: 25vh;
    height: 25vh;
  }
  @media (max-width: 790px) {
    font-size: 14px;
    top: 110px;
    right: 180px;
    width: 140px;
    height: 140px;
  }
`;

export const LogosBox = styled.div`
  margin: 10px 30px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  @media (max-width: 790px) {
    margin-bottom: 10px;
  }
`;
export const LogoBox = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  @media (max-width: 790px) {
    margin-bottom: 10px;
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: white;
`;
export const Logo = styled.img`
  width: 25px;
  height: 25px;
`;
