
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
`;
