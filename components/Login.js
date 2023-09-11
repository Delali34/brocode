"use client";
import { auth, signInWithEmailAndPassword } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import Navbar from "./Navbar2";
import Link from "next/link";
import { analytics } from "../firebase";
import { logEvent } from "firebase/analytics";

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
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      if (!user.emailVerified) {
        setError(
          "Email not verified. Please check your email for the verification link."
        );
        await user.sendEmailVerification(); // automatically send a new verification email
        logEvent(analytics, "login_error", {
          error_message: "Email not verified",
        });
        return;
      }
      window.location.href = "/";
      logEvent(analytics, "login", { method: "email_and_password" });
    } catch (err) {
      logEvent(analytics, "login_error", { error_message: err.message });
      console.error(err);
      switch (err.code) {
        case "auth/user-not-found":
          setEmailError("No account found with this email. Please sign up.");
          break;
        case "auth/wrong-password":
          setPasswordError("Incorrect password. Please try again.");
          break;
        case "auth/too-many-requests":
          setError(
            "Too many unsuccessful login attempts. Please try again later."
          );
          break;
      }
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);

      console.log("Signed up with Google.");

      // Redirecting after sign up with Google
      if (typeof window !== "undefined") {
        window.location.href = "/";
      }
      logEvent(analytics, "login", { method: "google" });
    } catch (err) {
      console.error(err);
      switch (err.code) {
        case "auth/unauthorized-domain":
          setErrorMessage("error. Please sign up.");
          break;
      }
      logEvent(analytics, "login_error", {
        method: "google",
        error_message: err.message,
      });
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
