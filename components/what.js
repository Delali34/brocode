import React, { useEffect, useRef } from "react";
import Image from "next/image";

function What() {
  // Step 1: Create a ref to your line element
  const lineRef = useRef(null);

  // Step 2: Set up the Intersection Observer in a `useEffect`
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        // Check if the element is in the viewport
        if (entry.isIntersecting) {
          // Add a class to trigger the animation
          entry.target.classList.add("animate-line");
        }
      },
      {
        threshold: 0.1, // Trigger the callback when 10% of the element is visible
      }
    );

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (lineRef.current) {
        observer.unobserve(lineRef.current);
      }
    };
  }, []);

  // Step 3: The return statement of your component
  return (
    <div>
      {" "}
      <div className=" mt-24  w-full gap-5 container mx-auto">
        <div className="flex container  lg:px-10 px-3  items-center justify-center mx-auto">
          <div className="w-[70%]">
            <h1 className="lg:text-5xl md:text-2xl text-[17px] text-sm font-bold">
              About Bro Code
            </h1>
          </div>
          <div className="w-[30%] h-1 bg-primary" ref={lineRef}></div>
        </div>
        <div className="flex lg:flex-row flex-col  items-center justify-between">
          <Image
            src="/Screenshot 2023-08-18 213822.png"
            width={1000}
            height={1000}
            alt="brocode "
            className=""
          />
          <p className="lg:text-xl text-sm p-5 text-justify">
            <span className="font-bold lg:text-3xl text-xl">BRO CODE</span> is a
            light-hearted and informative podcast that tackles mens mental
            health. The show creates a safe space for open conversations,
            featuring a diverse panel of hosts, including mental health experts
            and entertainers.
            <p className="mt-4">
              Through humor, personal anecdotes, and expert advice, the podcast
              covers topics such as stress management, self-care, relationships,
              work-life balance, masculinity, and societal expectations. It
              empowers men to prioritize their mental well- being, challenges
              societal norms, and provides practical strategies for managing
              stress and fostering personal growth.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default What;
