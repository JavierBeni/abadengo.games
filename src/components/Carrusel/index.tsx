import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SliderWrapper } from "./styles";

type ImageCarouselProps = {
  images: string[];
  autoplay?: boolean;
  slidesToShow?: number;
  noArrows?: boolean;
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, autoplay = false, slidesToShow = 1, noArrows = false }) => {
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
  console.log('images', images);
  return (
    <SliderWrapper>
      {images.length > 1 ?
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index}>
              <img src={src} alt={`Slide ${index}`} style={{ width: "90%", borderRadius: "10px", margin: "auto" }} />
            </div>
          ))}
        </Slider> :
        <img src={images[0]} alt={`Slide`} style={{ width: "90%", borderRadius: "10px", margin: "auto" }} />
      }
    </SliderWrapper>
    
  );
};

export default ImageCarousel;
