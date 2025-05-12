import React from "react";
import "./FeatureCard.style.scss";
import { FramedButton } from "../../buttons/FramedButton";
import firegradientbg from "@/assets/firebg.png";
import firecorner from "@/assets/fire.png";
import firevideo from "@/assets/firevideo.mp4";
import icegradientbg from "@/assets/icegradient.jpg";
import icevideo from "@/assets/icevideo.mp4";

interface FeatureCardProps {
  children?: React.ReactNode;
  style?: string;
  title?: string;
  buttonText?: string;
  isShowButton?: boolean;
  variant?: "fire" | "ice";
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  children,
  style = "",
  title = "",
  buttonText = "",
  isShowButton = true,
  variant = "fire",
}) => {
  return (
    <div className={`feature-card feature-card--${style}`}>
      {style === "hotncold" && (
        <>
          {variant === "fire" && (
            <>
              <img
                src={firegradientbg}
                alt="Background"
                className="feature-card__background background"
              />
              <img
                src={firecorner}
                alt="Corner"
                className="feature-card__corner firecorner"
              />
              <video
                src={firevideo}
                autoPlay
                loop
                muted
                playsInline
                className="feature-card__video fire-video"
              />
            </>
          )}
          {variant === "ice" && (
            <>
              <img
                src={icegradientbg}
                alt="Background"
                className="feature-card__background background"
              />
              <video
                src={icevideo}
                autoPlay
                loop
                muted
                playsInline
                className="feature-card__video fire-video"
              />
            </>
          )}
        </>
      )}

      {style !== "hotncold" && (
        <div className="feature-card__title">{title}</div>
      )}

      <div className="feature-card__inner">{children}</div>

      {isShowButton && (
        <div className="feature-card__button">
          <FramedButton
            text={buttonText}
            scheme="light-purple"
            burger={false}
          />
        </div>
      )}
    </div>
  );
};
