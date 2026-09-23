import styled from 'styled-components';

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkprimaryt};
  color: white;
  nav {
    display: contents;
  }
`;