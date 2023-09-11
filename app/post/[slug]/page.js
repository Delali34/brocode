"use client";
import React from "react";
import { getPosts, getPostDetails } from "@/services";
import PostDetail from "@/components/PostDetail";
import Comments from "@/components/Comments";
import CommentsForm from "@/components/CommentsForm";
import Author from "@/components/Author";
import BlogHead from "@/components/BlogHead";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(({ node: { slug } }) => ({ slug }));
}

async function getPost(params) {
  const post = await getPostDetails(params.slug);
  return post;
}

const Page = ({ params }) => {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await getPost(params);
        setPost(postData);
      } catch (error) {
        console.error("Failed to fetch post details:", error);
      }
    };

    fetchPost();
  }, [params]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-black/90 h-[100%]">
      <BlogHead />
      <PostDetail post={post} />
      <Author author={post.author} />
      <CommentsForm slug={post.slug} />
      <Comments slug={post.slug} />
    </div>
  );
};

export default Page;
