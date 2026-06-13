import styled from "styled-components";

export const SliderWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  & .slick-track {
    display: flex;
    align-items: center;
  }

  & img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    display: block;
  }

  & .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
  }

  & .slick-dots {
    bottom: -40px;
  }
`;