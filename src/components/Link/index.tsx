import React from "react";
import { StyledLink } from "./styles";
import { isValidHref } from "../../utils/validators";
import { useTranslation } from "react-i18next";
import { localizedPath } from "../../utils/localizedRoutes";

interface LinkProps {
    disabled?: boolean;
    href: string;
    icon?: React.ReactNode;
    label?: string;
  }

const Link: React.FC<LinkProps> = ({ label, href, disabled = false, icon }) => {
    const validHref = !disabled && isValidHref(href) ? href : undefined;
    const { i18n } = useTranslation();
    const localizedHref = validHref?.startsWith("/") && !validHref.startsWith("//")
      ? localizedPath(validHref, i18n.language)
      : validHref;
    
    return (
      <StyledLink href={localizedHref} disabled={disabled}>
        {icon && <span>{icon}</span>}
        {label}
      </StyledLink>
    );
  };
  
  export default React.memo(Link);