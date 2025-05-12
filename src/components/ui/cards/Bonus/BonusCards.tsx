import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../Cards.style.scss";
import { getShuffledColorClasses } from "../../../../utils/shuffleColors";
import { BonusCardsContent } from "./BonusCardsContent";
import type { BonusCardsProps } from "../../../../types/BonusCard.types";

export const BonusCards: React.FC<BonusCardsProps> = ({ dataList }) => {
  const textColors = useMemo(() => getShuffledColorClasses("text-color"), []);
  const bgColors = useMemo(() => getShuffledColorClasses("bg-color"), []);

  return (
    <Swiper
      slidesPerView="auto"
      centeredSlides
      spaceBetween={30}
      className="BonusSwiper"
    >
      {dataList.map(({ backgroundImage, title, description, type }, idx) => {
        const image = backgroundImage?.[0];
        const textColor = textColors[idx % textColors.length];
        const bgColor =
          type === "tournament"
            ? bgColors[idx % bgColors.length]
            : "bg-gradient-to-r from-white/60 to-white/30 backdrop-blur-md";

        return (
          <SwiperSlide key={`${title}-${idx}`}>
            <BonusCardsContent
              Img={image}
              title={title}
              description={String(description)}
              type={type}
              index={idx}
              textColorClass={textColor}
              bgColorClass={bgColor}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
