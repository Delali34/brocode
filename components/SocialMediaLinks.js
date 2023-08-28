// SocialMediaLinks.js

import React from "react";
import { FaTwitter, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";

const SocialMediaLinks = () => {
  return (
    <div className="socialMediaContainer">
      <a
        href="https://twitter.com/TheBroCodeGh?s=20"
        className="icon twitter"
        target="_blank"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.youtube.com/@BroCodeGH"
        className="icon youtube"
        target="_blank"
      >
        <FaYoutube />
      </a>
      <a
        href="https://instagram.com/thebrocodegh?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
        className="icon instagram"
        target="_blank"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.tiktok.com/@thebrocodegh?_t=8f4nPxzZ93F&_r=1"
        target="_blank"
        className="icon tiktok"
      >
        <FaTiktok />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
