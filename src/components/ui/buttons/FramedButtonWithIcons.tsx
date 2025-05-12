import React from "react";

import type { FramedButtonWithIconsProps } from "../../../types/Buttons.types";
export const FramedButtonWithIcons: React.FC<FramedButtonWithIconsProps> = ({
  text,
  scheme = "purple",
  icon,
  className = "",
  ...props
}) => {
  return (
    <div className={`framed-button-icons-wrapper ${className}`}>
      <button
        type="button"
        className={`framed-button-icons framed-button--${scheme}`}
        {...props}
      >
        {icon && <span className="framed-button-icons__icon">{icon}</span>}
      </button>
      {text && <span className="framed-button-icons__label">{text}</span>}
    </div>
  );
};
