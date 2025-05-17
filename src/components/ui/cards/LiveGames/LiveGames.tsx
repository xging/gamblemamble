import React, { useMemo } from "react";
import { getShuffledColorClasses } from "../../../../utils/shuffleColors";
import { LiveGamesContent } from "./LiveGamesContent";
import { Slider } from "../../slider/Slider";
import type { LiveGamesProps } from "../../../../types/LiveGamesCard.types";
import "./LiveGames.style.scss";

export const LiveGames: React.FC<LiveGamesProps> = ({ dataList }) => {
  const bgColors = useMemo(() => getShuffledColorClasses("bg-color"), []);

  return (
    <Slider cardname="livegames">
      {dataList.map(({ title, coverimg, stream, location }, index) => {
        const image = coverimg?.[0];
        const bgColor = bgColors[index % bgColors.length];

        return (
          <LiveGamesContent
            bgColor={bgColor}
            stream={stream}
            location={location}
            title={title}
            coverImg={image}
            key={index}
          />
        );
      })}
    </Slider>
  );
};
