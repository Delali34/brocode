import React, { useEffect, useState } from "react";
import Link from "next/link";

import { getCategories } from "@/services";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
    console.log(categories);
  }, []);

  return (
    <div className=" mt-32 ">
      <div className="bg-white w-full h-[2px]"></div>
      <div className="max-w-[1800px] px-10 "></div>
      <div className="lg:px-20 flex flex-wrap items-center gap-3">
        {categories.map((category) => (
          <Link href={`/category/${category.slug}`} key={category.slug}>
            <div className="">
              <h4 className="text-white transition duration-200 hover:scale-105 text-xl my-6 border-2 text-center border-white py-2 px-3 rounded-[30px]">
                #{category.name}
              </h4>
            </div>
          </Link>
        ))}
      </div>
      <div className="bg-white w-full h-[2px]"></div>
    </div>
  );
}

export default Categories;
