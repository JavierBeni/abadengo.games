import styled from 'styled-components';

export const StyledHeader = styled.header`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.darkprimaryt};
  color: white;
  position: fixed;
  width: 100%;
  left: 0;
  box-sizing: border-box;
  z-index: 1;
`;

export const IconWrapper = styled.div`
  font-size: 1.5rem;
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

export const UserWrapper = styled.div`
  display: flex;
  gap: 20px;
`;