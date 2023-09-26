"use client";
import React, { useState, useEffect } from "react";
import BlogHead from "@/components/BlogHead";
import Navbar from "@/components/Navbar";
import DonateHeader from "@/components/DonateHeader";
import { PaystackButton } from "react-paystack";

import dynamic from "next/dynamic";

import { auth } from "@/firebase";
import { useRouter } from "next/navigation";

function Page() {
  const [donationAmount, setDonationAmount] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const [isUserAuthenticated, setUserAuthenticated] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserAuthenticated(true);
      } else {
        setUserAuthenticated(false);
        router.push("/LogIn"); // Adjust the route to your login page
      }
    });
  }, [router]);

  // If authentication status is null, return null to prevent flash of content
  if (isUserAuthenticated === null) return null;

  const handleDonationClick = (amount) => {
    setDonationAmount(amount);
  };

  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount: Number(donationAmount) * 100,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_KEY,
    currency: "GHS",
  };

  const onSuccess = (reference) => {
    let message = `Payment completed! Reference ${reference.reference}`;
    alert(message);
    setFirstName("");
    setLastName("");
    setEmail("");
    setDonationAmount("");
  };

  const onClose = () => {
    alert("You have canceled the transaction");
  };

  return (
    <div className="bg-black">
      <DonateHeader />
      <section className="container mx-auto lg:px-10 lg:py-20">
        <div className="">
          <h1 className="text-white text-center text-4xl lg:text-6xl mt-10 font-extrabold ">
            Donate to change a{" "}
            <span className="text-primary lg:text-7xl text-5xl">life</span>
          </h1>
        </div>
        <div className=" mt-10 ">
          {/* Donation Options */}
          <div className="bg-primary  text-black py-8">
            <div className="container mx-auto text-center">
              <div className="mt-4 m-10">
                <label
                  htmlFor="custom-amount"
                  className="block text-lg font-semibold"
                ></label>
                <input
                  type="text"
                  required
                  id="firstname"
                  className="w-full bg-black text-primary border-2 border-gold rounded-lg p-3 text-lg focus:outline-none focus:border-opacity-50"
                  placeholder="Your First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="mt-4 m-10">
                <label
                  htmlFor="custom-amount"
                  className="block text-lg font-semibold"
                ></label>
                <input
                  type="text"
                  id="lastname"
                  required
                  className="w-full bg-black text-primary border-2 border-gold rounded-lg p-3 text-lg focus:outline-none focus:border-opacity-50"
                  placeholder="Your Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="mt-4 m-10">
                <label
                  htmlFor="custom-amount"
                  className="block text-lg font-semibold"
                ></label>
                <input
                  type="email"
                  required
                  id="email"
                  className="w-full bg-black text-primary border-2 border-gold rounded-lg p-3 text-lg focus:outline-none focus:border-opacity-50"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                {" "}
                <h3 className="text-2xl font-bold mb-4">
                  Choose an amount to donate
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => handleDonationClick("100")}
                    className="bg-black text-primary hover:bg-opacity-80 py-3 px-6 rounded-lg text-lg font-semibold transition duration-300"
                  >
                    100
                  </button>
                  <button
                    type="submit"
                    onClick={() => handleDonationClick("500")}
                    className="bg-black text-primary hover:bg-opacity-80 py-3 px-6 rounded-lg text-lg font-semibold transition duration-300"
                  >
                    500
                  </button>
                  <button
                    onClick={() => handleDonationClick("1000")}
                    className="bg-black text-primary hover:bg-opacity-80 py-3 px-6 rounded-lg text-lg font-semibold transition duration-300"
                  >
                    1000
                  </button>
                  <button
                    onClick={() => handleDonationClick("2000")}
                    className="bg-black text-primary hover:bg-opacity-80 py-3 px-6 rounded-lg text-lg font-semibold transition duration-300"
                  >
                    2000
                  </button>
                </div>
              </div>

              {/* Custom Donation Amount */}
              <div className="mt-4 m-10">
                <label
                  htmlFor="custom-amount"
                  className="block text-lg font-semibold"
                >
                  Or enter a custom amount:
                </label>
                <input
                  type="number"
                  id="custom-amount"
                  className="w-full bg-black text-primary border-2 border-gold rounded-lg p-3 text-lg focus:outline-none focus:border-opacity-50"
                  placeholder="Enter custom amount"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                />
              </div>
              <div className="flex justify-center">
                {" "}
                <div className="bg-white w-[130px] font-semibold rounded-xl hover:bg-black cursor-pointer hover:text-white p-3">
                  <PaystackButton
                    {...config}
                    text="Donate Now"
                    onSuccess={onSuccess}
                    onClose={onClose}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
}

export default Page;

// "use client";

// import React, { useState, useEffect } from "react";
// import BlogHead from "@/components/BlogHead";
// import Navbar from "@/components/Navbar";

// import dynamic from "next/dynamic";

// import { auth } from "@/firebase";
// import { useRouter } from "next/navigation";

// // const DynamicPaystackPop = dynamic(() => import("@paystack/inline-js"), {
// //   ssr: false, // This ensures it's only loaded on the client-side
// // });
// import PaystackPop from "@paystack/inline-js";

// function Payment() {
//   const [donationAmount, setDonationAmount] = useState("");

//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const router = useRouter();

//   const [isUserAuthenticated, setUserAuthenticated] = useState(null);

//   useEffect(() => {
//     auth.onAuthStateChanged((user) => {
//       if (user) {
//         setUserAuthenticated(true);
//       } else {
//         setUserAuthenticated(false);
//         router.push("/LogIn"); // Adjust the route to your login page
//       }
//     });
//   }, [router]);

//   // If authentication status is null, return null to prevent flash of content
//   if (isUserAuthenticated === null) return null;

//   const handleDonationClick = (amount) => {
//     setDonationAmount(amount);
//   };

//   const paywithpaystack = (e) => {
//     e.preventDefault();

//     // Check if we are in a browser environment

//     const paystack = new PaystackPop();
//     paystack.newTransaction({
//       key: "pk_test_e23be9b1d36684d1aac346d5630fe55846e10cb6",
//       amount: donationAmount * 100,
//       email,
//       first_name: firstName,
//       last_name: lastName,
//       callback: (response) => {
//         let message = `Payment completed! Reference ${response.reference}`;
//         alert(message);
//         setFirstName("");
//         setLastName("");
//         setEmail("");
//         setDonationAmount("");
//       },
//       onClose: () => {
//         alert("You have cancelled the transaction");
//       },
//     });
//   };

//   return (
//     <div className="bg-black">
//       <BlogHead />
//       <section className="container mx-auto lg:px-10 lg:py-20">
//         <div className="">
//           <h1 className="text-white text-center text-4xl lg:text-6xl mt-10 font-extrabold ">
//             Donate to change a{" "}
//             <span className="text-primary lg:text-7xl text-5xl">life</span>
//           </h1>
//         </div>
//         <div className=" mt-10 ">
//           {/* Donation Options */}
//           <div className="bg-primary  text-black py-8">
//             <div className="container mx-auto text-center">
//               <div className="mt-4 m-10">
//                 <label
//                   htmlFor="custom-amount"
//                   className="block text-lg font-semibold"
//                 ></label>
//                 <input
//                   type="text"
//                   required
//                   id="firstname"
//                   className="w-full bg-black text-primary border-2 border-gold rounded-lg p-3 text-lg focus:outline-none focus:border-opacity-50"
//                   placeholder="Your First Name"
//                   value={firstName}
//                   onChange={(e) => setFirstName(e.target.value)}
//                 />
//               </div>
//               <div className="mt-4 m-10">
//                 <label
//                   htmlFor="custom-amount"
//                   className="block text-lg font-semibold"
//                 ></label>
//                 <input
//                   type="text"
//                   id="lastname"
//                   required
//                   className="w-full bg-black text-primary border-2 border-gold rounded-lg p-3 text-lg focus:outline-none focus:border-opacity-50"
//                   placeholder="Your Last Name"
//                   value={lastName}
//                   onChange={(e) => setLastName(e.target.value)}
//                 />
//               </div>
//               <div className="mt-4 m-10">
//                 <label
//                   htmlFor="custom-amount"
//                   className="block text-lg font-semibold"
//                 ></label>
//                 <input
//                   type="email"
//                   required
//                   id="email"
//                   className="w-full bg-black text-primary border-2 border-gold rounded-lg p-3 text-lg focus:outline-none focus:border-opacity-50"
//                   placeholder="Your Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div>
//                 {" "}
//                 <h3 className="text-2xl font-bold mb-4">
//                   Choose an amount to donate
//                 </h3>
//                 <div className="flex flex-wrap justify-center gap-4">
//                   <button
//                     onClick={() => handleDonationClick("100")}
//                     className="bg-black text-primary hover:bg-opacity-80 py-3 px-6 rounded-lg text-lg font-semibold transition duration-300"
//                   >
//                     100
//                   </button>
//                   <button
//                     type="submit"
//                     onClick={() => handleDonationClick("500")}
//                     className="bg-black text-primary hover:bg-opacity-80 py-3 px-6 rounded-lg text-lg font-semibold transition duration-300"
//                   >
//                     500
//                   </button>
//                   <button
//                     onClick={() => handleDonationClick("1000")}
//                     className="bg-black text-primary hover:bg-opacity-80 py-3 px-6 rounded-lg text-lg font-semibold transition duration-300"
//                   >
//                     1000
//                   </button>
//                   <button
//                     onClick={() => handleDonationClick("2000")}
//                     className="bg-black text-primary hover:bg-opacity-80 py-3 px-6 rounded-lg text-lg font-semibold transition duration-300"
//                   >
//                     2000
//                   </button>
//                 </div>
//               </div>

//               {/* Custom Donation Amount */}
//               <div className="mt-4 m-10">
//                 <label
//                   htmlFor="custom-amount"
//                   className="block text-lg font-semibold"
//                 >
//                   Or enter a custom amount:
//                 </label>
//                 <input
//                   type="number"
//                   id="custom-amount"
//                   className="w-full bg-black text-primary border-2 border-gold rounded-lg p-3 text-lg focus:outline-none focus:border-opacity-50"
//                   placeholder="Enter custom amount"
//                   value={donationAmount}
//                   onChange={(e) => setDonationAmount(e.target.value)}
//                 />
//               </div>

//               {/* Donate Button */}
//               <button
//                 onClick={paywithpaystack}
//                 className="mt-4 bg-black text-white hover:bg-opacity-80 py-3 px-6 rounded-lg text-lg font-semibold transition duration-300"
//               >
//                 Donate Now
//               </button>
//             </div>
//           </div>
//         </div>
//         <div></div>
//       </section>
//     </div>
//   );
// }

// export default Payment;
