import { StyledButton } from "./styles";

interface ButtonProps {
    action: () => void;
    disabled?: boolean;
    icon?: React.ReactNode;
    label: string;
  }
  
  const Button: React.FC<ButtonProps> = ({ label, action, disabled = false, icon }) => {
    return (
    <StyledButton onClick={action} disabled={disabled}>
        {icon && <span>{icon}</span>}
        {label}
    </StyledButton>)
  };
  
  export default Button;