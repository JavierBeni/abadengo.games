import React, { useEffect, useState } from 'react';
import { CatalogContainer, CatalogLayout } from './styles';
import Card from '../../components/Card';
import Filters from '../../components/Filters';
import NoProducts from '../../components/NoProducts';
import Loading from '../../components/Loading';
import axios from 'axios';
import { ItemProps } from '../../data/data';
import { REACT_APP_URL_BE } from '../../data/constants';
import { useParams } from 'react-router-dom';
import useMediaDevices from '../../hooks/useMediaDevices';

const Catalog: React.FC = () => {
  const params = useParams();
  const { mediaIsPhone } = useMediaDevices();
  const [products, setProducts] = useState<ItemProps[]>();
  const [productsShown, setProductsShown] = useState<ItemProps[]>();
  const [games, setGames] = useState<string[]>([]);
  const [sets, setSets] = useState<string[]>([]);
  const [types, setTypes] = useState<string[]>([]);
  const [filterGame, setFilterGame] = useState<string>("All");
  const [filterSet, setFilterSet] = useState<string>("All");
  const [filterType, setFilterType] = useState<string>("All");
  
  useEffect(() => {
    axios.get(`${REACT_APP_URL_BE}products/all/available`)
      .then(response => {
        setProducts(response.data);
        setProductsShown(response.data);
        setGames(["All", ...new Set<string>(response.data.map((p:ItemProps) => p.game))]);
        setSets(["All", ...new Set<string>(response.data.map((p:ItemProps) => p.set))]);
        setTypes(["All", ...new Set<string>(response.data.map((p:ItemProps) => p.type))]);
      })
      .catch(error => {
        console.error('🔴 Error when we try to GET the products:', error);
      });
  }, [params]);


  useEffect(() => {
    let filtered = products;
    if (filterGame !== 'All') filtered = filtered?.filter(p => p.game === filterGame);
    if (filterSet !== 'All') filtered = filtered?.filter(p => p.set === filterSet);
    if (filterType !== 'All') filtered = filtered?.filter(p => p.type === filterType);
    setProductsShown(filtered);
  }
  , [filterGame, filterSet, filterType, products]);

  return (
    <CatalogLayout>
      {!mediaIsPhone && <Filters games={games} sets={sets} types={types} setFilterGame={setFilterGame} setFilterSet={setFilterSet} setFilterType={setFilterType}/>}
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
            // onAddToCart={() => handleAddToCart(product.id)}
            detailLink={`/product/${product.game}/${product._id}`}
          />
        ))}
      </CatalogContainer>
    </CatalogLayout>
  );
};

export default Catalog;
