import React from 'react';

import { CatalogContainer } from './styles';
import Card from '../../components/Card';
import { mockProducts } from '../../data/data';
import { useParams } from 'react-router-dom';

const Catalog: React.FC = () => {
  const params = useParams();
  const items = mockProducts.filter(x => x.game === params.game);
  const handleAddToCart = (productId: number) => {
    console.log(`Producto ${productId} añadido al carrito.`);
  };

  return (
    <CatalogContainer>
      {items.map((product) => (
        <Card
          key={product.id}
          title={product.name}
          image={product.image}
          price={product.price}
          status={product.status}
          description={product.description}
          onAddToCart={() => handleAddToCart(product.id)}
          detailLink={`/products/${product.id}`}
        />
      ))}
    </CatalogContainer>
  );
};

export default Catalog;
