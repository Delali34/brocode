import React from "react";
import Image from "next/image";
import {
  BiLogoSnapchat,
  BiLogoInstagramAlt,
  BiLogoTiktok,
  BiLogoTwitter,
} from "react-icons/bi";
import Link from "next/link";

function hero() {
  return (
    <div className="container overflow-hidden my-auto mx-auto absolute top-[20%]  lg:top-[20%] lg:px-14 px-3 right-0 left-0  mt-20 flex flex-col justify-center font-Cali">
      <div className="">
        <h1 className="xl:text-[120px] lg:text-[90px] text-[60px] text-primary font-black tracking-tighter">
          BOYS
        </h1>
        <h1 className="xl:text-[120px] lg:text-[90px] lg:-mt-10 -mt-5 text-[60px] text-primary font-black tracking-tighter">
          FOR TALK !!!
        </h1>
        {/* <h1 className="xl:text-[120px] lg:text-[90px] text-[50px] lg:-mt-10 -mt-5 text-primary font-bold ">
          TALK
        </h1> */}
        <p className="lg:text-3xl md:text-2xl text-[15px] text-white">
          The most interactive show on the internet
        </p>
        <Link href="/SignUp">
          <h1 className="rounded-[50px] w-[180px] h-[50px] text-black hover:bg-white cursor-pointer font-bold text-xl flex items-center animate-bounce justify-center mt-10 bg-primary">
            Get started
          </h1>
        </Link>
      </div>
      <div className="mt-10 gap-3 flex items-center ">
        <Link target="_blank" href="https://t.snapchat.com/FMyJZlQ1">
          <div>
            <BiLogoSnapchat className="text-yellow-300  text-5xl cursor-pointer hover:scale-110" />
          </div>
        </Link>
        <Link
          target="_blank"
          href="https://instagram.com/thebrocodegh?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
        >
          <div>
            <BiLogoInstagramAlt className="text-pink-600 text-5xl cursor-pointer hover:scale-110" />
          </div>
        </Link>
        <Link
          target="_blank"
          href="https://www.tiktok.com/@thebrocodegh?_t=8f4nPxzZ93F&_r=1"
        >
          <div>
            <BiLogoTiktok className="text-white text-5xl cursor-pointer hover:scale-110" />
          </div>
        </Link>
        <Link target="_blank" href="https://twitter.com/TheBroCodeGh?s=20">
          <div>
            <BiLogoTwitter className="text-blue-400 text-5xl cursor-pointer hover:scale-110" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default hero;
