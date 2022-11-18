import React from "react";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { async } from "@firebase/util";
import { toast } from "react-toastify";
export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { name, email, password } = formData;
  const formDataOnChange = (e) => {
    console.log(e.target.value, formData.email);
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const showPasswordOnClick = (e) => {
    setShowPassword((prevState) => !prevState);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      updateProfile(auth.currentUser, {
        displayName: name,
      });
      const user = userCredential.user;
      const formDataCopy = { ...formData };
      // delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      console.log(user);
      await setDoc(doc(db, "users", user.uid), formDataCopy);
      navigate("/");
      toast.success(`Registration Successful!`);
    } catch (error) {
      toast.error(`${error}`);
    }
  };
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign Up</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-width-6xl">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full px-20 md:w-[67%] lg:w-[40%]">
          <form onSubmit={onSubmit}>
            <input
              className="w-full"
              type="text"
              id="name"
              value={name}
              onChange={formDataOnChange}
              placeholder="Full Name"
              className="w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            />
            <input
              className="w-full"
              type="email"
              id="email"
              value={email}
              onChange={formDataOnChange}
              placeholder="name@email.wht"
              className="w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            />
            <div className="w-full relative">
              <input
                className="w-full "
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={formDataOnChange}
                placeholder="password"
                className="w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={showPasswordOnClick}
                />
              ) : (
                <AiFillEye
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={showPasswordOnClick}
                />
              )}
            </div>
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Have an account?{" "}
                <Link
                  to="/SignIn"
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
                >
                  Sign in
                </Link>
              </p>
              <p>
                <Link
                  to="/ForgotPassword"
                  className="text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out "
                >
                  Forgot your password?
                </Link>
              </p>
            </div>
            <button
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
              type="submit"
            >
              Sign up
            </button>
            <div className="my-4 before:border-t flex before:flex-1 items-center before:border-gray-300 after:border-t flex after:flex-1 items-center after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
