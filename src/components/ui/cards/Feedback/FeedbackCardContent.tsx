import React from "react";
import "./Feedback.style.scss";
import ratingStar from "@/assets/feedback/Star.png";
import logo from "@/assets/feedback/XLogo.png";
import { highlightMentions } from "../../../../utils/highlightMentions";
import type { FeedbackContentProps } from "../../../../types/FeedbackCard.types";

export const FeedbackCardContent: React.FC<FeedbackContentProps> = ({
  username,
  att,
  avatar,
  rate,
  date,
  text,
}) => {
  const avatarSrc = avatar?.src || "";
  const avatarAlt = avatar?.alt || `Avatar of ${username}`;
  const highlightedText = highlightMentions(text);

  return (
    <div className="feedback-card">
      <div className="feedback-card__header">
        <div className="feedback-card__info">
          <img
            className="feedback-card__avatar"
            src={avatarSrc}
            alt={avatarAlt}
          />
          <div className="feedback-card__details">
            <div className="feedback-card__name">{att}</div>
            <div className="feedback-card__username">@{username}</div>
          </div>
        </div>
        <img className="feedback-card__logo" src={logo} alt="Platform logo" />
      </div>

      {rate > 0 && (
        <div className="feedback-card__stars">
          {Array.from({ length: rate }).map((_, idx) => (
            <img
              key={idx}
              src={ratingStar}
              alt="rating star"
              className="w-4 h-4 inline-block"
            />
          ))}
        </div>
      )}

      <p className="feedback-card__text">{highlightedText}</p>

      <div className="feedback-card__date">{date}</div>
    </div>
  );
};
