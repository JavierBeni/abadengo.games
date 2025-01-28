import { useStore } from "../../store";
import { CartContainer, IconWrapper, CartIcon, TotalPrice } from "./styles";

  const CartCounter: React.FC = () => {
    const items = useStore((state) => state.cart.items);
    const total = useStore((state) => state.cart.total);

    return (
      <CartContainer>
        <IconWrapper>
          <CartIcon />
          {items.length}
        </IconWrapper>
        <TotalPrice>{total.toFixed(2)}€</TotalPrice>
      </CartContainer>
    );
  };
  
  export default CartCounter;