// pages/_app.js
"use client";
import "./globals.css";
import { useState, useEffect } from "react";
import Homepage from "../components/Homepage";
import About from "@/components/About";
import Image from "next/image";
import What from "@/components/what";
import Host from "@/components/Host";
import TopicScroll from "@/components/TopicScroll";
import Slider from "@/components/Slider";
import SocialMedia from "@/components/Footer";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [pageState, setPageState] = useState("page-entering");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-screen">
          <div className="loading-text">
            <Image
              width={500}
              height={500}
              src="/WhatsApp Image 2023-08-15 at 11.31.25 PM.jpeg"
              alt="the bro code podcast with kalyjay"
            />
          </div>
        </div>
      ) : (
        <div className="homepage-content">
          <Homepage />
          <About />
          <What />
          <Host />
          <TopicScroll />
          <Slider />
          <SocialMedia />
        </div>
      )}
    </>
  );
}

export default MyApp;
