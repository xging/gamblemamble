import React, { useRef } from "react";
import { useCarouselActiveCard } from "../../../utils/useCarouselActiveCard";
import "./Slider.style.scss";

interface CarouselProps {
  children: React.ReactNode[];
  cardname: string;
}

export const Carousel: React.FC<CarouselProps> = ({ children, cardname }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const activeIndex = useCarouselActiveCard(carouselRef);

  return (
    <div className={`carousel carousel-${cardname}`} ref={carouselRef}>
      {React.Children.map(children, (child, index) => (
        <div className={`card ${index === activeIndex ? "active" : ""}`}>
          {child}
        </div>
      ))}
    </div>
  );
};
