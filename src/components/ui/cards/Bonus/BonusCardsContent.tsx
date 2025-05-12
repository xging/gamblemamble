import React from "react";
import { GlaredButton } from "../../buttons/GlaredButton";
import type { BonusContentCardsProps } from "../../../../types/BonusCard.types";

export const BonusCardsContent: React.FC<BonusContentCardsProps> = ({
  Img,
  title,
  description,
  type,
  textColorClass,
  bgColorClass,
}) => {
  const buttonColor = type === "tournament" ? "white" : "purple";
  const altText = Img?.alt || title || "Bonus image";

  return (
    <>
      {Img?.src && (
        <img src={Img.src} alt={altText} className="swiper-slide__img" />
      )}

      <div className={`swiper-slide__content ${bgColorClass}`}>
        <h4 className={`swiper-slide__title ${textColorClass}`}>{title}</h4>
        <p className="swiper-slide__text">{description}</p>
        <GlaredButton text="FIND OUT MORE" color={buttonColor} />
      </div>
    </>
  );
};
