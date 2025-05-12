import React from "react";
import age from "@/assets/age.png";
import crest from "@/assets/crest.png";
import type { quoteItem } from "../../../../types/BottomCard.types";

export const QuoteRow: React.FC<quoteItem> = ({ text }) => {
  return (
    <div
      className="bottom-card__quote"
      role="contentinfo"
      aria-label="Responsible gambling note"
    >
      <p className="bottom-card__quote-text">{text}</p>
      <div className="bottom-card__quote-icons">
        <img
          className="bottom-card__quote-icon"
          src={age}
          alt="18+ Age restriction"
          loading="lazy"
        />
        <img
          className="bottom-card__quote-icon"
          src={crest}
          alt="Responsible gambling authority crest"
          loading="lazy"
        />
      </div>
    </div>
  );
};
