// components/SignUp.js
"use client";
import { useState } from "react";
import Navbar2 from "./Navbar2";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import Link from "next/link";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [verificationSent, setVerificationSent] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      if (!agreedToTerms) {
        setErrorMessage("You must agree to the terms and conditions.");
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await sendEmailVerification(user);
      setVerificationSent(true);
    } catch (error) {
      console.error("Error signing up:", error);
      setErrorMessage(error.message);
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
      setErrorMessage(error.message);
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
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={agreedToTerms}
            onChange={() => setAgreedToTerms(!agreedToTerms)}
            className="form-checkbox text-primary"
          />
          <label className="text-sm">
            I agree to the{" "}
            <Link
              className="underline text-primary"
              href="/terms-and-conditions"
            >
              terms and conditions
            </Link>
          </label>
        </div>

        {errorMessage && (
          <p className="text-red-500 text-center">{errorMessage}</p>
        )}

        {verificationSent && (
          <div className="text-center text-green-500">
            Verification email sent! Please check your email to verify your
            account.
          </div>
        )}

        <button
          type="submit"
          className={`w-full p-2 font-bold ${
            agreedToTerms
              ? "bg-primary text-secondary"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!agreedToTerms}
        >
          Sign Up
        </button>
      </form>

      <button
        onClick={handleGoogleSignUp}
        className={` w-96 p-2 font-bold ${
          agreedToTerms
            ? "bg-primary text-secondary"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
        disabled={!agreedToTerms}
      >
        Sign Up with Google
      </button>

      <h1 className="text-white text-sm mt-5 text-center">
        Already have an Account?{" "}
        <Link className="underline text-xl font-bold" href="/LogIn">
          Log In
        </Link>{" "}
      </h1>
    </div>
  );
}

export default SignUp;
