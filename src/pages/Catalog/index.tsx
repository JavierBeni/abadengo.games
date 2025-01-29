import React from 'react';

import { CatalogContainer } from './styles';
import Card from '../../components/Card';
import { mockProducts } from '../../data/data';

const Catalog: React.FC = () => {
  const handleAddToCart = (productId: number) => {
    console.log(`Producto ${productId} añadido al carrito.`);
  };

  return (
    <CatalogContainer>
      {mockProducts.map((product) => (
        <Card
          key={product.id}
          title={product.name}
          image={product.image}
          price={product.price}
          description={product.description}
          onAddToCart={() => handleAddToCart(product.id)}
          detailLink={`/products/${product.id}`}
        />
      ))}
    </CatalogContainer>
  );
};

export default Catalog;
