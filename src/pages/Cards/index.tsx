import React from 'react';
import { CardsContainer } from './styles';
import { CardTable } from '../../components/CardTable';


const Cards: React.FC = () => {

  const mockData = [
    { name: "Carta 1", number: 123, expansion: "Set A", year: 2021, condition: "Mint", language: "Español", rarity: "Rare", quantity: 2, price: 10, comments: "Buen estado" },
    { name: "Carta 2", number: 456, expansion: "Set B", year: 2020, condition: "Near Mint", language: "Inglés", rarity: "Common", quantity: 1, price: 5, comments: "" },
    { name: "Carta 3", number: 789, expansion: "Set C", year: 2022, condition: "Played", language: "Francés", rarity: "Ultra Rare", quantity: 3, price: 15, comments: "Edición limitada" },
    { name: "Carta 4", number: 2, expansion: "Set v", year: 2025, condition: "Played", language: "Inglés", rarity: "Ultra Rare", quantity: 3, price: 15, comments: "Edición limitada" },
    { name: "Carta 5", number: 3321, expansion: "Set q", year: 2002, condition: "Played", language: "Inglés", rarity: "Rare", quantity: 3, price: 15, comments: "Edición limitada" },
    { name: "Carta 6", number: 76, expansion: "Set e", year: 2027, condition: "Played", language: "Francés", rarity: "Ultra Rare", quantity: 3, price: 15, comments: "Edición limitada" },
  ];

  return (
    <CardsContainer>
      <CardTable data={mockData} />
    </CardsContainer>
  );
};

export default Cards;
