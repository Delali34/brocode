import React from "react";
import moment from "moment";
import Link from "next/link";
import { getCategories } from "@/services";

export default function PostCard({ post }) {
  console.log(post);
  return (
    <div className="mt-20">
      <div className="">
        <div className="relative overflow-hidden rounded-[15px] cursor-pointer ">
          <Link href={`/post/${post.slug}`}>
            <img
              className="w-[100%] h-[100%] min-h-[350px] object-cover rounded-[15px] hover:scale-110 transition duration-700 "
              src={post.featuredImage.url}
              alt="the bro code blog"
            />
          </Link>
          <div className="gradient-overlay3"></div>
          <Link href="/">
            <div className="bg-black absolute lg:top-[55%] top-[60%] hover:scale-105 left-[4%] text-white py-2 border-white border-2 px-10 rounded-[35px]">
              <h2 className="lg:text-2xl">
                {post.categories[0]?.name || "Category"}
              </h2>
            </div>
          </Link>
          <Link href={`/post/${post.slug}`}>
            <div className=" absolute top-[75%]  left-[4%] text-white py-3 ">
              <h2 className="md:text-[19px] text-[15px] font-semibold">
                {post.title}
              </h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
