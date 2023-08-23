// components/SignUp.js
"use client";
import { useState } from "react";
import Navbar2 from "./Navbar2";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import Link from "next/link";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [dob, setDob] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Signed up successfully.");
      // Redirecting after sign up
      if (typeof window !== "undefined") {
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Error signing up: ", error);
    }
  };

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log("Signed up with Google.");
      // Redirecting after sign up with Google
      if (typeof window !== "undefined") {
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Error signing up with Google: ", error);
    }
  };

  return (
    <div className="signup-container bg-secondary pb-28 text-primary min-h-screen flex flex-col justify-center items-center">
      <Navbar2 />
      <form onSubmit={handleSignUp} className="w-96 space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border-2 border-primary bg-transparent text-primary"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 border-2 border-primary bg-transparent text-primary"
        />
        {/* <input
          type="date"
          placeholder="Date of Birth"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
          className="w-full p-2 border-2 border-primary bg-transparent text-primary"
        /> */}

        <button
          type="submit"
          className="w-full p-2 bg-primary text-secondary font-bold"
        >
          Sign Up
        </button>
      </form>
      <button
        onClick={handleGoogleSignUp}
        className="w-96 p-2 mt-4 bg-primary text-secondary font-bold"
      >
        Sign Up with Google
      </button>
      <h1 className="text-white text-sm mt-5 text-center">
        Already have an Account?{" "}
        <Link href="/LogIn" className="underline text-xl font-bold">
          Log In
        </Link>{" "}
        <span></span>
      </h1>
    </div>
  );
}

export default SignUp;
