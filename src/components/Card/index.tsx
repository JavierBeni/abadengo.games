import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { CardContainer, Title, Price, Actions, Image, PriceSeparator } from "./styles";
import React from "react";
import { isValidImageUrl } from "../../utils/validators";

interface CardProps {
  title: string;
  image?: string;
  price: number;
  description?: string;
  status: boolean;
  onAddToCart?: () => void;
  detailLink: string;
}

const DEFAULT_IMAGE = "https://via.placeholder.com/300?text=No+Image";

const Card: React.FC<CardProps> = ({
  title,
  image,
  price,
  status,
  detailLink,
}) => {
  const navigate = useNavigate();

  const handleCardClick = useCallback(() => {
    navigate(detailLink);
  }, [detailLink, navigate]);

  const validatedImage = useMemo(() => {
    return image && isValidImageUrl(image) ? image : DEFAULT_IMAGE;
  }, [image]);

  return (
    <CardContainer onClick={handleCardClick}>
      <Title>{title}</Title>
      <Image src={validatedImage} alt={title} loading="lazy" />
      {price ? (
        <Price disabled={status}>
          {price} zl <PriceSeparator>/</PriceSeparator> {Math.ceil(price * 0.24)} €
        </Price>
      ) : null}
      <Actions>
        {/* Pendiente de implementar */}
      </Actions>
    </CardContainer>
  );
};

export default React.memo(Card);
