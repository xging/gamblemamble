import React from "react";
import "./Header.style.scss";
import { Navbar } from "../ui/navbar/Navbar";
import { RegisterBanner } from "../ui/banners/register-banner/RegisterBanner";
import { PaymentBanner } from "../ui/banners/payment-banner/PaymentBanner";
import { SearchBox } from "../ui/search-bar/SearchBox";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <Navbar />

      <div className="header__content">
        {/* Section 1 */}
        <RegisterBanner />

        {/* Section 2 */}
        <PaymentBanner />

        {/* Section 3 */}
        <SearchBox placeholder="Find your game" />
      </div>
    </header>
  );
};
