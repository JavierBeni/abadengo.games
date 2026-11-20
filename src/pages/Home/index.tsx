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
import fairytail from '../../assets/fairytail.webp';
import azuki from '../../assets/azuki.webp';

import { useMediaDevices } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import Catalog from '../Catalog';
import { useTranslation } from 'react-i18next';
import Seo from '../../components/Seo';
import { localizedPath } from '../../utils/localizedRoutes';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { mediaIsPhone } = useMediaDevices();
  const navigate = useNavigate();
  const slides = [
    {image: one_piece, action: () => navigate(localizedPath("/catalog/onepiece", i18n.language))},
    {image: pokemon, action: () => navigate(localizedPath("/catalog/pokemon", i18n.language))},
    {image: lorcana, action: () => navigate(localizedPath("/catalog/lorcana", i18n.language))},
    {image: riftbound, action: () => navigate(localizedPath("/catalog/riftbound", i18n.language))},
    {image: dragon_ball, action: () => navigate(localizedPath("/catalog/dragonball", i18n.language))},
    {image: naruto, action: () => navigate(localizedPath("/catalog/naruto", i18n.language))},
    {image: azuki, action: () => navigate(localizedPath("/catalog/azuki", i18n.language))},
    {image: fairytail, action: () => navigate(localizedPath("/catalog/fairytail", i18n.language))}
  ];

  return (
    <>
      <Seo title={t('seoHomeTitle')} description={t('seoHomeDescription')} />
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
