import React, { useState, useEffect } from 'react';
import '../App.css'
import { Container } from 'react-bootstrap';

const Slider = ({ images, interval = 3000 }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const nextIndex = (currentIndex +1) % images.length;
    setCurrentIndex(nextIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, interval);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, interval]);

  return (
    <div className="carousel">
      <Container>
        <div className="slides" style={{ transform: `translateX(-${currentIndex * 90}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={''}
          />
        ))}
      </div>

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
      </Container>
    </div>
  );
};

export default Slider;