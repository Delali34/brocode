import React from "react";
import CitySlider from "../components/Slide";

const slides = [
  {
    city: "Cameos",
    country: "The bro code",
    img: "/cameo.jpg",
  },
  {
    city: "Giveaway",
    country: "The bro code",
    img: "/give.jpg",
  },
  {
    city: "Games",
    country: "The bro code",
    img: "/games.jpg",
  },
];

export default function Home() {
  return <CitySlider slides={slides} />;
}
