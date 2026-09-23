import styled from 'styled-components';

export const FiltersWrapper = styled.div`
  min-width: 200px;
  border: 1px solid ${({ theme }) => theme.colors.lightsecondary};
  padding: 0 10px 10px 10px;
  border-radius: 8px;
  height: fit-content;
  .filteroption {
    padding: 2px 10px;
    margin: 3px 0;
    border: 1px solid ${({ theme }) => theme.colors.darksecondary};
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.darksecondary};
    transition: color 0.3s;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.lightsecondary}
    }

    &.selected {
      color: ${({ theme }) => theme.colors.white}
    }
  }
`;
