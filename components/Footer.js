import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerSection">
        <h3>Quick Links</h3>
        <ul>
          <Link className="cursor-point hover:underline hover:-mt-5" href="">
            Brocodeglobal@gmail.com
          </Link>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <Link
            className="cursor-point hover:underline  hover:-mt-5"
            href="/blog"
          >
            Blog
          </Link>
        </ul>
      </div>

      <div className="footerSection">
        <h3>Support & Help</h3>
        <ul>
          <Link
            className="cursor-point hover:underline  hover:-mt-5"
            href="/form"
          >
            Help Request
          </Link>
        </ul>
      </div>

      <SocialMediaLinks />
    </footer>
  );
};

export default Footer;
