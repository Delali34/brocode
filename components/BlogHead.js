import React, { useContext } from "react";
import Link from "next/link";
const Categories = [
  { name: "Bro code", slug: "bro-code" },
  { name: "Fashion", slug: "fashion" },
];

function BlogHead() {
  return (
    <div className="conatiner mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              The bro code gh
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {Categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer ">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogHead;
