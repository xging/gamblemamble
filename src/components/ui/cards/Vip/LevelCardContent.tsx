import React from "react";
import "./LevelCard.style.scss";
import shieldIcon from "@/assets/levelCard/Shield-Icon.png";
import giftIcon from "@/assets/levelCard/Gift-Icon.png";
import lockIcon from "@/assets/levelCard/Lock.png";
import type { LevelCardContentProps } from "../../../../types/VipCard.types";

export const LevelCardContent: React.FC<LevelCardContentProps> = ({
  title,
  level,
  currentSP,
  maxSP,
  rewardSP,
  rewardFS,
  lvlBadgeImg,
  bgColorClass,
  isLocked,
}) => {
  const progressPercent =
    maxSP > 0 ? Math.min((currentSP / maxSP) * 100, 100) : 0;

  return (
    <section className="level-card">
      {isLocked && (
        <div className="level-card__lock">
          <img src={lockIcon} alt="Level locked icon" />
        </div>
      )}

      <header className={`level-card__header ${bgColorClass}`}>
        {lvlBadgeImg?.src && (
          <img
            className="level-card__icon"
            src={lvlBadgeImg.src}
            alt={lvlBadgeImg.alt || `Level ${level} badge`}
          />
        )}
      </header>

      <div className="level-card__badge">
        <span className="level-card__badge-text">{title}</span>
      </div>

      <div className="level-card__progress">
        <div className="level-card__progress-label">{currentSP} SP</div>
        <div className="level-card__progress-bar">
          <div
            className="level-card__progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <div className="level-card__rewards">
        <div className="level-card__reward">
          <img
            className="level-card__reward-icon"
            src={shieldIcon}
            alt="Reward Shield Icon"
          />
          <span className="level-card__reward-value">{rewardSP} SP</span>
        </div>
        <div className="level-card__reward">
          <img
            className="level-card__reward-icon"
            src={giftIcon}
            alt="Reward Gift Icon"
          />
          <span className="level-card__reward-value">{rewardFS} FS</span>
        </div>
      </div>
    </section>
  );
};
