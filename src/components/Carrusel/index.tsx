import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMemo, useCallback } from "react";
import Slider from "react-slick";
import { SliderWrapper } from "./styles";
import React from "react";

type SlideProps = {
  image: string;
  id?: string;
  action?: () => void;
};

type ImageCarouselProps = {
  slides: SlideProps[];
  autoplay?: boolean;
  slidesToShow?: number;
  noArrows?: boolean;
};

const DEFAULT_SLIDER_SETTINGS = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  autoplaySpeed: 3000,
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  slides,
  autoplay = false,
  slidesToShow = 1,
  noArrows = false,
}) => {
  const settings = useMemo(
    () => ({
      ...DEFAULT_SLIDER_SETTINGS,
      slidesToShow,
      autoplay,
      arrows: !noArrows,
    }),
    [slidesToShow, autoplay, noArrows]
  );

  const handleSlideClick = useCallback(
    (action?: () => void) => {
      if (action) {
        action();
      }
    },
    []
  );

  // Validación: si slides está vacío, mostrar placeholder
  if (!slides || slides.length === 0) {
    return (
      <SliderWrapper>
        <div style={{ width: "90%", borderRadius: "10px", margin: "auto", backgroundColor: "#f0f0f0", height: "300px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <p>No slides available</p>
        </div>
      </SliderWrapper>
    );
  }

  // Si hay un solo slide
  if (slides.length === 1) {
    return (
      <SliderWrapper>
        <div onClick={() => handleSlideClick(slides[0].action)}>
          <img
            src={slides[0].image}
            alt="Single slide"
            style={{ cursor: "pointer" }}
          />
        </div>
      </SliderWrapper>
    );
  }

  // Si hay múltiples slides
  return (
    <SliderWrapper>
      <Slider {...settings}>
        {slides.map((sld, index) => (
          <div
            key={sld.id || `slide-${index}`}
            onClick={() => handleSlideClick(sld.action)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={sld.image}
              alt={sld.id || `Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </SliderWrapper>
  );
};

export default React.memo(ImageCarousel);
