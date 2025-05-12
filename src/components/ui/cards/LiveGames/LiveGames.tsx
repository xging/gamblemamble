import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { getShuffledColorClasses } from "../../../../utils/shuffleColors";
import type { LiveGamesProps } from "../../../../types/LiveGamesCard.types";
import "./LiveGames.style.scss";

export const LiveGames: React.FC<LiveGamesProps> = ({ dataList }) => {
  const bgColors = useMemo(() => getShuffledColorClasses("bg-color"), []);

  return (
    <Swiper slidesPerView={3} spaceBetween={10} className="livegames">
      {dataList.map(({ title, coverimg, stream, location }, idx) => {
        const image = coverimg?.[0];
        const bgColor = bgColors[idx % bgColors.length];
        const alt = image?.alt || title || "Live Game";

        return (
          <SwiperSlide key={title || idx} className="swiper-slide">
            {image && (
              <img src={image.src} alt={alt} className="swiper-slide__img" />
            )}
            <div className="swiper-slide__indicator" />
            <div className={`swiper-slide__content ${bgColor}`}>
              <p className="swiper-slide__title">{title}</p>
              <p className="swiper-slide__status-text">{stream}</p>
              <p className="swiper-slide__text">{location}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
