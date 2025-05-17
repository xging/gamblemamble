import React, { useState } from "react";
import { IconMenu } from "../ui/navbar/IconMenu";
import { FeatureCard } from "../ui/cards/Feature/FeatureCard";
import { JackpotCard } from "../ui/cards/Jackpot/Jackpot";
import { BottomCard } from "../ui/cards/Bottom/BottomCard";
import { getContentCards } from "./cards.config";
import type { Variant } from "../../types/Content.types";
import "./Content.style.scss";
export const Content: React.FC = () => {
  const [iceAndFire, setIceAndFire] = useState<Variant>("fire");

  const contentCards = getContentCards(iceAndFire, setIceAndFire);

  return (
    <>
      <IconMenu />
      {contentCards.map((card, index) => {
        const { style, title, buttonText, isShowButton, children } = card;

        return (
          <React.Fragment key={`${style}-${index}`}>
            {index === 2 && <JackpotCard />}
            <FeatureCard
              style={style}
              title={title}
              buttonText={buttonText}
              isShowButton={isShowButton}
              variant={iceAndFire}
            >
              {children}
            </FeatureCard>
          </React.Fragment>
        );
      })}

      <BottomCard />
    </>
  );
};
