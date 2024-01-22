import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

function SwiperImage({ bgArr }) {
  const [slideIndex, setSlideIndex] = useState(1);

  const slideRef = useRef(null);

  const BG_NUM = bgArr.length;
  const beforeSlide = bgArr[BG_NUM - 1];
  const afterSlide = bgArr[0];

  let slideArr = [beforeSlide, ...bgArr, afterSlide];
  const SLIDE_NUM = slideArr.length;

  const InfiniteSlideHandler = (flytoIndex) => {
    setTimeout(() => {
      if (slideRef.current) {
        slideRef.current.style.transition = "";
      }
      setSlideIndex(flytoIndex);
      setTimeout(() => {
        if (slideRef.current) {
          slideRef.current.style.transition = "all 500ms ease-in-out";
        }
      }, 100);
    }, 500);
  };

  if (slideIndex === SLIDE_NUM - 1) {
    InfiniteSlideHandler(1);
  }

  if (slideIndex === 0) {
    InfiniteSlideHandler(BG_NUM);
  }

  const slideHandler = (direction) => {
    setSlideIndex((prev) => prev + direction);
  };

  return (
    <>
      {" "}
      <SlideComponent>
        <SlideBtn onClick={() => slideHandler(-1)}>
          <FontAwesomeIcon icon={faChevronLeft} size="4x" />
        </SlideBtn>
        <SlideBtn onClick={() => slideHandler(+1)}>
          <FontAwesomeIcon icon={faChevronRight} size="4x" />
        </SlideBtn>
      </SlideComponent>
      <ImgContainer
        ref={slideRef}
        style={{
          width: `${100 * SLIDE_NUM}vw`,
          transition: "all 500ms ease-in-out",
          transform: `translateX(${
            -1 * ((100 / slideArr.length) * slideIndex)
          }%)`,
        }}
      >
        {slideArr.map((item, index) => (
          <ImgBox key={index}>
            <img src={item.img} />
          </ImgBox>
        ))}
      </ImgContainer>
    </>
  );
}

export default SwiperImage;

const SlideBtn = styled.div`
  z-index: 100;
  padding: 10px;
  display: flex;
  color: #acacac;
  &:hover {
    color: #686868;
  }
`;
const SlideComponent = styled.div`
  position: absolute;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ImgContainer = styled.div`
  display: flex;
  overflow: hidden;
`;

const ImgBox = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  object-position: center;
  object-fit: cover;
  overflow: hidden;
  img {
    height: 40vw;
    width: 30vw;
  }
`;
