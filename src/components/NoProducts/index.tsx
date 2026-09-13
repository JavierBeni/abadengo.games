import React from 'react';
import { Gif, NoProductsWrapper } from './styles';
import psyduckgif from '../../assets/psyduck.gif';

const NoProducts: React.FC = () => {
  return (
    <NoProductsWrapper>
      <Gif className='pikas' src={psyduckgif} alt="no-products" />
      No products to show
      <Gif className='pikas' src={psyduckgif} alt="no-products" />
    </NoProductsWrapper>
  );
};

export default NoProducts;
