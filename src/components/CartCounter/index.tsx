import { useCallback, useMemo } from "react";
import { useStore } from "../../store";
import { useNavigate } from "react-router-dom";
import { CartContainer, IconWrapper, CartIcon, TotalPrice } from "./styles";
import React from "react";
import { useTranslation } from "react-i18next";
import { localizedPath } from "../../utils/localizedRoutes";

const CartCounter: React.FC = () => {
  const items = useStore((state) => state.cart.items);
  const total = useStore((state) => state.cart.total);
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const handleNavigateToCart = useCallback(() => {
    navigate(localizedPath("/cart", i18n.language));
  }, [i18n.language, navigate]);

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