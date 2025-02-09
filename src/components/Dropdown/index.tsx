import React, { useState } from "react";
import { DropdownButton, DropdownContainer, DropdownMenu } from "./styles";

interface DropdownProps {
  button: React.ReactNode;
  elements: { action: () => void; label: React.ReactNode }[];
  active?: string;
  orientation?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ button, elements, active, orientation = "down"}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContainer>
      <button onClick={() => setIsOpen(!isOpen)}>{button}</button>
      {isOpen ? (
        <DropdownMenu onClick={() => setIsOpen(false)} orientation={orientation}>
          {elements.map((e, i) => 
            <DropdownButton key={i} onClick={e.action} className={active === e.label ? "active" : ""}>
              {e.label}
            </DropdownButton>)}
        </DropdownMenu>) :
        null
      }
    </DropdownContainer>
  );
};

export default Dropdown;