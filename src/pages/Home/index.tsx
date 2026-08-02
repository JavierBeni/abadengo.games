import React, { useEffect, useState } from 'react';
import ImageCarousel from '../../components/Carrusel';
import { ImageBG, Main, ImageCarouselWrapper, ProductsSection } from './styles';
import bg_home from '../../assets/bg-home.webp';
import one_piece from '../../assets/one_piece.webp';
import lorcana from '../../assets/lorcana.webp';
import pokemon from '../../assets/pokemon_tcg.webp';
import riftbound from '../../assets/riftbound.webp';
import dragon_ball from '../../assets/dragon_ball.webp';
import naruto from '../../assets/naruto.webp';

import { useMediaDevices } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import axios from 'axios';
import { ItemProps } from '../../data/data';
import { REACT_APP_URL_BE } from '../../data/constants';

const Home: React.FC = () => {
  const { mediaIsPhone } = useMediaDevices();
  const navigate = useNavigate();
  const [products, setProducts] = useState<ItemProps[]>();
  const [loading, setLoading] = useState(true);

  const slides = [
    {image: one_piece, action: () => navigate("/catalog/onepiece")},
    {image: pokemon, action: () => navigate("/catalog/pokemon")},
    {image: lorcana, action: () => navigate("/catalog/lorcana")},
    {image: riftbound, action: () => navigate("/catalog/riftbound")},
    {image: dragon_ball, action: () => navigate("/catalog/dragonball")},
    {image: naruto, action: () => navigate("/catalog/naruto")},
  ];

  useEffect(() => {
    setLoading(true);
    axios.get(`${REACT_APP_URL_BE}products/all/available`)
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('🔴 Error when we try to GET the products:', error);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (productId: number) => {
    console.log(`Producto ${productId} añadido al carrito.`);
  };

  return (
    <>
      {!mediaIsPhone ? <ImageBG src={bg_home} alt="Overlay"/> : null}
      <Main>
        <h1>Welcome to Abadengo Games</h1>
        <h2>BY and FOR collectors</h2>
        <ImageCarouselWrapper>
          <ImageCarousel slides={slides} autoplay slidesToShow={4} noArrows />
        </ImageCarouselWrapper>
        <ProductsSection>
          {loading && <Loading />}
          {!loading && products && products.length === 0 && <p>No products found</p>}
          {products?.map((product) => (
            <Card
              key={product._id}
              title={product.name}
              image={product?.image[0]}
              price={product.price}
              status={product.status}
              description={product.description}
              // onAddToCart={() => handleAddToCart(product._id)}
              detailLink={`/product/${product.game}/${product._id}`}
            />
          ))}
        </ProductsSection>
      </Main>
    </>
  );
}

export default Home;
