import ImageCarousel from '../../components/Carrusel';
import { ImageBG, Main, ImageCarouselWrapper } from './styles';
import bg_home from '../../assets/bg-home.webp';
import sv01 from '../../assets/pokemon-tcg/sets/sv01-logo-2x.webp';
import sv02 from '../../assets/pokemon-tcg/sets/sv02-header-logo-2x.webp';
import sv03 from '../../assets/pokemon-tcg/sets/sv03-header-logo-2x.webp';
import sv04 from '../../assets/pokemon-tcg/sets/sv04-logo-cmyk-2x.webp';
import sv05 from '../../assets/pokemon-tcg/sets/sv04pt5-logo-2x.webp';
import sv06 from '../../assets/pokemon-tcg/sets/sv5-logo-2x.webp';
import sv07 from '../../assets/pokemon-tcg/sets/sv6-logo-2x.webp';
import sv08 from '../../assets/pokemon-tcg/sets/sv6pt5-logo-2x.webp';
import sv09 from '../../assets/pokemon-tcg/sets/sv7-logo-2x.webp';
import sv10 from '../../assets/pokemon-tcg/sets/sv8-logo-2x.webp';
import sv11 from '../../assets/pokemon-tcg/sets/sv8pt5-logo-2x.webp';
import sv151 from '../../assets/pokemon-tcg/sets/151.webp';
import { useMediaDevices } from '../../hooks';

// import Button from '../../components/Button';

const Home: React.FC = () => {
  const { mediaIsPhone } = useMediaDevices();
  return (
    <Main>
      {!mediaIsPhone ? <ImageBG src={bg_home} alt="Overlay"/> : null}
      <h1>Welcome to Abadengo Games</h1>
      <h2>BY and FOR collectors</h2>
      <ImageCarouselWrapper>
        <ImageCarousel images={[sv01,sv02,sv03,sv04,sv05,sv06,sv07,sv151,sv08,sv09,sv10,sv11]} autoplay slidesToShow={mediaIsPhone ? 1 : 3} noArrows />
      </ImageCarouselWrapper>
    </Main>
  );
}

export default Home;
