import styled from 'styled-components';

// Contenido central
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > h2,h1 {
    margin: 30px 0;
    text-align: center;
  }
  & > div {
    margin-top: 50px;
    position: relative;
    bottom: 20%;
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