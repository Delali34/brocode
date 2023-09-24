import React from "react";
import { FaDonate } from "react-icons/fa";
import Link from "next/link";

function Donate() {
  return (
    <div className="fixed z-[999] border-2 border-black hover:bg-white cursor-pointer  bottom-5 right-5 lg:w-[200px] lg:h-[50px] w-[130px] h-[40px] bg-primary rounded-[50px]">
      <Link href="/donate">
        <h1 className=" flex  justify-center items-center text-center lg:text-xl font-bold gap-2 lg:pt-3 pt-[6px]">
          Donate{" "}
          <div className="animate-bounce">
            <FaDonate />
          </div>
        </h1>
      </Link>
    </div>
  );
}

export default Donate;
