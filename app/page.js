// pages/_app.js
"use client";
import "./globals.css";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Homepage from "../components/Homepage";
import About from "@/components/About";
import Image from "next/image";
import What from "@/components/what";
import Host from "@/components/Host";
import TopicScroll from "@/components/TopicScroll";
import Slider from "@/components/Slider";
import SocialMedia from "@/components/Footer";
import Home from "@/components/Home";
import Advert from "@/components/Advert";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [isUserAuthenticated, setUserAuthenticated] = useState(false);

  useEffect(() => {
    // This function is called whenever the user's authentication status changes.
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserAuthenticated(true);
      } else {
        setUserAuthenticated(false);
      }
    });

    // Cleanup the onAuthStateChanged listener
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

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
      ) : isUserAuthenticated ? (
        <div className="homepage-content">
          <Homepage />
          <About />
          <What />
          <Host />
          <TopicScroll />
          <Slider />
          <Advert />
          <SocialMedia />
        </div>
      ) : (
        <Home />
      )}
    </>
  );
}

export default MyApp;
