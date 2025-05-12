import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";
import type { GameRowProps } from "../../../../types/RecomendedCard.types";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./GameRowSwiper.style.scss";

export const GameRowSwiper: React.FC<GameRowProps> = ({ dataList }) => {
  return (
    <div className="game-row-swiper">
      <Swiper
        modules={[Grid]}
        slidesPerView={3}
        grid={{ rows: 2 }}
        spaceBetween={10}
        loop={true}
        className="game-row-swiper__container"
      >
        {dataList.map(({ gameCover, title, players }, index) => {
          const image = gameCover?.[0];

          return (
            <SwiperSlide
              key={`${title}-${index}`}
              className="game-row-swiper__slide"
            >
              <div className="game-row-swiper__card">
                {image && (
                  <img
                    src={image.src}
                    alt={image.alt || title}
                    className="game-row-swiper__image"
                  />
                )}
                <div className="game-row-swiper__player-count">{players}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
