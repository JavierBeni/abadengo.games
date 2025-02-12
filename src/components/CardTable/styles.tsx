
import styled from 'styled-components';
import { getColor } from '../../theme';

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    padding: 10px;
    border: 1px solid ${() => getColor('secondary')};
    text-align: left;
  }

  th {
    background: ${() => getColor('darkprimaryt')};
    color: ${() => getColor('lightsecondary')};
    cursor: pointer;
  }

  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    gap: 10px;
  }
`;
