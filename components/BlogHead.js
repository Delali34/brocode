import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BiLogoSnapchat,
  BiLogoInstagramAlt,
  BiLogoTiktok,
  BiLogoTwitter,
} from "react-icons/bi";
const Categories = [
  { name: "Bro code", slug: "bro-code" },
  { name: "Fashion", slug: "fashion" },
];

function BlogHead() {
  return (
    <div>
      <div className="max-w-[1800px] mx-auto px-10">
        <div className="flex items-center justify-between">
          <div className="-ml-10">
            <Link href="/">
              <Image
                width={150}
                height={150}
                src="/WhatsApp_Image_2023-08-15_at_11.31.25_PM-removebg-preview.png"
                alt="the bro code with kalyjay"
              />
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-white/90 lg:flex border-2 md:text-sm hidden text-xs fixed z-10 top-12 border-black items-center gap-8 p-5 rounded-[80px] font-semibold md:h-[40px] h-[25px] px-5">
              <Link href="/blog">
                {" "}
                <h3>Home</h3>
              </Link>
              <Link href="/">
                {" "}
                <h3>About</h3>
              </Link>
              <Link href="/">
                {" "}
                <h3>Contact</h3>
              </Link>
            </div>
          </div>

          <div>
            <div className=" gap-3 lg:flex items-center hidden">
              <Link target="_blank" href="https://t.snapchat.com/FMyJZlQ1">
                <div>
                  <BiLogoSnapchat className="text-yellow-300  text-3xl cursor-pointer hover:scale-110" />
                </div>
              </Link>
              <Link
                target="_blank"
                href="https://instagram.com/thebrocodegh?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
              >
                <div>
                  <BiLogoInstagramAlt className="text-pink-600 text-3xl cursor-pointer hover:scale-110" />
                </div>
              </Link>
              <Link
                target="_blank"
                href="https://www.tiktok.com/@thebrocodegh?_t=8f4nPxzZ93F&_r=1"
              >
                <div>
                  <BiLogoTiktok className="text-white text-3xl cursor-pointer hover:scale-110" />
                </div>
              </Link>
              <Link
                target="_blank"
                href="https://twitter.com/TheBroCodeGh?s=20"
              >
                <div>
                  <BiLogoTwitter className="text-blue-400 text-3xl cursor-pointer hover:scale-110" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogHead;
// {
//   Categories.map((category) => (
//     <Link key={category.slug} href={`/category/${category.slug}`}>
//       <span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer ">
//         {category.name}
//       </span>
//     </Link>
//   ));
// }
