// pages/index.js
import Navbar from "./Navbar";
import Image from "next/image";
import Hero from "./Hero";
import Menu from "./Menu";
import { auth } from "../firebase";

export default function Home() {
  const userEmail = auth.currentUser ? auth.currentUser.email : null;
  return (
    <div className="w-full  font-Cali">
      <div className="w-full relative ">
        <Image
          src="/8K8A9902 (1).jpg"
          width={1000}
          height={1000}
          priority={true}
          className="object-cover transform -scale-x-100  w-full max-h-screen lg:min-h-[870px] xl:min-h-[1200px] min-h-[800px]"
          alt="bro codewith kalyjay"
        ></Image>
        <div className="gradient-overlay"></div>
        <Navbar userEmail={userEmail} />
        <Menu userEmail={userEmail} />
        <Hero />
      </div>
    </div>
  );
}
