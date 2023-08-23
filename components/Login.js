"use client";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";
import { useState } from "react";
import Navbar from "./Navbar2";
import Link from "next/link";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmailError(null);
    setPasswordError(null);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/";
    } catch (err) {
      switch (err.code) {
        case "auth/user-not-found":
          setEmailError("Cannot find email. Please sign up.");
          break;
        case "auth/wrong-password":
          setPasswordError("Wrong password. Try again");
          break;
        default:
          setError(err.message);
          break;
      }
    }
  };
  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      window.location.href = "/";
    } catch (err) {
      setError("Failed to login with Google. Please try again.");
    }
  };

  return (
    <div>
      {" "}
      <div className="min-h-screen  pb-20 md:-mt-0 flex justify-center flex-col items-center bg-secondary">
        <Navbar />
        <div className="bg-primary p-8 rounded-lg shadow-md md:w-96 w-80">
          <h1 className="text-2xl font-bold mb-4 text-white text-center">
            Login
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded"
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-2">{emailError}</p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded"
              />
              {passwordError && (
                <p className="text-red-500 text-sm mt-2">{passwordError}</p>
              )}
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full p-2 bg-secondary hover:bg-secondary/80 text-white rounded"
            >
              Login
            </button>
          </form>
          <button
            onClick={handleGoogleLogin}
            className="w-full mt-5 p-2 bg-gold text-white rounded border hover:bg-secondary border-black"
          >
            Login with Google
          </button>
          <h1 className="text-white text-sm mt-5 text-center">
            Do not have an Account?{" "}
            <Link href="/SignUp" className="underline text-xl font-bold">
              Sign Up
            </Link>{" "}
            <span></span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Login;
