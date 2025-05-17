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
    <div className="bonuscard__card">
      {Img?.src && (
        <img src={Img.src} alt={altText} className="bonuscard__img" />
      )}

      <div className={`bonuscard__content ${bgColorClass}`}>
        <h4 className={`bonuscard__title ${textColorClass}`}>{title}</h4>
        <p className="bonuscard__description">{description}</p>
        <GlaredButton text="FIND OUT MORE" color={buttonColor} />
      </div>
    </div>
  );
};
