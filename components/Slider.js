import React from "react";
import CitySlider from "../components/Slide";

const slides = [
  {
    city: "Cameos",
    country: "The bro code",
    img: "/cameos.jpg",
  },
  {
    city: "Giveaway",
    country: "The bro code",
    img: "/GIVEAWAY1.jpg",
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
