import React, { useState, useEffect } from 'react';
import "../styles/imageSlider.css"

const images = [
    {img:"https://images.pexels.com/photos/745499/pexels-photo-745499.png", key:1},
    {img:"https://images.pexels.com/photos/12914836/pexels-photo-12914836.jpeg?auto=compress&cs=tinysrgb&w=1600", key:2},
    {img:"https://images.pexels.com/photos/1551440/pexels-photo-1551440.png?auto=compress&cs=tinysrgb&w=1600", key:3}
]

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(intervalId);
  }, [currentIndex, images]);

  return (
    <div className='imageSliderContainer'>
      <img className='imageSliderImage' src={images[currentIndex].img} alt="" />
    </div>
  );
}

export default ImageSlider;