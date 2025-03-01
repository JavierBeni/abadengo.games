import { useParams } from "react-router";
// import Button from "../../components/Button"; // Reutilizamos el botón que ya creaste
// import { useStore } from "../../store";
import { ItemDetailsWrapper, ItemInfo, ItemName, ItemPrice, ItemDescription } from "./styles";
import { ItemProps } from '../../data/data';
import axios from "axios";
import { useEffect, useState } from "react";
import ImageCarousel from "../../components/Carrusel";
import { REACT_APP_URL_BE } from "../../data/constants";
import Loading from "../../components/Loading";


const ItemDetails: React.FC = () => {
  
  const params = useParams();
  
  const [product, setProduct] = useState<ItemProps>();
  useEffect(() => {
    axios.get(`${REACT_APP_URL_BE}products/${params.id}`)
    .then(response => {
      setProduct(response.data);
      console.log(response.data.image);
    })
    .catch(error => {
      console.error('🔴 Error when we try to GET the products:', error);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  // const addToCart = useStore((state) => state.addItem);
  // const handleAddToCart = () => {
  //   addToCart({ name: "item?.name", price: 1, id: 1 }); // Adaptar según la estructura del carrito
  // };
  
  return (
    <ItemDetailsWrapper>
    {product === undefined ? 
      <Loading /> :
      <>
        <ImageCarousel images={product?.image || []} />
        <ItemInfo>
          <ItemName>{product?.name}</ItemName>
          <ItemDescription>{product?.description}</ItemDescription>
        </ItemInfo>
        <ItemInfo>
          {product?.comment && <ItemName>Seller comment</ItemName>}
          {product?.comment && <ItemDescription>{product?.comment}</ItemDescription>}
          <ItemPrice disabled={product ? product.status : false}>
            <ItemName>Price</ItemName>
            {product?.price.toFixed(2)}zl
          </ItemPrice>
          {/* <Button label={item?.status ? "Add to Cart" : "No stock"} action={handleAddToCart>} disabled={!item?.status}/> */}
        </ItemInfo>
      </>
    }
    </ItemDetailsWrapper>
  );
};

export default ItemDetails;