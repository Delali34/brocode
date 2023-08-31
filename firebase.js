// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChLPTEIF9Y-N29PMzzrnxSjb11hMOJNoM",
  authDomain: "the-bro-code-39cf4.firebaseapp.com",
  projectId: "the-bro-code-39cf4",
  storageBucket: "the-bro-code-39cf4.appspot.com",
  messagingSenderId: "309913474615",
  appId: "1:309913474615:web:bdb1a69fcd0f68ca4651b2",
  measurementId: "G-BM2LC4F36R",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Error during Google sign-in", error);
    throw error;
  }
};
auth.settings.appVerificationDisabledForTesting = false;
export { signOut };
export { auth };
export { signInWithEmailAndPassword };
