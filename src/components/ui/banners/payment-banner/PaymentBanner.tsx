import React from "react";
import "./PaymentBanner.style.scss";
import { generateLogoList } from "../../../../data/logos";

const logoData = generateLogoList("paymentsTop");

export const PaymentBanner: React.FC = () => {
  return (
    <div className="payment-banner">
      {logoData.map(({ logo, desc }) => {
        const image = logo?.[0];
        if (!image) return null;

        return (
          <img
            key={desc}
            src={image.src}
            alt={desc}
            className="payment-banner__logo"
          />
        );
      })}
    </div>
  );
};
