import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/slideshow.module.css';

const Slideshow = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const timeoutRef = useRef(null);
  const interval = 80000;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const startProgress = () => {
    let startTime = Date.now();
    const progressInterval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const percentage = (elapsedTime / interval) * 100;
      setProgress(percentage);
      if (percentage >= 100) {
        clearInterval(progressInterval);
      }
    }, 100);

    return progressInterval;
  };

  useEffect(() => {
    resetTimeout();
    const slideInterval = setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, interval);

    const progressInterval = startProgress();

    timeoutRef.current = slideInterval;

    return () => {
      resetTimeout();
      clearInterval(progressInterval);
    };
  }, [currentSlide, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
    setProgress(0);
  };

  return (
    <div className={styles.slideshow}>
      {slides.map((slide, index) => (
        <div
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          key={index}
        >
          {slide}
        </div>
      ))}
      <button className={styles.prev} onClick={prevSlide}>
        &#10094;
      </button>
      <button className={styles.next} onClick={nextSlide}>
        &#10095;
      </button>
      <div className={styles.progressBar}>
        <div className={styles.progress} style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default Slideshow;
