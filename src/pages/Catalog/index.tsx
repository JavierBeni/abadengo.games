import React from 'react';

import { CatalogContainer } from './styles';
import Card from '../../components/Card';
import etb from '../../assets/ETB-prismatic-evoluc.png'

const mockProducts = [
  {
    id: 1,
    title: 'Producto 1',
    image: etb,
    price: 25.95,
    description: 'Este es el producto 1.',
  },
  {
    id: 2,
    title: 'Producto 2',
    image: etb,
    price: 30.95,
    description: 'Este es el producto 2.',
  },
  {
    id: 3,
    title: 'Producto 3',
    image: etb,
    price: 20.95,
    description: 'Este es el producto 3.',
  },
  {
    id: 4,
    title: 'Producto 4',
    image: etb,
    price: 50.95,
    description: 'Este es el producto 4.',
  },
  {
    id: 5,
    title: 'Producto 5',
    image: etb,
    price: 15.95,
    description: 'Este es el producto 5.',
  },
  {
    id: 6,
    title: 'Producto 6',
    image: etb,
    price: 45.95,
    description: 'Este es el producto 6.',
  },
  {
    id: 7,
    title: 'Producto 7',
    image: etb,
    price: 60.95,
    description: 'Este es el producto 7.',
  },
];

const Catalog: React.FC = () => {
  const handleAddToCart = (productId: number) => {
    console.log(`Producto ${productId} añadido al carrito.`);
  };

  return (
    <CatalogContainer>
      {mockProducts.map((product) => (
        <Card
          key={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          description={product.description}
          onAddToCart={() => handleAddToCart(product.id)}
          detailLink={`/productos/${product.id}`}
        />
      ))}
    </CatalogContainer>
  );
};

export default Catalog;
