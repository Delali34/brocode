import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blogbanner = ({ post }) => {
  return (
    <div className="max-w-[1800px] mx-auto lg:px-10 px-5 lg:pt-5 pt-2">
      <div className="relative">
        <img
          width={2500}
          height={2500}
          src={post.featuredImage.url}
          alt="the bro code blog"
          className="rounded-[30px] md:h-[750px] h-[500px] w-full object-cover"
        />
        <div className="gradient-overlay2"></div>
        <Link href={`/category/${post.categories[0]?.slug || "#"}`}>
          <div className="bg-black absolute top-[60%] hover:scale-110 left-[4%] text-white py-2 border-white border-2 px-10 rounded-[35px] cursor-pointer">
            <h2 className="lg:text-2xl">
              {post.categories[0]?.name || "Category"}
            </h2>
          </div>
        </Link>
        <Link href={`/post/${post.slug}`}>
          <div className="absolute top-[70%] left-[4%] text-primary py-2 cursor-pointer">
            <h2 className="md:text-4xl text-2xl font-extrabold">
              {post.title}
            </h2>
          </div>
        </Link>
        <div className="absolute top-[80%] left-[4%] text-white py-2 ">
          <p className="md:text-xl text-sm w-[80%] hidden lg:flex">
            {post.excerpt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogbanner;
