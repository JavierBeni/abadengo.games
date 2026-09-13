import styled from 'styled-components';


export const TableCell = styled.td`
  padding: 8px;
  white-space: nowrap;
`;

export const Summary = styled.div`
  margin-top: 20px;
  font-size: 16px;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const BoldText = styled.span`
  font-weight: bold;
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin: 20px 16px;
    padding: 16px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: block;
    overflow-x: auto;
  }
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-size: 1.2em;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
