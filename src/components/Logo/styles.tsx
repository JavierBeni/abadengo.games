import styled from 'styled-components';


export const LogoImage = styled.img`
  height: 50px; /* Ajusta la altura según tus necesidades */
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1); /* Efecto de zoom al pasar el mouse */
  }
`;

export const LogoLink = styled.a`
  display: inline-block;
  text-decoration: none;
`;
