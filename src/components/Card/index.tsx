import { truncateText } from "../../utils";
import Button from "../Button";
import Link from "../Link";
import { CardContainer, Title, Price, Actions, Image } from "./styles";

interface CardProps {
    title: string;
    image: string; // URL de la imagen
    price: number; // Precio del producto
    description: string; // Descripción del producto
    onAddToCart: () => void; // Acción para añadir al carrito
    detailLink: string; // URL para más detalles
  }
  
const Card: React.FC<CardProps> = ({
    title,
    image,
    price,
    onAddToCart,
    detailLink,
  }) => {
    return (
      <CardContainer>
        <Title>{truncateText(title, 25)}</Title>
        <Image src={image} alt={title} />
        {price ? <Price>{price} zl</Price> : null}
        {/* {description ? <Description>{description}</Description> : null} */}
        <Actions>
          <Button label="Add to cart" action={onAddToCart} />
          <Link label="Details" href={detailLink} />
        </Actions>
      </CardContainer>
    );
  };
  
  export default Card;