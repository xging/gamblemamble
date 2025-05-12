import React from "react";
import type { WinnersListProps } from "../../../../../types/TabbedCard.types";

export const WinnersList: React.FC<WinnersListProps> = ({ data = [] }) => {
  return (
    <>
      {data.map(({ user, cash, slotImage }, index) => {
        const image = slotImage?.[0];

        return (
          <div key={`${user}-${index}`} className="tabbed-card__card">
            {image && (
              <img
                src={image.src}
                alt={image.alt}
                className="tabbed-card__image"
              />
            )}
            <div className="tabbed-card__info">
              <h3 className="tabbed-card__title">{user}</h3>
              <h3 className="tabbed-card__cash">€{cash}</h3>
            </div>
          </div>
        );
      })}
    </>
  );
};
