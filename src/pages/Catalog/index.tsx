import { CatalogContainer, CatalogWrapper } from './styles';
import { ItemProps } from '../../data/data';
import { REACT_APP_URL_BE } from '../../data/constants';
import { useParams } from 'react-router-dom';
import { useMediaDevices } from "../../hooks";
import axios from 'axios';
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import NoProducts from '../../components/NoProducts';
import React, { useEffect, useState } from 'react';
import Filters from '../../components/Filters';
// import Dropdown from "../../components/Dropdown";

const Catalog: React.FC = () => {

  const handleAddToCart = (productId: number) => {
    console.log(`Producto ${productId} añadido al carrito.`);
  };
  const params = useParams();
  const { mediaIsPhone } = useMediaDevices();
  const [products, setProducts] = useState<ItemProps[]>();
  const [productsShown, setProductsShown] = useState<ItemProps[]>();
  const [sets, setSets] = useState<string[]>([]);
  const [types, setTypes] = useState<string[]>([]);
  const [filterSet, setFilterSet] = useState<string>("All");
  const [filterType, setFilterType] = useState<string>("All");
  
  useEffect(() => {
    axios.get(`${REACT_APP_URL_BE}products/${params.game}/available`)  // Asumiendo que el backend corre en localhost:5000
      .then(response => {
        setProducts(response.data);
        setProductsShown(response.data);
        setSets(["All", ...new Set<string>(response.data.map((p:ItemProps) => p.set))]);
        setTypes(["All", ...new Set<string>(response.data.map((p:ItemProps) => p.type))]);
      })
      .catch(error => {
        console.error('🔴 Error when we try to GET the products:', error);
      });
  }, [params]);


  useEffect(() => {
    if (filterSet === 'All' && filterType === 'All') setProductsShown(products);
    if (filterType !== 'All') setProductsShown(products?.filter(p => p.type === filterType));
    if (filterSet !== 'All') setProductsShown(products?.filter(p => p.set === filterSet));
  }
  , [filterSet, filterType, products]);

  return (
    <CatalogWrapper>
      {/* <Dropdown button={<>{filterSet}</>} elements={sets.map(s => {return {action: () => setFilterSet(s), label: s}})} /> */}
      {!mediaIsPhone && <Filters sets={sets} types={types} setFilterSet={setFilterSet} setFilterType={setFilterType}/>} 
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
