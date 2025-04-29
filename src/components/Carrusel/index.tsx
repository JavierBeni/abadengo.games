import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SliderWrapper } from "./styles";

type SlideProps = {
  image: string;
  action?: () => void;
};

type ImageCarouselProps = {
  slides: SlideProps[];
  autoplay?: boolean;
  slidesToShow?: number;
  noArrows?: boolean;
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({ slides, autoplay = false, slidesToShow = 1, noArrows = false }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 3000,
    arrows: !noArrows,
  };

  return (
    <SliderWrapper>
      {slides.length > 1 ?
        <Slider {...settings}>
          {slides.map((sld, index) => (
            <div key={index} onClick={sld.action}>
              <img src={sld.image} alt={`Slide ${index}`} style={{ width: "90%", borderRadius: "10px", margin: "auto" }} />
            </div>
          ))}
        </Slider> :
        <img src={slides[0].image} alt={`Slide`} style={{ width: "90%", borderRadius: "10px", margin: "auto" }} />
      }
    </SliderWrapper>
    
  );
};

export default ImageCarousel;
