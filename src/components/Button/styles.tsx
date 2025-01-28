import styled from 'styled-components';
import { getColor } from '../../theme';

export const StyledButton = styled.button`
  display: inline-block;
  padding: 10px 15px;
  background-color: ${({ disabled }) => (disabled ? '#ccc' : getColor('primary'))};
  color: ${({ disabled }) => (disabled ? '#666' : '#fff')};
  border: 0px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  text-align: center;
  transition: background-color 0.5s, color 0.5s;

  &:hover {
    background-color: ${({ disabled }) => disabled ? '#ccc' : getColor('secondary')};
    color: ${({ disabled }) => disabled ? 'white' : "black"};
  }
`;