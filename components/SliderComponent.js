import React, { useState, useRef } from "react";
import "../app/ad.css"; // Adjust the path to your actual CSS file's location

function Slide({ slide, current, handleSlideClick }) {
  const slideRef = useRef(null);

  const handleMouseMove = (event) => {
    const el = slideRef.current;
    const r = el.getBoundingClientRect();
    el.style.setProperty(
      "--x",
      event.clientX - (r.left + Math.floor(r.width / 2))
    );
    el.style.setProperty(
      "--y",
      event.clientY - (r.top + Math.floor(r.height / 2))
    );
  };

  const handleMouseLeave = () => {
    slideRef.current.style.setProperty("--x", 0);
    slideRef.current.style.setProperty("--y", 0);
  };

  const imageLoaded = (event) => {
    event.target.style.opacity = 1;
  };

  const { src, button, headline, index } = slide;
  let classNames = "slide";
  if (current === index) classNames += " slide--current";
  else if (current - 1 === index) classNames += " slide--previous";
  else if (current + 1 === index) classNames += " slide--next";

  return (
    <li
      ref={slideRef}
      className={classNames}
      onClick={() => handleSlideClick(index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slide__image-wrapper">
        <img
          className="slide__image"
          alt={headline}
          src={src}
          onLoad={imageLoaded}
        />
      </div>

      <article className="slide__content">
        <h2 className="slide__headline">{headline}</h2>
        <button className="slide__action btn">{button}</button>
      </article>
    </li>
  );
}

const SliderControl = ({ type, title, handleClick }) => {
  return (
    <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
      <svg className="icon1" viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </button>
  );
};

function Slider({ slides, heading }) {
  const [current, setCurrent] = useState(0);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (startX - endX > 50) {
      // The number 50 is arbitrary, adjust for sensitivity
      handleNextClick();
    } else if (endX - startX > 50) {
      handlePreviousClick();
    }
  };

  const handleTouchMove = (event) => {
    setEndX(event.touches[0].clientX);
  };

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const headingId = `slider1-heading__${heading
    .replace(/\s+/g, "-")
    .toLowerCase()}`;
  const wrapperTransform = {
    transform: `translateX(-${current * (100 / slides.length)}%)`,
  };

  return (
    <div className="slider1" aria-labelledby={headingId}>
      <ul
        className="slider1__wrapper"
        style={wrapperTransform}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <h3 id={headingId} className="visuallyhidden">
          {heading}
        </h3>
        {slides.map((slide) => (
          <Slide
            key={slide.index}
            slide={slide}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="slider1__controls">
        <SliderControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />

        <SliderControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}

export default Slider;
