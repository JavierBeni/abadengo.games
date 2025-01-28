import styled from 'styled-components';

export const StyledHeader = styled.header`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #222;
  color: white;
`;

export const UserIcon = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
`;

export const MenuOptions = styled.nav`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: white;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;