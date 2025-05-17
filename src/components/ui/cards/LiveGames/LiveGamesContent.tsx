import React from "react";

interface LiveGamesContentProps {
  coverImg?: { src: string; alt?: string };
  title: string;
  stream: string;
  location: string;
  bgColor: string;
}

export const LiveGamesContent: React.FC<LiveGamesContentProps> = ({
  coverImg,
  title,
  stream,
  location,
  bgColor,
}) => {
  return (
    <div className="livegames__card">
      {coverImg && (
        <img
          src={coverImg.src}
          alt={coverImg.alt || title || "Live Game"}
          className="livegames__image"
        />
      )}
      <div className="livegames__indicator" />
      <div className={`livegames__content ${bgColor}`}>
        <p className="livegames__title">{title}</p>
        <p className="livegames__status">{stream}</p>
        <p className="livegames__location">{location}</p>
      </div>
    </div>
  );
};
