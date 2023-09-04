import Slider from "./SliderComponent"; // Adjust path as necessary
const slideData = [
  {
    index: 0,

    src: "/papa4.jpg",
  },
  {
    index: 1,
    headline: "",
    button: "",
    src: "/papa1.jpg",
  },
  {
    index: 2,
    headline: "",
    button: "",
    src: "/papa3.jpeg",
  },
  {
    index: 3,
    headline: "",
    button: "",
    src: "/papa5.jpg",
  },
];

function SomePage() {
  return (
    <div className="body9">
      <div className="app">
        <div>
          <h1 className="text-white text-6xl py-8 font-extrabold">SPONSORS</h1>
          <Slider heading="Example Slider" slides={slideData} />
        </div>
      </div>
    </div>
  );
}

export default SomePage;
