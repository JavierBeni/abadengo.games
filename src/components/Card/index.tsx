// import Button from "../Button";
// import Link from "../Link";
import { useNavigate  } from "react-router-dom";
import { CardContainer, Title, Price, Actions, Image } from "./styles";

interface CardProps {
    title: string;
    image?: string;
    price: number;
    description: string;
    status: boolean;
    onAddToCart: () => void;
    detailLink: string;
  }
  
const Card: React.FC<CardProps> = ({
    title,
    image,
    price,
    status,
    // onAddToCart,
    detailLink,
  }) => {
    const navigate = useNavigate();
    return (
      <CardContainer onClick={() => navigate(detailLink)}>
        <Title>{title}</Title>
        <Image src={image} alt={title} />
        {price ? <Price disabled={status}>{price} zl / {Math.ceil(price * 0.24)} €</Price> : null}
        {/* {description ? <Description>{description}</Description> : null} */}
        <Actions>
          {/* <Button label={status ? t("buttonInStock") : t("buttonNoStock")} action={onAddToCart} disabled={!status}/> */}
          {/* <Link label={t("linkDetails")} href={detailLink} /> */}
        </Actions>
      </CardContainer>
    );
  };
  
  export default Card;