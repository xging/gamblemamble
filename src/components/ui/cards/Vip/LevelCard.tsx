import React, { useMemo } from "react";
import "../Cards.style.scss";
import { LevelCardContent } from "./LevelCardContent";
import { Slider } from "../../slider/Slider";
import { getShuffledColorClasses } from "../../../../utils/shuffleColors";
import type { LevelCardProps } from "../../../../types/VipCard.types";

export const LevelCard: React.FC<LevelCardProps> = ({ dataList }) => {
  const bgColors = useMemo(() => getShuffledColorClasses("bg-color"), []);

  return (
    <Slider cardname="vip">
      {dataList.map(
        (
          {
            title,
            level,
            currentSP,
            maxSP,
            rewardSP,
            rewardFS,
            isLocked,
            lvlBadgeImg,
          },
          idx
        ) => {
          const badge = lvlBadgeImg?.[0];
          const bgColor = bgColors[idx % bgColors.length];

          return (
            <LevelCardContent
              key={idx}
              title={title}
              level={level}
              currentSP={currentSP}
              maxSP={maxSP}
              rewardSP={rewardSP}
              rewardFS={rewardFS}
              isLocked={isLocked}
              lvlBadgeImg={badge}
              bgColorClass={bgColor}
            />
          );
        }
      )}
    </Slider>
  );
};
