import React from "react";

interface RecomendedContentProps {
  coverImg?: { src: string; alt?: string };
  title: string;
  players: number;
}

export const RecomendedContent: React.FC<RecomendedContentProps> = ({
  coverImg,
  title,
  players,
}) => {
  return (
    <div className="gamecard__card">
      {coverImg && (
        <img
          src={coverImg.src}
          alt={coverImg.alt || title}
          className="gamecard__image"
        />
      )}
      <div className="gamecard__player-count">{players}</div>
    </div>
  );
};
