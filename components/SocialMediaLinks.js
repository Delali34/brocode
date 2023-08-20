// SocialMediaLinks.js

import React from "react";
import { FaTwitter, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";

const SocialMediaLinks = () => {
  return (
    <div className="socialMediaContainer">
      <a href="https://twitter.com/yourusername" className="icon twitter">
        <FaTwitter />
      </a>
      <a href="https://youtube.com/yourchannel" className="icon youtube">
        <FaYoutube />
      </a>
      <a href="https://instagram.com/yourusername" className="icon instagram">
        <FaInstagram />
      </a>
      <a href="https://tiktok.com/@yourusername" className="icon tiktok">
        <FaTiktok />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
