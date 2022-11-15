import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { doc } from "firebase/firestore";
import { useNavigate } from "react-router";
export default function OAuth() {
  const navigate = useNavigate();
  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("Cant authotize with google");
      console.log(error);
    }
  }
  return (
    <button
      type="button"
      onClick={onGoogleClick}
      className="w-full flex items-center justify-center bg-red-500 rounded text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-700 active:bg-red-800 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out"
    >
      <FcGoogle className="text-2xl bg-white rounded-full mr-2" /> &nbsp;
      Continue with Google
    </button>
  );
}
