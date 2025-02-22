import { StyledButton } from "./styles";

interface ButtonProps {
    action?: () => void;
    disabled?: boolean;
    icon?: React.ReactNode;
    label?: string;
    children?: React.ReactNode;
    active?: boolean;
  }
  
  const Button: React.FC<ButtonProps> = ({ label, action, disabled = false, icon, children, active }) => {
    return (
    <StyledButton onClick={action} disabled={disabled} className={active ? "active" : ""}>
      {children ? 
        children :
        <> {icon && <span>{icon}</span>} {label} </>
      }
    </StyledButton>)
  };
  
  export default Button;