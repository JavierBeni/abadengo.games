import styled from "styled-components";

export const SliderWrapper = styled.div`
  width: 100%;
  min-width: 0;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div:not(.slick-slider) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .slick-track {
    display: flex;
    align-items: center;
  }

  & .slick-slider,
  & .slick-list {
    width: 100%;
    min-width: 0;
  }

  & img {
    width: 100%;
    height: 220px;
    object-fit: contain;
    object-position: center;
    display: block;
    margin: 0 auto;
  }

  & .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    height: 220px;
  }

  & .slick-dots {
    bottom: -40px;
  }

  @media (max-width: 768px) {
    & .slick-slide {
      height: 190px;
    }

    & img {
      height: 140px;
    }
  }
`;