// pages/index.js
import Navbar from "./Navbar";
import Image from "next/image";
import Hero from "./Hero";
import Menu from "./Menu";

export default function Home() {
  return (
    <div className="w-full font-Cali">
      <div className="w-full relative ">
        <Image
          src="/8K8A9902 (1).jpg"
          width={1000}
          height={1000}
          className="object-cover transform -scale-x-100  w-full h-screen "
          alt="bro codewith kalyjay"
        ></Image>
        <div className="gradient-overlay"></div>
      </div>
      <Navbar />
      <Hero />
    </div>
  );
}
