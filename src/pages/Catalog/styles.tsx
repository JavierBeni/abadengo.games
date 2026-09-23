import styled from 'styled-components';

export const CatalogLayout = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 30px;
  gap: 30px;

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 0 16px;
  }
`;

export const CatalogContainer = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  & * {
    overflow-y: hidden;
  }
  
  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  &.loading {
    display: block;
  }
  & > div {
    display: flex;
    justify-content: space-between;
    overflow-y: hidden;
    > .pikas {
      height: 2rem;
      margin: 0 30px;  
    }
  }
`;

export const CatalogWrapper = styled.div`
  display: flex;
  margin: 20px;
`;
