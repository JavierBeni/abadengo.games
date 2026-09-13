import styled from 'styled-components';

// Contenido central
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  min-height: 100%;
  width: 100%;
  position: relative;
  gap: 20px;

  & > h1 {
    margin: 20px 0 0 0;
  }

  & > h2 {
    margin: 0 0 20px 0;
  }

  @media (max-width: 800px) {
    padding: 0;
    gap: 10px;
    width: 100%;
    & > h1 {
      margin: 20px 10px 0 10px;
      text-align: center;
    }

    & > h2 {
      margin: 0 10px 20px;
      text-align: center;
    }
  }
`;


export const ImageCarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  overflow: hidden;

  & > div {
    @media (min-width: ${({ theme }) => theme.media.desktop}) {
      width: auto;
    }
  }
`;

export const ImageBG = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  opacity: 0.15;
  pointer-events: none;
  filter: grayscale(100%);
  z-index: -1;
`;