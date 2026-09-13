import React from 'react';
import ImageCarousel from '../../components/Carrusel';
import { ImageBG, Main, ImageCarouselWrapper } from './styles';
import bg_home from '../../assets/bg-home.webp';
import one_piece from '../../assets/one_piece.webp';
import lorcana from '../../assets/lorcana.webp';
import pokemon from '../../assets/pokemon_tcg.webp';
import riftbound from '../../assets/riftbound.webp';
import dragon_ball from '../../assets/dragon_ball.webp';
import naruto from '../../assets/naruto.webp';

import { useMediaDevices } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import Catalog from '../Catalog';

const Home: React.FC = () => {
  const { mediaIsPhone } = useMediaDevices();
  const navigate = useNavigate();

  const slides = [
    {image: one_piece, action: () => navigate("/catalog/onepiece")},
    {image: pokemon, action: () => navigate("/catalog/pokemon")},
    {image: lorcana, action: () => navigate("/catalog/lorcana")},
    {image: riftbound, action: () => navigate("/catalog/riftbound")},
    {image: dragon_ball, action: () => navigate("/catalog/dragonball")},
    {image: naruto, action: () => navigate("/catalog/naruto")},
  ];

  return (
    <>
      {!mediaIsPhone ? <ImageBG src={bg_home} alt="Overlay"/> : null}
      <Main>
        <h1>Welcome to Abadengo Games</h1>
        <h2>BY and FOR collectors</h2>
        <ImageCarouselWrapper>
          <ImageCarousel slides={slides} autoplay slidesToShow={mediaIsPhone ? 1 : 4} noArrows />
        </ImageCarouselWrapper>
        <Catalog />
      </Main>
    </>
  );
}

export default Home;
