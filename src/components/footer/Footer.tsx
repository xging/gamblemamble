import React from "react";
import "./Footer.style.scss";
import { GlaredButton } from "../ui/buttons/GlaredButton";
import { FramedButton } from "../ui/buttons/FramedButton";

export const Footer: React.FC = () => {
  return (
    <footer
      className="footer"
      role="contentinfo"
      aria-label="Bottom navigation bar"
    >
      <div className="footer__container">
        {/* Left button: Sign In */}
        <section className="footer__section">
          <GlaredButton text="SIGN IN" color="purple" />
        </section>

        {/* Center button: Burger menu */}
        <section className="footer__section footer__section--center">
          <FramedButton text="" scheme="dark-purple" burger={true} />
        </section>

        {/* Right button: Sign Up */}
        <section className="footer__section">
          <GlaredButton text="SIGN UP" color="green" />
        </section>
      </div>
    </footer>
  );
};
