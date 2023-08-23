import React from "react";
import Image from "next/image";

import Link from "next/link";

function hero() {
  return (
    <div className="container my-auto mx-auto absolute top-[25%]  lg:top-[25%] lg:px-14 px-3 right-0 left-0  mt-20 flex flex-col justify-center font-Cali">
      <div className="">
        <h1 className="xl:text-[120px] lg:text-[90px] text-[50px] text-primary font-bold">
          BOYS FOR TALK!!!
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
    </div>
  );
}

export default hero;
