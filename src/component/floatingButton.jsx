import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { GITHUB, NOTION } from "../const/data";
const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <ButtonWrapper>
      {isOpen && (
        <>
          <GitHubButton onClick={() => window.open(GITHUB, "_blank")} />
          <NotionButton onClick={() => window.open(NOTION, "_blank")} />
        </>
      )}{" "}
      <MainButton onClick={toggle}>
        <FontAwesomeIcon icon={isOpen ? faXmark : faUser} />
      </MainButton>
    </ButtonWrapper>
  );
};

export default FloatingButton;

const ButtonWrapper = styled.div`
  position: fixed;
  z-index: 200;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const MainButton = styled.button`
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #25252599;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;

const GitHubButton = styled.button`
  right: 6px;
  position: relative;
  background-image: url("assets/logos/whitegithub.png");
  background-size: 35px;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #000000d6;
  color: white;
  font-size: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const NotionButton = styled(GitHubButton)`
  background-image: url("assets/logos/notion.png");
  background-size: 30px;
  margin-bottom: 20px;
`;
