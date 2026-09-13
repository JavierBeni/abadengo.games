import React, { useEffect, useState } from 'react';
import { CatalogContainer, CatalogLayout } from './styles';
import Card from '../../components/Card';
import Filters from '../../components/Filters';
import NoProducts from '../../components/NoProducts';
import axios from 'axios';
import { ItemProps } from '../../data/data';
import Loading from '../../components/Loading';
import { REACT_APP_URL_BE } from '../../data/constants';
import { useParams } from 'react-router-dom';
import useMediaDevices from '../../hooks/useMediaDevices';

const Catalog: React.FC = () => {

  const handleAddToCart = (productId: number) => {
    console.log(`Producto ${productId} añadido al carrito.`);
  };
  const params = useParams();
  const { mediaIsPhone } = useMediaDevices();
  const [products, setProducts] = useState<ItemProps[]>();
  const [productsShown, setProductsShown] = useState<ItemProps[]>();
  const [games, setGames] = useState<string[]>([]);
  const [sets, setSets] = useState<(string | { set: string; game: string })[]>([]);
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
        
        // Crear array de sets con información de game
        const setsWithGame = Array.from(
          new Map(
            response.data.map((p: ItemProps) => [
              p.set,
              { set: p.set, game: p.game }
            ])
          ).values()
        ) as { set: string; game: string }[];
        
        setSets(["All", ...setsWithGame]);
        setTypes(["All", ...new Set<string>(response.data.map((p:ItemProps) => p.type))]);
      })
      .catch(error => {
        console.error('🔴 Error when we try to GET the products:', error);
      });
  }, [params]);


  useEffect(() => {
    if (filterSet === 'All' && filterType === 'All' && filterGame === 'All') setProductsShown(products);
    if (filterType !== 'All') setProductsShown(products?.filter(p => p.type === filterType));
    const filterSetValue = typeof filterSet === 'string' ? filterSet : (filterSet as any).set;
    if (filterSetValue !== 'All') setProductsShown(products?.filter(p => p.set === filterSetValue));
    if (filterGame !== 'All') setProductsShown(products?.filter(p => p.game === filterGame));
  }
  , [filterSet, filterType, products]);

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
