import { StyledLink } from "./styles";

interface LinkProps {
    disabled?: boolean;
    href: string;
    icon?: React.ReactNode;
    label?: string;
  }

const Link: React.FC<LinkProps> = ({ label, href, disabled = false, icon }) => {
    return (
      <StyledLink href={disabled ? undefined : href} disabled={disabled}>
        {icon && <span>{icon}</span>}
        {label}
      </StyledLink>
    );
  };
  
  export default Link;