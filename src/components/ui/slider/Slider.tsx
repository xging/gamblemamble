import React from "react";
import "./Slider.style.scss";

interface SliderProps {
  children: React.ReactNode;
  cardname: string;
}

export const Slider: React.FC<SliderProps> = ({ children, cardname }) => {
  return <div className={`swiper-grid-snap snap-${cardname}`}>{children}</div>;
};
