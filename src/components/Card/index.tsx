import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardContainer, Title, Price, Actions, Image, PriceSeparator } from "./styles";
import React from "react";
import { isValidImageUrl } from "../../utils/validators";
import { truncateText } from "../../utils";

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
  const [eurRate, setEurRate] = useState(4.3);
  const navigate = useNavigate();

  const handleCardClick = useCallback(() => {
    navigate(detailLink);
  }, [detailLink, navigate]);

  const validatedImage = useMemo(() => {
    return image && isValidImageUrl(image) ? image : DEFAULT_IMAGE;
  }, [image]);

  useEffect(() => {
    const fetchEuroRate = async () => {
      try {
        const response = await fetch('https://nbp.pl');
        if (!response.ok) 
          throw new Error(`Error en la petición: ${response.status}`);
        const data = await response.json();
        const midRate = data.rates[0].mid;
        
        setEurRate(midRate);
      } catch (err) {
        setEurRate(4.3);
      }
    };

    fetchEuroRate();
  }, []);

  return (
    <CardContainer onClick={handleCardClick}>
      <Title>{truncateText(title, 35)}</Title>
      <Image src={validatedImage} alt={title} loading="lazy" />
      {price ? (
        <Price disabled={status}>
          {price} zl <PriceSeparator>/</PriceSeparator> {Math.ceil(price * (1/eurRate))} €
        </Price>
      ) : null}
      <Actions>
        {/* Pendiente de implementar */}
      </Actions>
    </CardContainer>
  );
};

export default React.memo(Card);
