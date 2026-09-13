import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  overflow-y: auto;
  margin: 10vh 3%;
  @media (max-width: 800px) {
    margin: 10vh 0;
  }
`;