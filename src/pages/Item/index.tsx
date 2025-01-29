import { useParams } from "react-router";
import Button from "../../components/Button"; // Reutilizamos el botón que ya creaste
import { useStore } from "../../store";
import { ItemDetailsWrapper, ItemImage, ItemInfo, ItemName, ItemPrice, ItemDescription } from "./styles";
import { mockProducts } from '../../data/data';


const ItemDetails: React.FC = () => {

  const params = useParams();
  const { name, price, description, image } = mockProducts[Number(params.id)];

  const addToCart = useStore((state) => state.addItem);
  const handleAddToCart = () => {
    addToCart({ name, price, id: 1 }); // Adaptar según la estructura del carrito
  };

  return (
    <ItemDetailsWrapper>
      <ItemImage src={image} alt={name} />
      <ItemInfo>
        <ItemName>{name}</ItemName>
        <ItemPrice>${price.toFixed(2)}</ItemPrice>
        <ItemDescription>{description}</ItemDescription>
        <Button label="Add to Cart" action={handleAddToCart} />
      </ItemInfo>
    </ItemDetailsWrapper>
  );
};

export default ItemDetails;