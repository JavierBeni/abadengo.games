import React, { useEffect, useState } from 'react';

import { CatalogContainer } from './styles';
import Card from '../../components/Card';
import { mockProducts } from '../../data/data';
// import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ItemProps } from '../../data/data';

const Catalog: React.FC = () => {
  // const params = useParams();
  // const items = mockProducts.find(x => x.id === params.game);
  const URL_BE = process.env.REACT_APP_URL_BE;
  const handleAddToCart = (productId: number) => {
    console.log(`Producto ${productId} añadido al carrito.`);
  };
  const [products, setProducts] = useState<ItemProps[]>([])
  useEffect(() => {
    axios.get(`${URL_BE}products/available`)  // Asumiendo que el backend corre en localhost:5000
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error when we try to GET the products:', error);
      });
  }, []);

  return (
    <CatalogContainer>
      {/* {items.map((product) => (
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
      ))} */}
      {products.map((product) => (
        <Card
          key={product.id}
          title={product.name}
          image={mockProducts.find(p => p.id === product.id)?.image}
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
