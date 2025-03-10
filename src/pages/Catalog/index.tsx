import { CatalogContainer } from './styles';
import { ItemProps } from '../../data/data';
import { REACT_APP_URL_BE } from '../../data/constants';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import NoProducts from '../../components/NoProducts';
import React, { useEffect, useState } from 'react';

const Catalog: React.FC = () => {

  const handleAddToCart = (productId: number) => {
    console.log(`Producto ${productId} añadido al carrito.`);
  };
  const params = useParams();
  const [products, setProducts] = useState<ItemProps[]>();
  
  useEffect(() => {
    axios.get(`${REACT_APP_URL_BE}products/${params.game}/available`)  // Asumiendo que el backend corre en localhost:5000
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('🔴 Error when we try to GET the products:', error);
      });
  }, [params]);

  return (
    <CatalogContainer className={products === undefined ? "loading" : ""}>   
      {products === undefined && <Loading />}
      {products && products.length === 0 && <NoProducts />}
      {products?.map((product) => (
        <Card
          key={product.id}
          title={product.name}
          image={product?.image[0]}
          price={product.price}
          status={product.status}
          description={product.description}
          onAddToCart={() => handleAddToCart(product.id)}
          detailLink={`/products/${product._id}`}
        />
      ))}
    </CatalogContainer>
  );
};

export default Catalog;
