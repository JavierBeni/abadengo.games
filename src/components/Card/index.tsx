import { useTranslation } from "react-i18next";
import { truncateText } from "../../utils";
// import Button from "../Button";
import Link from "../Link";
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
    const { t } = useTranslation();
    return (
      <CardContainer>
        <Title>{truncateText(title, 22)}</Title>
        <Image src={image} alt={title} />
        {price ? <Price disabled={status}>{price} zl</Price> : null}
        {/* {description ? <Description>{description}</Description> : null} */}
        <Actions>
          {/* <Button label={status ? t("buttonInStock") : t("buttonNoStock")} action={onAddToCart} disabled={!status}/> */}
          <Link label={t("buttonInStock")} href={detailLink} />
        </Actions>
      </CardContainer>
    );
  };
  
  export default Card;