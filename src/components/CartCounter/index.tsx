import { useCallback, useMemo } from "react";
import { useStore } from "../../store";
import { useNavigate } from "react-router-dom";
import { CartContainer, IconWrapper, CartIcon, TotalPrice } from "./styles";
import React from "react";

const CartCounter: React.FC = () => {
  const items = useStore((state) => state.cart.items);
  const total = useStore((state) => state.cart.total);
  const navigate = useNavigate();

  const handleNavigateToCart = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  const formattedPrice = useMemo(() => {
    if (typeof total !== "number" || isNaN(total)) {
      return "0.00€";
    }
    return `${total.toFixed(2)}€`;
  }, [total]);

  const cartLabel = useMemo(() => {
    return `${items.length} items in cart, total ${formattedPrice}`;
  }, [items.length, formattedPrice]);

  return (
    <CartContainer
      as="button"
      onClick={handleNavigateToCart}
      aria-label={cartLabel}
      type="button"
    >
      <IconWrapper>
        <CartIcon />
        {items.length}
      </IconWrapper>
      <TotalPrice>{formattedPrice}</TotalPrice>
    </CartContainer>
  );
};

export default React.memo(CartCounter);