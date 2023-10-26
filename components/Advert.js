// import React from "react";
// import "../app/ad.css";

// function Advert() {
//   return (
//     <div className="bg-black">
//       <div>
//         <h1 className="text-white text-4xl text-center pt-10 font-bold">
//           SPONSORS
//         </h1>
//       </div>{" "}
//       <div className="body5">
//         <div class="slider3">
//           <div class="slide-track">
//             <div class="slide3">
//               <img
//                 src="/munchys logo png (1).png"
//                 height="180"
//                 width="180"
//                 alt=""
//               />
//             </div>
//             <div class="slide3">
//               <img src="/papapizza.png" height="180" width="180" alt="" />
//             </div>
//             <div class="slide3">
//               <img
//                 src="/munchys logo png (1).png"
//                 height="180"
//                 width="180"
//                 alt=""
//               />
//             </div>
//             <div class="slide3">
//               <img src="/papapizza.png" height="180" width="180" alt="" />
//             </div>
//             <div class="slide3">
//               <img
//                 src="/munchys logo png (1).png"
//                 height="180"
//                 width="180"
//                 alt=""
//               />
//             </div>
//             <div class="slide3">
//               <img src="/papapizza.png" height="180" width="180" alt="" />
//             </div>
//             <div class="slide3">
//               <img
//                 src="/munchys logo png (1).png"
//                 height="180"
//                 width="180"
//                 alt=""
//               />
//             </div>
//             <div class="slide3">
//               <img src="/papapizza.png" height="180" width="180" alt="" />
//             </div>
//             <div class="slide3">
//               <img
//                 src="/munchys logo png (1).png"
//                 height="180"
//                 width="180"
//                 alt=""
//               />
//             </div>
//             <div class="slide3">
//               <img src="/papapizza.png" height="180" width="180" alt="" />
//             </div>
//             <div class="slide3">
//               <img
//                 src="/munchys logo png (1).png"
//                 height="180"
//                 width="180"
//                 alt=""
//               />
//             </div>
//             <div class="slide3">
//               <img src="/papapizza.png" height="180" width="180" alt="" />
//             </div>
//             <div class="slide3">
//               <img
//                 src="/munchys logo png (1).png"
//                 height="180"
//                 width="180"
//                 alt=""
//               />
//             </div>
//             <div class="slide3">
//               <img src="/papapizza.png" height="180" width="180" alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Advert;

import React from "react";
import Image from "next/image";

function Advert() {
  return (
    <div className="bg-black py-12 ">
      <div>
        <h1 className="text-center text-white text-4xl font-bold px-5">
          SPONSORS
        </h1>
      </div>
      <div>
        <div className="flex flex-wrap justify-center items-center gap-8 mt-20">
          <Image
            src="/papa2.png"
            width={150}
            height={150}
            alt="the bro code gh"
          />

          <Image
            src="/munchys.png"
            width={150}
            height={150}
            alt="the bro code gh"
          />
          <Image
            src="/tcl.png"
            width={150}
            height={100}
            alt="the bro code gh"
          />
        </div>
      </div>
    </div>
  );
}

export default Advert;
