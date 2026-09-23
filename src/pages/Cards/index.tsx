import React, { useEffect, useState } from 'react';
import { CardsContainer } from './styles';
import { CardTable } from '../../components/CardTable';
import axios from 'axios';
import { REACT_APP_URL_BE } from '../../data/constants';
import { CardProps } from '../../data/data';


const Cards: React.FC = () => {

  // const mockData = [
  //   { name: "Carta 1", number: 123, expansion: "Set A", year: 2021, condition: "Mint", language: "Español", rarity: "Rare", quantity: 2, price: 10, comments: "Buen estado" },
  //   { name: "Carta 2", number: 456, expansion: "Set B", year: 2020, condition: "Near Mint", language: "Inglés", rarity: "Common", quantity: 1, price: 5, comments: "" },
  //   { name: "Carta 3", number: 789, expansion: "Set C", year: 2022, condition: "Played", language: "Francés", rarity: "Ultra Rare", quantity: 3, price: 15, comments: "Edición limitada" },
  //   { name: "Carta 4", number: 2, expansion: "Set v", year: 2025, condition: "Played", language: "Inglés", rarity: "Ultra Rare", quantity: 3, price: 15, comments: "Edición limitada" },
  //   { name: "Carta 5", number: 3321, expansion: "Set q", year: 2002, condition: "Played", language: "Inglés", rarity: "Rare", quantity: 3, price: 15, comments: "Edición limitada" },
  //   { name: "Carta 6", number: 76, expansion: "Set e", year: 2027, condition: "Played", language: "Francés", rarity: "Ultra Rare", quantity: 3, price: 15, comments: "Edición limitada" },
  // ];
  const [cards, setCards] = useState<CardProps[]>([]);

  useEffect(() => {

    axios.get(`${REACT_APP_URL_BE}cards/available`)  // Asumiendo que el backend corre en localhost:5000
      .then(response => {
        setCards(response.data);
      })
      .catch(error => {
        console.error('🔴 Error when we try to GET the products:', error);
      });
  }, []);

  return (
    <CardsContainer>
      <CardTable data={cards} />
    </CardsContainer>
  );
};

export default Cards;
