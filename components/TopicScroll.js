import React from "react";
import WordScroller from "./Topics";
import Image from "next/image";

function App() {
  return (
    <div className="App bg-secondary">
      <div className="flex container mx-auto pt-20  flex-col items-center justify-between">
        <div className="lg:w-[50%] -mb-[100px] ">
          <div className="flex text-center justify-center ">
            <h1 className="bg-white w-[180px]  h-[30px] rounded-lg mb-5 lg:mb-10"></h1>
          </div>
          <h1 className="lg:text-5xl text-3xl text-center  text-white font-bold">
            Possible Topics
          </h1>
        </div>
        <div className="lg:w-[50%] pt-10">
          <WordScroller />
        </div>
      </div>
    </div>
  );
}

export default App;
