import styled from 'styled-components';

// Contenido central
export const Main = styled.main`
  /* flex: 1; */
  display: grid;
  height: 80vh;
  justify-content: center;
  & > h2,h1 {
    display: flex;
    justify-content: center;
  }
`;


export const ImageCarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  & > div {
    width: 360px;
    @media (min-width: ${({ theme }) => theme.media.desktop}) {
      width: 1200px;
    }
  }
`;

export const ImageBG = styled.img`
  position: absolute;
  top: 10vh;
  left: 0;
  width: 100%;
  height: 80vh;
  object-fit: fill;
  opacity: 0.1;
  pointer-events: none;
  filter: grayscale(100%);
`;