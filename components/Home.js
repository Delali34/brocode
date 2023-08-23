// pages/index.js
import Navbar3 from "./Navbar3";
import Image from "next/image";
import Hero2 from "./Hero2";
import Menu from "./Menu";

export default function Home() {
  return (
    <div className="w-full  font-Cali">
      <div className="w-full relative ">
        <Image
          src="/8K8A9902 (1).jpg"
          width={1000}
          height={1000}
          priority={true}
          className="object-cover transform -scale-x-100  w-full max-h-screen lg:min-h-[870px] xl:min-h-[1100px] min-h-[800px]"
          alt="bro codewith kalyjay"
        ></Image>
        <div className="gradient-overlay"></div>
        <Navbar3 />
        <Hero2 />
      </div>
    </div>
  );
}
