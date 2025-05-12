import React from "react";
import firegif from "@/assets/fireanimated.gif";
import snowflake from "@/assets/snowflake.gif";
import type { SlotsListProps } from "../../../../../types/TabbedCard.types";

export const SlotsList: React.FC<SlotsListProps> = ({ data = [] }) => {
  return (
    <>
      {data.map(({ slotTitle, slotImage, percent, type }, index) => {
        const image = slotImage?.[0];
        const isCold = type === "COLD";
        const icon = isCold ? snowflake : firegif;
        const iconAlt = isCold ? "snowflake" : "fire";

        return (
          <div key={`${slotTitle}-${index}`} className="tabbed-card__card">
            {image && (
              <img
                src={image.src}
                alt={image.alt || slotTitle}
                className="tabbed-card__image"
              />
            )}
            <div className="tabbed-card__info">
              <h3 className="tabbed-card__title">{slotTitle}</h3>
            </div>
            <div className="tabbed-card__percentage">
              <span className="tabbed-card__percentage--icon">
                <img src={icon} alt={iconAlt} />
              </span>
              <span>{percent}%</span>
            </div>
          </div>
        );
      })}
    </>
  );
};
