import React from "react";
import type { FramedButtonProps } from "../../../types/Buttons.types";

export const FramedButton: React.FC<FramedButtonProps> = ({
  text = "",
  scheme = "",
  burger = false,
  className = "",
  ...props
}) => {
  const schemeClass = scheme ? `framed-button--${scheme}` : "";

  return (
    <button
      type="button"
      className={`framed-button ${schemeClass} ${className}`}
      {...props}
    >
      <span className="framed-button__inner" />

      {text && <span className="framed-button__text">{text}</span>}

      {burger && (
        <span className="framed-button__burger" aria-hidden="true">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="framed-button__burger-line" />
          ))}
        </span>
      )}
    </button>
  );
};
