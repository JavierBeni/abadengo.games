import React, { useCallback } from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  action?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  label?: string;
  children?: React.ReactNode;
  active?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  action, 
  disabled = false, 
  icon, 
  children, 
  active = false 
}) => {
  const buttonClass = active ? "active" : undefined;

  const handleClick = useCallback(() => {
    if (action && typeof action === "function" && !disabled) {
      try {
        action();
      } catch (error) {
        console.error("Error executing button action:", error);
      }
    }
  }, [action, disabled]);

  return (
    <StyledButton 
      onClick={handleClick} 
      disabled={disabled} 
      className={buttonClass}
      type="button"
    >
      {children || (
        <>
          {icon && <span>{icon}</span>}
          {label}
        </>
      )}
    </StyledButton>
  );
};

export default React.memo(Button);