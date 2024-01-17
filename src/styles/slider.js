import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

const SlideBtn = styled.div`
  z-index: 100;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SlideRBtn = styled.div`
  z-index: 100;
  top: 50;
  left: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgContainer = styled.div`
  display: flex;
  overflow: hidden;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  img {
    width: 500px;
    height: 500px;
    object-fit: cover;
  }
`;

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
      {/* <SlideBtn onClick={() => slideHandler(-1)}>
        <FontAwesomeIcon icon={faChevronLeft} size="4x" />
      </SlideBtn> */}
      <SlideRBtn onClick={() => slideHandler(+1)}>
        <FontAwesomeIcon icon={faChevronRight} size="4x" />
      </SlideRBtn>
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
