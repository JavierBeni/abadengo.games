import React from 'react';
import { LogoImage, LogoLink } from './styles';

interface LogoProps {
  src: string; // URL de la imagen del logo
  href?: string; // URL para redirigir (opcional)
  alt?: string; // Texto alternativo para la imagen
}

const Logo: React.FC<LogoProps> = ({ src, href, alt = 'Logo' }) => {
  return href ? (
    <LogoLink href={href}>
      <LogoImage src={src} alt={alt} />
    </LogoLink>
  ) : (
    <LogoImage src={src} alt={alt} />
  );
};

export default Logo;
