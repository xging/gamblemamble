import React from "react";
import "./BottomCard.style.scss";
import { generateLogoList } from "../../../../data/logos";
import { generateLinksList } from "../../../../data/links";
import { QuoteRow } from "./QuoteRow";
import { LogoList } from "./LogoList";
import { Navigation } from "./Navigation";

const paymentsData = generateLogoList("payments");
const providersData = generateLogoList("providers");
const navigationData = generateLinksList("links");

export const BottomCard: React.FC = () => {
  return (
    <div className="bottom-card">
      <div className="bottom-card__inner">
        {/* Payments section */}
        {paymentsData.length > 0 && <LogoList dataList={paymentsData} />}

        {/* Providers section */}
        {providersData.length > 0 && <LogoList dataList={providersData} />}

        {/* Navigation Links */}
        {navigationData.length > 0 && <Navigation dataList={navigationData} />}

        {/* Responsible Gaming Quote */}
        <QuoteRow text="Gambling can be addictive. Play responsibly." />
      </div>
    </div>
  );
};
