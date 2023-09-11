"use client";
import React from "react";
import Image from "next/image";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";

function page() {
  return (
    <div className="bg-primary h-[100vh]">
      <div className="container mx-auto px-5  pt-20 flex items-center justify-between">
        <div className="text-2xl text-black flex gap-1 font-bold items-center">
          <Link href="/">
            <BiArrowBack />
          </Link>
          <Link href="/">
            <h2 className="md:text-2xl text-sm">Go back</h2>
          </Link>
        </div>

        <div>
          <h1>Shop</h1>
        </div>
      </div>
      <div className=" mt-20 flex flex-col items-center justify-center">
        <div className="">
          <Image
            src="/mesh.png"
            width={600}
            height={600}
            alt="the bro code gh"
          />
        </div>
      </div>
    </div>
  );
}

export default page;
