import styled, { keyframes } from "styled-components";
import { Card } from "antd";

const { Meta } = Card;
function Project() {
  return (
    <Container>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </Container>
  );
}
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
