import React from "react";
import { FramedButtonWithIcons } from "../buttons/FramedButtonWithIcons";
import "./Navbar.style.scss";
import { generateIconsList } from "../../../data/icon_menu";

const iconsData = generateIconsList("icons");

export const IconMenu: React.FC = () => {
  return (
    <div className="icon-scroll-wrapper">
      {iconsData.map(({ text, backgroundImage }) => {
        const image = backgroundImage?.[0];
        if (!image) return null;

        return (
          <FramedButtonWithIcons
            key={text}
            text={text}
            icon={<img src={image.src} alt={image.alt} />}
          />
        );
      })}
    </div>
  );
};
