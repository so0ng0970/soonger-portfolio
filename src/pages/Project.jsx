import styled, { keyframes } from "styled-components";
import { Card, Row, Col } from "antd";

const { Meta } = Card;
function Project() {
  return (
    <Container>
      <ProjectContainer>
        <CardComponent
          backgroundImage="assets/images/project1.jpg"
          text="You & I Diary"
        />
        <CardComponent
          backgroundImage="assets/images/background1.jpg"
          text="MAAP"
        />
        <CardComponent
          backgroundImage="assets/images/background1.jpg"
          text="STOCK'S TALK"
        />
        <CardComponent
          backgroundImage="assets/images/background1.jpg"
          text="PORTFOLIO"
        />
      </ProjectContainer>
    </Container>
  );
}
export const CardComponent = ({
  key,
  title,
  description,
  backgroundImage,
  text,
}) => {
  return (
    <CardWrapper>
      <TitleComponent text={text} />
      <Card
        key={key}
        hoverable
        style={{ backgroundColor: "transparent", height: 300, width: 250 }}
        cover={<ProjectImage backgroundImage={backgroundImage} />}
      />
    </CardWrapper>
  );
};
export const TitleComponent = ({ text }) => (
  <DivContainer>
    <ColDiv />
    <Title>{text}</Title>
  </DivContainer>
);
export default Project;

export const Container = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-scrollbar-button: none;
  background-image: url("assets/images/background2.jpg");
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
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100vh;

  @media (max-width: 790px) {
    flex-direction: row;
  }
`;

export const ProjectImage = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  width: 300px;
  height: 300px;
  @media (max-width: 1500px) {
    width: 200px;
    height: 280px;
  }
  @media (max-width: 977px) {
    width: 200px;
    height: 280px;
  }
  @media (max-width: 790px) {
    width: 200px;
    height: 280px;
  }
`;
const CardWrapper = styled.div`
  &:nth-of-type(even) {
    position: relative;
    top: 2rem;
  }
`;

export const DivContainer = styled.div`
  width: 250px;
  height: 100px;
  @media (max-width: 977px) {
    width: 250px;
  }
  @media (max-width: 790px) {
    font-size: 13px;
    width: 300px;
    height: 20px;
  }
`;
export const ColDiv = styled.div`
  background-color: #003b57;
  width: 250px;
  height: 20px;
`;

export const Title = styled.p`
  color: #000000;
  font-family: "Scalter-SerifCondSlant";
  font-size: 25px;
  @media (max-width: 977px) {
    font-size: 16px;
  }
  @media (max-width: 790px) {
    font-size: 14px;
  }
`;
