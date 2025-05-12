import React from "react";
import type { GlaredButtonProps } from "../../../types/Buttons.types";

export const GlaredButton: React.FC<GlaredButtonProps> = ({
  text,
  color = "green",
  className = "",
  ...props
}) => {
  return (
    <button
      type="button"
      className={`glared-button glared-button--${color} ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};
