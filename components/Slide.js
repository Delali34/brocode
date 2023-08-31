import React, { useState, useEffect } from "react";

function CitySlider({ slides }) {
  const [activeSlide, setActiveSlide] = useState(0); // Default to 0
  const [prevSlide, setPrevSlide] = useState(-1);
  const [sliderReady, setSliderReady] = useState(false);
  const imageParts = 4;

  useEffect(() => {
    setSliderReady(true);
  }, []);

  const changeSlides = (change) => {
    const length = slides.length;
    const previousSlide = activeSlide;
    let nextSlide = previousSlide + change;
    if (nextSlide < 0) nextSlide = length - 1;
    if (nextSlide >= length) nextSlide = 0;
    setActiveSlide(nextSlide);
    setPrevSlide(previousSlide);
  };

  return (
    <div className={`slider ${sliderReady ? "s--ready" : ""}`}>
      <p className="slider__top-heading font-Cali">Extras</p>
      <div className="slider__slides">
        {slides.map((slide, index) => (
          <div
            className={`slider__slide ${
              activeSlide === index ? "s--active" : ""
            } ${prevSlide === index ? "s--prev" : ""}`}
            key={slide.city}
          >
            <div className="slider__slide-content">
              <h3 className="slider__slide-subheading md:text-2xl text-[16px]">
                {slide.country || slide.city}
              </h3>
              <h2 className="slider__slide-heading md:text-7xl text-4xl">
                {slide.city.split("").map((l, i) => (
                  <span key={i}>{l}</span>
                ))}
              </h2>
              <p className="slider__slide-readmore">Coming Soon</p>
            </div>
            <div className="slider__slide-parts">
              {[...Array(imageParts)].map((_, i) => (
                <div className="slider__slide-part" key={i}>
                  <div
                    className="slider__slide-part-inner"
                    style={{ backgroundImage: `url(${slide.img})` }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="slider__control" onClick={() => changeSlides(-1)} />
      <div
        className="slider__control slider__control--right"
        onClick={() => changeSlides(1)}
      />
    </div>
  );
}

export default CitySlider;
