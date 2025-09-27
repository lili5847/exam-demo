import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cat1 from "../img/Cat1.png";
import Cat2 from "../img/Cat2.png";
import Cat3 from "../img/Cat3.png";

const CategoryHome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate(); // Hook for navigation
  
  const slides = [
    {
      id: 1,
      title: 'Cute Cat 1',
      image: Cat1,
      description: 'Adorable feline companion',
      buttonText: 'Shop Now',
      path: '/shop' // Path to navigate to
    },
    {
      id: 2,
      title: 'Cute Cat 2',
      image: Cat2,
      description: 'Playful and curious',
      buttonText: 'Shop Now',
      path: '/shop' // Path to navigate to
    },
    {
      id: 3,
      title: 'Cute Cat 3',
      image: Cat3,
      description: 'Elegant and graceful',
      buttonText: 'Shop Now',
      path: '/shop' // Path to navigate to
    }
  ];

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToNext = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const goToPrev = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  // Function to handle navigation
  const handleShopClick = (path) => {
    navigate(path);
  };

  return (
    <div className="my-10 mx-auto max-w-6xl px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Featured Cats</h2>
      
      <div className="relative overflow-hidden rounded-xl shadow-lg">
        {/* Carousel container */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <div className="bg-gradient-to-r from-amber-100 to-pink-100 flex flex-col md:flex-row items-center p-6 md:p-10">
                {/* Image section */}
                <div className="md:w-1/2 flex justify-center">
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="w-full max-w-md h-auto object-contain rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                
                {/* Content section */}
                <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0 md:pl-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">{slide.title}</h3>
                  <p className="text-gray-600 mb-5">{slide.description}</p>
                  <button 
                    onClick={() => handleShopClick(slide.path)} // Add onClick handler
                    type="button" 
                    className="bg-amber-400 hover:bg-amber-500 text-gray-800 font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation arrows */}
        <button 
          onClick={goToPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-md transition-all duration-300"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-md transition-all duration-300"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-amber-500 scale-125' : 'bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryHome;