'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Slide {
  id: number;
  imageUrl: string;
  departmentName: string;
}

const slides: Slide[] = [
  {
    id: 1,
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1780121826546-1MKqEJsdGmigIqCBqtjj0FrUDpQgAY.jpg',
    departmentName: 'Stitching Department',
  },
  {
    id: 2,
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1780121950497-HoiFqLdyzFCXTHDpJxPc0pRwmUtshU.jpg',
    departmentName: 'Cutting Department',
  },
  {
    id: 3,
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1780122991560-o1MycnOe5CqEIZ9lxjZJF3etijdlUn.jpg',
    departmentName: 'Company Founder',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [visibleWords, setVisibleWords] = useState(0);

  // Word-by-word typewriter effect for the active slide's department name
  useEffect(() => {
    setVisibleWords(0);
    const totalWords = slides[currentSlide].departmentName.split(' ').length;
    const interval = setInterval(() => {
      setVisibleWords((prev) => {
        if (prev >= totalWords) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 450);

    return () => clearInterval(interval);
  }, [currentSlide]);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  return (
    <div className="w-full bg-white">
      <div className="relative w-full overflow-hidden bg-white">
        {/* Slider Container */}
        <div className="relative w-full h-96 sm:h-[500px] md:h-[600px] lg:h-[700px] bg-white">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              } bg-white`}
            >
              {/* Image */}
              <img
                src={slide.imageUrl}
                alt={slide.departmentName}
                className="w-full h-full object-contain bg-white"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Text Label */}
              <div className="absolute inset-0 flex items-end justify-start">
                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-xl text-left px-6 pb-16 sm:pb-20">
                  {slide.departmentName.split(' ').map((word, wordIndex) => (
                    <span
                      key={wordIndex}
                      className={`inline-block mr-3 transition-all duration-500 ${
                        index === currentSlide && wordIndex < visibleWords
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-3'
                      }`}
                    >
                      {word}
                    </span>
                  ))}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-1.5 sm:p-2 rounded-full transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
        </button>

        {/* Next Button */}
        <button
          onClick={goToNextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-1.5 sm:p-2 rounded-full transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide
                  ? 'bg-white'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
