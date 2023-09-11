import React from "react";
import moment from "moment";
import Image from "next/image";

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
  return (
    <div className="">
      <div className="">
        <div className="w-full h-full relative">
          <img
            className="w-full h-[70vh] min-h-[500px] object-cover"
            src={post.featuredImage.url}
            alt={post.title}
          />
          <div className="gradient-overlay4"></div>
          <div className="absolute top-[50%] container mx-auto px-10 left-0 right-0">
            <h3 className="text-white text-center lg:text-5xl text-3xl font-bold">
              {post.title}
            </h3>
            <div className="flex justify-center items-center gap-3 mt-5">
              <img
                src={post.author.photo.url}
                alt={post.author.name}
                height="50px"
                width="50px"
                className="align-middle rounded-full"
              />
              <p className="text-primary font-semibold text-xl">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="max-w-[1800px] px-10 text-white pt-20">
            <div className="flex flex-col lg:flex-row justify-between lg:gap-0 gap-5">
              <div className="lg:w-[30%] w-full">
                <div className=" lg:sticky top-8">
                  <h1>SPONSORS</h1>
                  <Image
                    width={250}
                    height={250}
                    src="/papa3.jpeg"
                    alt="papa's pizza"
                  />
                </div>
              </div>
              <div className="lg:w-[70%] w-full text-xl">
                {post.content.raw.children.map((typeObj, index) => {
                  const children = typeObj.children.map((item, itemIndex) =>
                    getContentFragment(itemIndex, item.text, item)
                  );

                  return getContentFragment(
                    index,
                    children,
                    typeObj,
                    typeObj.type
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
