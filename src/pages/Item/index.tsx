import { useParams } from "react-router";
import Button from "../../components/Button"; // Reutilizamos el botón que ya creaste
import { useStore } from "../../store";
import { ItemDetailsWrapper, ItemImage, ItemInfo, ItemName, ItemPrice, ItemDescription } from "./styles";
import { mockProducts } from '../../data/data';


const ItemDetails: React.FC = () => {

  const params = useParams();
  const item = mockProducts.find(x => x.id === Number(params.id));

  const addToCart = useStore((state) => state.addItem);
  const handleAddToCart = () => {
    addToCart({ name: "item?.name", price: 1, id: 1 }); // Adaptar según la estructura del carrito
  };

  return (
    <ItemDetailsWrapper>
      <ItemImage src={item?.image} alt={item?.name} />
      <ItemInfo>
        <ItemName>{item?.name}</ItemName>
        <ItemPrice>{item?.price.toFixed(2)}zl</ItemPrice>
        <ItemDescription>{item?.description}</ItemDescription>
        <Button label="Add to Cart" action={handleAddToCart} />
      </ItemInfo>
    </ItemDetailsWrapper>
  );
};

export default ItemDetails;