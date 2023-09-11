// MobileMenu.js
import React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { auth, signOut } from "../firebase";
const menuItems = ["Latest Episode", "Blog", "Contact"];

const MobileMenu = ({ userEmail }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const profileRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const getInitials = (email) => {
    if (email) {
      return email.charAt(0).toUpperCase();
    }
    return "G"; // G for Guest
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !profileRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign the user out
      window.location.href = "/LogIn"; // Redirect to the login page
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="absolute top-0 right-0 left-0 font-Cali z-10">
      <div className="lg:hidden">
        <div className="flex items-center justify-between">
          <Image
            width={120}
            height={120}
            src="/WhatsApp_Image_2023-08-15_at_11.31.25_PM-removebg-preview.png"
            alt="bro code"
            className=""
          />

          <button
            onClick={() => setIsVisible(!isVisible)}
            className="text-white p-4 text-3xl "
          >
            <HiMenuAlt3 />
          </button>
        </div>

        <div
          className={`fixed top-0 right-0 h-screen w-3/4 bg-black transition-transform duration-1500 transform ${
            isVisible ? "translate-x-0" : "translate-x-full ease-in-out"
          }`}
        >
          <div
            className={` transition-opacity duration-1000 flex items-center mt-10 justify-between  ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative gap-5 text-white cursor-pointer">
              <h1
                ref={profileRef}
                onClick={toggleDropdown}
                className="text-xl font-bold font-Cali hover:border-2 ml-[40px] p-2 w-[40px] h-[40px] -right-5 flex items-center justify-center rounded-[100%] bg-primary"
              >
                {getInitials(userEmail) || "P"}
              </h1>

              {isDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute -right-[100px] mt-2 border text-[10px] rounded-md shadow-lg bg-primary font-bold text-black"
                >
                  <div className="p-4">{userEmail}</div>
                  <hr className="border-t hover:bg-white" />
                  <div onClick={handleLogout} className="p-4 ">
                    <button>Logout</button>
                  </div>
                </div>
              )}
            </div>

            <div onClick={() => setIsVisible(!isVisible)} className="">
              <AiOutlineClose className="text-white/70 text-xl mr-6" />
            </div>
          </div>
          <div className="flex flex-col space-y-5 h-full justify-center   pl-10">
            <div
              className={`text-white/70 font-bold transition-opacity duration-1000 text-[16px]  ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <Link href="/form">Help Request</Link>
            </div>
            <div
              className={`text-white/70 font-bold transition-opacity duration-1000 text-[16px]  ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <Link href="/blog">Blog</Link>
            </div>
            <div
              className={`text-white/70 font-bold transition-opacity duration-1000 text-[16px]  ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <Link href="Upcoming">Upcoming</Link>
            </div>

            <p className="text-white text-[8px] pt-36">
              Copyright © Kalyjay Media All Rights Reserved TM 2023
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileMenu;
