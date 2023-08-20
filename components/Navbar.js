// components/Navbar.js
import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";

const Navbar = () => {
  return (
    <nav className="absolute top-0 right-0 left-0 font-Cali z-10">
      <div className="container hidden mx-auto lg:flex justify-between items-center">
        <Link className="text-4xl font-bold" href="/">
          <Image
            width={200}
            height={200}
            src="/WhatsApp_Image_2023-08-15_at_11.31.25_PM-removebg-preview.png"
            alt="the bro code with kalyjay"
          />
        </Link>
        <ul className="flex space-x-10 text-white  er text-xl">
          <li>
            <Link
              className="cursor-point hover:text-primary hover:-mt-5"
              href="/latest-episode"
            >
              Latest Episode
            </Link>
          </li>
          <li>
            <Link
              className="cursor-point hover:-mt-5 hover:text-primary"
              href="/team"
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              className="cursor-point hover:-mt-5 hover:text-primary"
              href="/shop"
            >
              Shop
            </Link>
          </li>
        </ul>
        <div className="flex items-center  gap-5 text-white cursor-pointer">
          <h1 className="text-2xl bg-white/30 hover:bg-primary/60   flex items-center justify-center w-[150px] h-[50px] text-center p-1 font-bold rounded-[50px]">
            Log In
          </h1>
          <h1 className="text-2xl border-2 w-[160px] h-[50px] flex items-center justify-center rounded-[50px] hover:bg-primary/60">
            Subscribe
          </h1>
        </div>
      </div>
      <Menu />
    </nav>
  );
};

export default Navbar;
