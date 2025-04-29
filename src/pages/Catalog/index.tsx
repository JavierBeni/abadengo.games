import { CatalogContainer, CatalogWrapper } from './styles';
import { ItemProps } from '../../data/data';
import { REACT_APP_URL_BE } from '../../data/constants';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import NoProducts from '../../components/NoProducts';
import React, { useEffect, useState } from 'react';
// import Dropdown from "../../components/Dropdown";

const Catalog: React.FC = () => {

  const handleAddToCart = (productId: number) => {
    console.log(`Producto ${productId} añadido al carrito.`);
  };
  const params = useParams();
  const [products, setProducts] = useState<ItemProps[]>();
  const [productsShown, setProductsShown] = useState<ItemProps[]>();
  // const [sets, setSets] = useState<string[]>([]);
  // const [filterSet, setFilterSet] = useState<string>("-");
  
  useEffect(() => {
    axios.get(`${REACT_APP_URL_BE}products/${params.game}/available`)  // Asumiendo que el backend corre en localhost:5000
      .then(response => {
        setProducts(response.data);
        setProductsShown(response.data);
        // setSets(["-", ...new Set<string>(response.data.map((p:ItemProps) => p.set))]);
      })
      .catch(error => {
        console.error('🔴 Error when we try to GET the products:', error);
      });
  }, [params]);


  // useEffect(() => 
  //   filterSet === '-' ?
  //     setProductsShown(products) :
  //     setProductsShown(products?.filter(s => s.set === filterSet))
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // , [filterSet]);

  return (
    <CatalogWrapper>
      {/* <Dropdown button={<>{filterSet}</>} elements={sets.map(s => {return {action: () => setFilterSet(s), label: s}})} /> */}
      <CatalogContainer className={products === undefined ? "loading" : ""}>   
        {productsShown === undefined && <Loading />}
        {productsShown && productsShown.length === 0 && <NoProducts />}
        {productsShown?.map((product) => (
          <Card
            key={product._id}
            title={product.name}
            image={product?.image[0]}
            price={product.price}
            status={product.status}
            description={product.description}
            onAddToCart={() => handleAddToCart(product.id)}
            detailLink={`/product/${product.game}/${product._id}`}
          />
        ))}
      </CatalogContainer>
    </CatalogWrapper>
  );
};

export default Catalog;
