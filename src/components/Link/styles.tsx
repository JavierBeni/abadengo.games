import styled from 'styled-components';
import { getColor } from '../../theme';

 export const StyledLink = styled.a<{ disabled?: boolean }>`
  border: 1px solid ${({ disabled }) => (disabled ? '#ccc' : getColor('primary'))}; 
  border-radius: 8px;
  padding: 8px 20px;
  font-size: 1rem;
  color: ${({ disabled }) => (disabled ? '#aaa' : getColor('primary'))};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: border-color 0.5s, color 0.5s; /* Transiciones */
  text-decoration: none !important;

  &:hover {
    border-color: ${({ disabled }) => (disabled ? '#ccc' : getColor('secondary'))};
    color: white;
    filter: drop-shadow(.1em .1em black);
    /* mix-blend-mode: difference; */
  }
`;