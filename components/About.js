import React from "react";
import VideoPlayer from "./videoplayer";
import Image from "next/image";

const App = () => {
  return (
    <div className="App  ">
      <div className="svg">
        <section className="flex flex-col  lg:pt-20 pt-10  justify-between items-center container mx-auto p-2">
          <div>
            <div className="flex items-center justify-center ">
              <h1 className="bg-primary w-[180px] h-[30px] rounded-lg"></h1>
            </div>
            <h1 className="white lg:text-[80px] text-[40px] font-bold text-black">
              The bro code
            </h1>
            <p className="white lg:text-[25px] text-[15px] text-black text-center">
              Play the Trailler
            </p>
          </div>
          <div className="">
            <VideoPlayer src="/BRO CODE COMIING SOON - CAPT. KOFI AMOABENG (1).mp4" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
