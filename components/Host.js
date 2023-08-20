import React, { useState, useEffect } from "react";
import Image from "next/image";

function Host() {
  const images = [
    "/_R2A9632 (1) (1).jpg",
    "/23366228.jpg",
    "/EpwElcsWMAESn38.jpg",

    // ... add paths to other images
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="svg2">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center p-5">
        <div className="lg:w-[60%] p-5">
          <div className=" ">
            <h1 className="bg-white w-[180px] h-[30px] rounded-lg mb-5 lg:mb-10"></h1>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-white">HOST</h1>
          <p className="mt-5 text-sm lg:text-2xl font-semibold text-white">
            KalyJay, is a popular Ghanaian social media influencer. He gained
            prominence through his entertaining and humorous content across
            various online platforms.
          </p>
          <p className="mt-5 text-sm lg:text-2xl font-semibold text-white">
            KalyJays content often touches on trending topics, social issues,
            and everyday experiences, allowing his audience to find humor in
            relatable situations. His ability to connect with his followers
            through laughter has contributed to his growing popularity and loyal
            fan base.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            className="fade-in m-16 lg:w-[400px] lg:h-[500px] rounded-[30px]"
            src={images[currentIndex]}
            width={300}
            height={500}
            alt="the bro ceode"
          />
        </div>
      </div>
    </div>
  );
}

export default Host;
