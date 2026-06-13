import React, { useState, useRef, useCallback, useMemo } from "react";
import { DropdownButton, DropdownContainer, DropdownMenu } from "./styles";
import useClickOutside from "../../hooks/useClickOutside";
import { isValidDropdownElements } from "../../utils/validators";

interface DropdownElement {
  id: string;
  action: () => void;
  label: React.ReactNode;
}

interface DropdownProps {
  button: React.ReactNode;
  elements: DropdownElement[];
  active?: string;
  orientation?: string;
}

const DropdownComponent: React.FC<DropdownProps> = ({
  button,
  elements,
  active,
  orientation = "down",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null!);

  // Validar que elements tenga contenido y sean válidos
  const validElements = useMemo(() => {
    return isValidDropdownElements(elements) ? elements : [];
  }, [elements]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    },
    [handleClose]
  );

  useClickOutside(dropdownRef, handleClose);

  // Si no hay elementos válidos, renderizar solo el botón
  if (validElements.length === 0) {
    return <DropdownContainer ref={dropdownRef}>{button}</DropdownContainer>;
  }

  const handleElementClick = useCallback(
    (action: () => void) => {
      try {
        action();
      } catch (error) {
        console.error("Error executing dropdown action:", error);
      } finally {
        handleClose();
      }
    },
    [handleClose]
  );

  return (
    <div ref={dropdownRef}>
      <DropdownContainer>
        <button
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          aria-expanded={isOpen}
          aria-haspopup="menu"
          type="button"
        >
          {button}
        </button>
        {isOpen && (
          <DropdownMenu orientation={orientation} role="menu">
            {validElements.map((e) => (
              <DropdownButton
                key={e.id}
                onClick={() => handleElementClick(e.action)}
                className={active === e.id ? "active" : ""}
                role="menuitem"
                type="button"
              >
                {e.label}
              </DropdownButton>
            ))}
          </DropdownMenu>
        )}
      </DropdownContainer>
    </div>
  );
};

export default React.memo(DropdownComponent);