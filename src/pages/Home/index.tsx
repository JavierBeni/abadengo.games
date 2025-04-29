import { useNavigate  } from "react-router-dom";
import ImageCarousel from '../../components/Carrusel';
import { ImageBG, Main, ImageCarouselWrapper } from './styles';
import bg_home from '../../assets/bg-home.webp';
import one_piece from '../../assets/one_piece.webp';
import lorcana from '../../assets/lorcana.webp';
import pokemon from '../../assets/pokemon_tcg.webp';
import { useMediaDevices } from '../../hooks';

// import Button from '../../components/Button';

const Home: React.FC = () => {
  const { mediaIsPhone } = useMediaDevices();
  const navigate = useNavigate();
  const slides = [
    {image: one_piece, action: () => navigate("/catalog/onepiece")},
    {image: pokemon, action: () => navigate("/catalog/pokemon")},
    {image: lorcana, action: () => navigate("/catalog/lorcana")},
  ];
  return (
    <Main>
      {!mediaIsPhone ? <ImageBG src={bg_home} alt="Overlay"/> : null}
      <h1>Welcome to Abadengo Games</h1>
      <h2>BY and FOR collectors</h2>
      <ImageCarouselWrapper>
        <ImageCarousel slides={slides} autoplay slidesToShow={mediaIsPhone ? 1 : 3} noArrows />
      </ImageCarouselWrapper>
    </Main>
  );
}

export default Home;
