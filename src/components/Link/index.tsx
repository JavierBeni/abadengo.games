import React from "react";
import { StyledLink } from "./styles";
import { isValidHref } from "../../utils/validators";

interface LinkProps {
    disabled?: boolean;
    href: string;
    icon?: React.ReactNode;
    label?: string;
  }

const Link: React.FC<LinkProps> = ({ label, href, disabled = false, icon }) => {
    const validHref = !disabled && isValidHref(href) ? href : undefined;
    
    return (
      <StyledLink href={validHref} disabled={disabled}>
        {icon && <span>{icon}</span>}
        {label}
      </StyledLink>
    );
  };
  
  export default React.memo(Link);