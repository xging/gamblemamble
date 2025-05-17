import React from "react";
import type { RecomendedProps } from "../../../../types/RecomendedCard.types";
import "./Recomended.style.scss";
import { RecomendedContent } from "./RecomendedContent";
import { Slider } from "../../slider/Slider";

export const Recomended: React.FC<RecomendedProps> = ({ dataList }) => {
  return (
    <Slider cardname="recomended">
      {dataList.map(({ gameCover, title, players }, index) => {
        const image = gameCover?.[0];
        return (
          <RecomendedContent
            coverImg={image}
            title={title}
            players={players}
            key={index}
          />
        );
      })}
    </Slider>
  );
};
