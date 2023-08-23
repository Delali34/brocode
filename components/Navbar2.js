// components/Navbar.js
import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";

const Navbar = () => {
  return (
    <nav className=" font-Cali z-10">
      <div className="container mx-auto">
        <Link className="text-4xl font-bold" href="/">
          <Image
            width={200}
            height={200}
            src="/WhatsApp_Image_2023-08-15_at_11.31.25_PM-removebg-preview.png"
            alt="the bro code with kalyjay"
          />
        </Link>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
