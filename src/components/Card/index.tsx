import Button from "../Button";
import Link from "../Link";
import { CardContainer, Title, Price, Description, Actions, Image } from "./styles";

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
    description,
    onAddToCart,
    detailLink,
  }) => {
    return (
      <CardContainer>
        <Title>{title}</Title>
        <Image src={image} alt={title} />
        <Price>{price} zl</Price>
        <Description>{description}</Description>
        <Actions>
          <Button label="Add to cart" action={onAddToCart} />
          <Link label="Details" href={detailLink} />
        </Actions>
      </CardContainer>
    );
  };
  
  export default Card;