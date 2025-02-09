import { useParams } from "react-router";
import Button from "../../components/Button"; // Reutilizamos el botón que ya creaste
import { useStore } from "../../store";
import { ItemDetailsWrapper, ItemImage, ItemInfo, ItemName, ItemPrice, ItemDescription } from "./styles";
import { mockProducts } from '../../data/data';
import ImageCarousel from "../../components/Carrusel";


const ItemDetails: React.FC = () => {

  const params = useParams();
  const item = mockProducts.find(x => x.id === Number(params.id));

  const addToCart = useStore((state) => state.addItem);
  const handleAddToCart = () => {
    addToCart({ name: "item?.name", price: 1, id: 1 }); // Adaptar según la estructura del carrito
  };

  const images = [
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/id/227/200/300",
    "https://picsum.photos/id/217/200/300",
  ];

  return (
    <ItemDetailsWrapper>
      <ImageCarousel images={images} />
      {/* <ItemImage src={item?.image} alt={item?.name} /> */}
      <ItemInfo>
        <ItemName>{item?.name}</ItemName>
        <ItemDescription>{item?.description}</ItemDescription>
      </ItemInfo>
      {item?.comment && <ItemInfo>
        <ItemName>Seller comment:</ItemName>
        <ItemDescription>{item?.comment}</ItemDescription>
      </ItemInfo>}
      <ItemInfo>
        <ItemPrice disabled={item ? item.status : false}>{item?.price.toFixed(2)}zl</ItemPrice>
        <Button label={item?.status ? "Add to Cart" : "No stock"} action={handleAddToCart} disabled={!item?.status}/>
      </ItemInfo>
    </ItemDetailsWrapper>
  );
};

export default ItemDetails;