import styled from "styled-components";
import { getColor } from '../../theme';

export const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
;
  & > button {
    background-color: ${() => getColor('darkprimary')};
    border: none;
    min-height: 25px;
    font-size: 1.5rem;
  }
`;

export const DropdownButton = styled.button`
  margin-top: 5px;
  width: 100%;
  border: none;
  background-color: ${() => getColor('darkprimary')};
  border: 1px solid ${() => getColor('darkprimary')};
  transition: border 0.5s, color 0.5s;
  border-radius: 5px;
  padding: 10px;

  &:hover {
    background-color: ${() => getColor('primary')};
    color: ${() => getColor('white')};
  }
  &.active {
    border: 1px solid ${() => getColor('secondary')};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    color: white;
  }
`;

export const DropdownMenu = styled.div<{ orientation: string | undefined }>`
  position: absolute;
  background: ${() => getColor('darkprimary')};
  border: 1px solid ${() => getColor('primary')};
  border-radius: 5px;
  margin-top: 5px;
  padding: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  top: ${({orientation}) => orientation === 'down' ? "100%" : null};
  bottom: ${({orientation}) => orientation === 'up' ? "100%" : null};
`;
