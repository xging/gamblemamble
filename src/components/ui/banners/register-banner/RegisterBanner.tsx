import React from "react";
import "./RegisterBanner.style.scss";
import { FramedButton } from "../../buttons/FramedButton";

export const RegisterBanner: React.FC = () => {
  const bonusText = (
    <>
      GET <span className="register-banner__highlight">200%</span> UP TO{" "}
      <span className="register-banner__highlight">100€</span>
      <br />+ <span className="register-banner__highlight">150 FREE SPINS</span>
    </>
  );

  return (
    <div className="register-banner">
      <div className="register-banner__headline">
        <h2 className="register-banner__title">{bonusText}</h2>
      </div>
      <div className="register-banner__button-wrapper">
        <FramedButton text="REGISTER" scheme="light-purple" burger={false} />
      </div>
    </div>
  );
};
