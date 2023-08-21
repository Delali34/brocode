import React from "react";
import Image from "next/image";
import { BsSpotify } from "react-icons/bs";
import { PiGooglePodcastsLogoBold } from "react-icons/pi";
import { AiFillYoutube } from "react-icons/ai";
import { PiApplePodcastsLogoFill } from "react-icons/pi";

function hero() {
  return (
    <div className="container my-auto mx-auto absolute  top-[20%] lg:px-14 px-3 right-0 left-0  mt-20 flex flex-col justify-center font-Cali">
      <div className="">
        <h1 className="xl:text-[120px] lg:text-[90px] text-[50px] text-primary font-bold">
          WE TALK,
        </h1>
        <h1 className="xl:text-[120px] lg:text-[90px] text-[50px] lg:-mt-10 -mt-5 text-primary font-bold ">
          YOU LISTEN
        </h1>
        <p className="lg:text-3xl md:text-2xl text-[15px] text-white">
          The most interactive show on the internet
        </p>
        <h1 className="rounded-[50px] w-[180px] h-[50px] text-black hover:bg-white cursor-pointer font-bold text-xl flex items-center animate-bounce justify-center mt-10 bg-primary">
          Get started
        </h1>
        <section className="flex  items-center gap-5">
          <div>
            <div className="border-2 mt-10  flex items-center rounded-[50px]  gap-3 justify-center p-2">
              <BsSpotify className="text-green-500 md:text-5xl text-2xl" />
              <h1 className="text-white xl:text-2xl text-[15px] lg:text-[20px]  font-semibold">
                Spotify
              </h1>
            </div>
            <div className="border-2 mt-10 rounded-[50px]  flex items-center gap-3 justify-center p-2">
              <PiGooglePodcastsLogoBold className="text-yellow-500 md:text-5xl text-2xl" />
              <h1 className="text-white xl:text-2xl text-[15px] lg:text-[20px] font-semibold">
                Google Podcast
              </h1>
            </div>
          </div>
          <div>
            <div className="border-2 mt-10  flex items-center rounded-[50px]  gap-3-center p-2">
              <PiApplePodcastsLogoFill className="text-purple-500  md:text-5xl text-2xl" />
              <h1 className="text-white xl:text-2xl text-[15px] lg:text-[20px] font-semibold">
                Apple Podcast
              </h1>
            </div>
            <div className="border-2 mt-10  flex rounded-[50px]  items-center gap-3 justify-center p-2">
              <AiFillYoutube className="text-red-600 md:text-5xl text-2xl" />
              <h1 className="text-white xl:text-2xl text-[15px] font-semibold lg:text-[20px]">
                Youtube
              </h1>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default hero;
