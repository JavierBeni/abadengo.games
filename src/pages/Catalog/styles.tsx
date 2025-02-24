
import styled from 'styled-components';

export const CatalogContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 800px) {
    justify-content: center;
    padding: 5px;
  }
  &.loading {
    display: block;
  }
  & > div {
    display: flex;
    justify-content: center;
    > .pikas {
      height: 2rem;
      margin: 0 30px;  
    }
  }
`;
