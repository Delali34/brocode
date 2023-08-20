import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

export default function App() {
  return (
    <div className="svg3">
      <div className=" mt-10">
        <div className="flex text-center justify-center ">
          <h1 className="bg-primary w-[180px]  h-[30px] rounded-lg mb-5 lg:mb-10"></h1>
        </div>
        <h1 className="lg:text-5xl text-3xl text-center text-black font-bold">
          Extras
        </h1>
      </div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#000",
        }}
        zoom={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper lg:w-[50%] w-[100%] my-[50px]"
      >
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img
              src="/happy-woman-holding-presents-medium-shot (1) (1) (1).jpg"
              className="lg:w-[500px] lg:h-[500px] w-[200px] h-[200px] rounded-lg"
            />
          </div>
          <h1 className="md:text-3xl text-2xl text-center font-bold text-black">
            Giveaways
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container rounded-lg">
            <img
              src="/39926 (1).jpg"
              className="lg:w-[500px] lg:h-[500px] w-[200px] h-[200px] "
            />
          </div>
          <h1 className="md:text-3xl text-2xl text-center font-bold text-black">
            Games
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img
              src="/pov-male-influencer-recording-podcast-episode-camera-using-sound-equipment-studio-portrait-content-creator-talking-audience-filming-social-media-channel-vlog (1) (1).jpg"
              className="lg:w-[500px] lg:h-[500px] w-[200px] h-[200px] "
            />
          </div>
          <h1 className="md:text-3xl text-2xl text-center font-bold text-black">
            Cameos
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
