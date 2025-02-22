import styled from 'styled-components';
import { getColor } from '../../theme';

export const StyledButton = styled.button`
  display: inline-block;
  padding: 10px 15px;
  background-color: ${({ disabled }) => (disabled ? '#ccc' : getColor('primary'))};
  color: ${({ disabled }) => (disabled ? '#666' : '#fff')};
  border: 0px;
  border-radius: 8px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  text-align: center;
  transition: background-color 0.5s, color 0.5s;
  width: fit-content;
  
  &:hover {
    background-color: ${({ disabled }) => disabled ? '#ccc' : getColor('secondary')};
    color: ${({ disabled }) => disabled ? 'white' : "black"};
  }
  &:focus {
    outline: none;
  }
  &.active {
    border: 1px solid ${() => getColor('secondary')};
  }
`;