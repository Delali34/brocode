// components/Navbar.js
import Link from "next/link";
import Image from "next/image";
import Menu2 from "@/components/Menu2";

const Navbar = () => {
  return (
    <nav className="absolute top-0 right-0 left-0 font-Cali z-10">
      <div className="container hidden mx-auto lg:flex justify-between items-center px-10">
        <Link className="text-4xl font-bold" href="/">
          <Image
            width={200}
            height={200}
            src="/WhatsApp_Image_2023-08-15_at_11.31.25_PM-removebg-preview.png"
            alt="the bro code with kalyjay"
          />
        </Link>
        <Link href="/LogIn">
          <div className=" text-white cursor-pointer">
            <h1 className="text-2xl bg-white/30 hover:bg-primary/60   flex items-center justify-center w-[150px] h-[50px] text-center p-1 font-bold rounded-[50px]">
              Log In
            </h1>
          </div>
        </Link>
      </div>
      <Menu2 />
    </nav>
  );
};

export default Navbar;
