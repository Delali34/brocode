import React from "react";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getRecentPosts, getSimilarPosts, getCategories } from "@/services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [categorys, setCategories] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
    console.log(categories);
  }, []);

  return (
    <div className="mt-20 w-full">
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center gap-2">
          <div className="overflow-hidden rounded-2xl cursor-pointer w-[40%]">
            <img
              src={post.featuredImage.url}
              alt=""
              className="object-cover rounded-2xl hover:scale-105 transition duration-500"
            />
          </div>

          <div>
            {categorys.map((category) => (
              <div className="text-white" key={category.name}>
                {post.name}
              </div>
            ))}
            <Link href={`/post/${post.slug}`} key={post.title}>
              <h3 className="text-white text-[16px] font-medium">
                {post.title}
              </h3>
            </Link>

            <p className="text-gray-500">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
