import React from "react";
import moment from "moment";
import Link from "next/link";
import { getCategories } from "@/services";

export default function PostCard({ post }) {
  console.log(post);
  return (
    <div className="lg:mt-20 mt-5">
      <div className="">
        <div className="relative  cursor-pointer ">
          <div className="overflow-hidden rounded-[10px]">
            {" "}
            <Link href={`/post/${post.slug}`}>
              <img
                className="w-[500px] h-[300px] overflow-hidden object-cover rounded-[10px] hover:scale-110 transition duration-700 "
                src={post.featuredImage.url}
                alt="the bro code blog"
              />
            </Link>
          </div>

          {/* <div className="gradient-overlay3"></div> */}
          <Link href="/">
            <div className="text-primary mt-5">
              <h2 className="lg:text-2xl">
                #{post.categories[0]?.name || "Category"}
              </h2>
            </div>
          </Link>
          <Link href={`/post/${post.slug}`}>
            <div className="   text-white py-3 ">
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
