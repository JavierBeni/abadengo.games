import { useParams } from "react-router-dom";
// import Button from "../../components/Button"; // Reutilizamos el botón que ya creaste
// import { useStore } from "../../store";
import {
  ItemDetailsWrapper,
  ItemGallery,
  ItemInfo,
  ItemName,
  ItemPrice,
  ItemDescription,
  ItemEyebrow,
  ItemMeta,
  Availability,
  DetailSection,
} from "./styles";
import { ItemProps } from '../../data/data';
import axios from "axios";
import { useEffect, useState } from "react";
import ImageCarousel from "../../components/Carrusel";
import { REACT_APP_URL_BE } from "../../data/constants";


const ItemDetails: React.FC = () => {
  
  const { game, id } = useParams<{ game: string; id: string }>();

  const [product, setProduct] = useState<ItemProps>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (!game || !id) return;

    axios.get(`${REACT_APP_URL_BE}product/${game}/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('🔴 Error when we try to GET the products:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [game, id]);

  // const addToCart = useStore((state) => state.addItem);
  // const handleAddToCart = () => {
  //   addToCart({ name: "item?.name", price: 1, id: 1 }); // Adaptar según la estructura del carrito
  // };

  return (
    <ItemDetailsWrapper>
      {isLoading ? (
        <ItemInfo>Loading product...</ItemInfo>
      ) : product ? (
        <>
          <ItemGallery>
            <ImageCarousel
              slides={product.image.map((image, index) => ({
                image,
                id: `${product._id}-${index}`,
              }))}
            />
          </ItemGallery>
          <ItemInfo>
            <ItemEyebrow>{product.game} / {product.set}</ItemEyebrow>
            <ItemName>{product.name}</ItemName>
            <Availability available={product.status}>
              {product.status ? "Available now" : "Currently unavailable"}
            </Availability>
            <ItemMeta>
              <span>Collection</span>
              <strong>{product.set}</strong>
            </ItemMeta>
            <DetailSection>
              <ItemEyebrow>About this item</ItemEyebrow>
              <ItemDescription>{product.description}</ItemDescription>
            </DetailSection>
            {product.comment && (
              <DetailSection>
                <ItemEyebrow>Seller note</ItemEyebrow>
                <ItemDescription>{product.comment}</ItemDescription>
              </DetailSection>
            )}
            <ItemPrice available={product.status}>
              <span>Price</span>
              {product.price.toFixed(2)} <small>zl</small>
            </ItemPrice>
          </ItemInfo>
        </>
      ) : (
        <ItemInfo>We couldn't find this product.</ItemInfo>
      )}
    </ItemDetailsWrapper>
  );
};

export default ItemDetails;