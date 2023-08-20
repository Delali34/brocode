import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerSection">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/sponsors">Team Sponsor</a>
          </li>
        </ul>
      </div>

      <div className="footerSection">
        <h3>Latest Episode</h3>

        <p>
          <a href="/episodes/latest">Episode 123: React Advanced Patterns</a>
        </p>
      </div>

      <div className="footerSection">
        <h3>Support & Help</h3>
        <ul>
          <li>
            <a href="/help">Help Center</a>
          </li>
          <li>
            <a href="/faq">FAQ</a>
          </li>
        </ul>
      </div>

      <SocialMediaLinks />
    </footer>
  );
};

export default Footer;
