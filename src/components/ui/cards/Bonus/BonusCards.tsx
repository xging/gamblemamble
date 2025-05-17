import React, { useMemo } from "react";
import "./BonusCards.style.scss";
import { getShuffledColorClasses } from "../../../../utils/shuffleColors";
import { BonusCardsContent } from "./BonusCardsContent";
import { Slider } from "../../slider/Slider";
import { Carousel } from "../../slider/Carousel";
import type { BonusCardsProps } from "../../../../types/BonusCard.types";

export const BonusCards: React.FC<BonusCardsProps> = ({
  dataList,
  cardname,
}) => {
  const textColors = useMemo(() => getShuffledColorClasses("text-color"), []);
  const bgColors = useMemo(() => getShuffledColorClasses("bg-color"), []);

  const children = dataList.map(
    ({ backgroundImage, title, description, type }, idx) => {
      const image = backgroundImage?.[0];
      const textColor = textColors[idx % textColors.length];
      const bgColor =
        type === "tournament"
          ? bgColors[idx % bgColors.length]
          : "bg-gradient-to-r from-white/60 to-white/30 backdrop-blur-md";

      return (
        <BonusCardsContent
          key={`${title}-${idx}`}
          Img={image}
          title={title}
          description={String(description)}
          type={type}
          index={idx}
          textColorClass={textColor}
          bgColorClass={bgColor}
        />
      );
    }
  );

  return cardname === "tournament" ? (
    <Slider cardname={cardname}>{children}</Slider>
  ) : (
    <Carousel cardname={cardname}>{children}</Carousel>
  );
};
