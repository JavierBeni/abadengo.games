import styled from 'styled-components';

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: -webkit-fill-available;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkprimaryt};
  color: white;
`;