import React from "react";
import "./Jackpot.style.scss";
import chest from "@/assets/jackpotchest.png";

export const JackpotCard: React.FC = () => {
  const jackpotAmount = "$320 594";
  const jackpotLabel = "Current Jackpot";
  const altText = "Safe with coins";

  return (
    <div className="jackpot-card">
      <div className="jackpot-card__info">
        <p className="jackpot-card__info-label">{jackpotLabel}</p>
        <p className="jackpot-card__info-amount">{jackpotAmount}</p>
      </div>
      <div className="jackpot-card__icon">
        <img src={chest} alt={altText} />
      </div>
    </div>
  );
};
