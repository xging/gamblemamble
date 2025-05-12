import React from "react";

import "./Navbar.style.scss";
import { Logo } from "../../../assets/logo.svg";
import GiftIcon from "../../../assets/GiftIcon.svg?react";

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Logo />
      </div>

      <div className="navbar__bonus-hub">
        <GiftIcon />
        <div className="navbar__indicator"></div>
      </div>
    </nav>
  );
};
