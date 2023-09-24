// components/Navbar.js
"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import { auth, signOut } from "../firebase";

const Navbar = ({ userEmail }) => {
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
      <div className="container hidden mx-auto lg:flex justify-between items-center px-10">
        <Link className="text-4xl font-bold -ml-10" href="/">
          <Image
            width={200}
            height={200}
            src="/WhatsApp_Image_2023-08-15_at_11.31.25_PM-removebg-preview.png"
            alt="the bro code with kalyjay"
          />
        </Link>
        <ul className="flex space-x-10 text-white text-xl">
          {/* <li>
            <Link
              className="cursor-point hover:text-primary hover:-mt-5"
              href="/donate"
            >
              Donate
            </Link>
          </li> */}
          <li>
            <Link
              className="cursor-point hover:text-primary hover:-mt-5"
              href="/form"
            >
              Help Request
            </Link>
          </li>
          <li>
            <Link
              className="cursor-point hover:-mt-5 hover:text-primary"
              href="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="cursor-point hover:-mt-5 hover:text-primary"
              href="/shop"
            >
              shop
            </Link>
          </li>
        </ul>
        <div className="relative gap-5 text-white cursor-pointer">
          <h1
            ref={profileRef}
            onClick={toggleDropdown}
            className="text-2xl font-bold font-Cali hover:border-2 p-3 w-[60px] h-[60px] flex items-center justify-center rounded-[100%] bg-primary"
          >
            {getInitials(userEmail) || "P"} {/* P for Profile */}
          </h1>

          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-2 border rounded-md shadow-lg bg-primary font-bold text-black"
            >
              <div className="p-4">{userEmail}</div>
              {/* <hr className="border-t" /> */}
              <div onClick={handleLogout} className="p-4 hover:bg-white">
                <button>Logout</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
