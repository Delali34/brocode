// MobileMenu.js
import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";

const menuItems = ["Latest Episode", "Shop", "Contact", "Sign Up", "Log In"];

const MobileMenu = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
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
          className={` transition-opacity duration-1000 flex items-center justify-between  ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            width={120}
            height={120}
            src="/WhatsApp_Image_2023-08-15_at_11.31.25_PM-removebg-preview.png"
            alt="bro code"
            className="mt-5 pl-2"
          />
          <div onClick={() => setIsVisible(!isVisible)} className="">
            <AiOutlineClose className="text-white/70 text-xl mr-6" />
          </div>
        </div>
        <div className="flex flex-col space-y-5 h-full justify-center   pl-10">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`text-white/70 font-bold transition-opacity duration-1000 text-[16px]  ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {item}
            </div>
          ))}
          <p className="text-white text-[8px] pt-36">
            Copyright © Kalyjay Media All Rights Reserved TM 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
