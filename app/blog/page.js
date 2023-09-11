"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Header from "@/components/BlogHead";
import PostCard from "@/components/PostCard";
import PostWidget from "@/components/PostWidget";
import Categories from "@/components/Categories";
import { getPosts } from "@/services/index";
import Blogbanner from "@/components/Blogbanner";
import { auth } from "@/firebase"; // Adjust the import path as necessar
import "../ad.css";

export default function Home() {
  // Fetching data directly within the component
  const [posts, setPosts] = useState([]);
  const [isUserAuthenticated, setUserAuthenticated] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getPosts();
      setPosts(data);
    }

    fetchData();
  }, []);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserAuthenticated(true);
      } else {
        setUserAuthenticated(false);
        window.location.href = "/LogIn"; // Adjust the route to your login page
      }
    });
  }, []);

  // If authentication status is null, return null to prevent flash of content
  if (isUserAuthenticated === null) return null;

  return (
    <div className=" bg-black/90 h-[100%] pb-10 w-full">
      <div>
        <Header />
        {posts[0] && <Blogbanner post={posts[0].node} />}
        {/* <Categories /> */}
        <div className="max-w-[1800px] mx-auto lg:px-20 px-5 mb-8">
          <div className="mt-32">
            <div>
              <h1 className="text-4xl mb-5 font-bold text-white">
                Recent Posts
              </h1>
            </div>
            <div className="flex 2lg:flex-row flex-col  items-start w-full lg:gap-10 gap-5">
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-10 gap-2">
                {posts.map((post, index) => (
                  <PostCard post={post.node} key={index} />
                ))}
              </div>

              {/* <div className="">
                <div className="">
                  <PostWidget />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
