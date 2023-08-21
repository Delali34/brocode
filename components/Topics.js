import React, { useState, useEffect, useRef } from "react";
export default function WordScroller() {
  const words = [
    "Anxiety disorders",
    "Depression",
    "Bipolar disorder",
    "Post-traumatic stress disorder (PTSD)",
    "Obsessive-compulsive disorder (OCD)",
    "Midlife Crises",
    "Eating disorders",
    "Substance abuse and addiction",
    "Self-esteem and body image issues",
    "Stress management",
    " Anger management",
    "Relationship difficulties",
    "Work-related stress and burnout",
    "Grief and loss",
    "Suicide prevention ",
    "mental health ",
  ];
  const [activeWordIndex, setActiveWordIndex] = useState(null);
  const scrollContainerRef = useRef(null);
  useEffect(() => {
    function handleScroll() {
      const { top } = scrollContainerRef.current.getBoundingClientRect();
      const wordElements = document.querySelectorAll(".word");
      const middle = scrollContainerRef.current.clientHeight / 2; // Middle of the container

      wordElements.forEach((word, index) => {
        const position = word.getBoundingClientRect().top - top;

        // Check if the word is positioned in the middle of the container
        if (position <= middle && position + word.clientHeight >= middle) {
          setActiveWordIndex(index);
        }
      });
    }
    const container = scrollContainerRef.current;
    container.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="scroll-container  no-scrollbar" ref={scrollContainerRef}>
      {words.map((word, index) => (
        <div
          key={index}
          className={`word ${
            index === activeWordIndex
              ? "active lg:text-[28px] text-[18px] cursor-pointer text-white font-bold"
              : "lg:text-[18px] text-[12px] cursor-pointer text-white"
          }`}
        >
          {word}
        </div>
      ))}
    </div>
  );
}
