import React, { useEffect, useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { AuthContext } from "../AuthContext";
import Footer from "./Footer";
import Navbar from "./Navbar";


const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const signin = async () => {
    try {
      const response = await axios.post(
        "https://ai-chefgenerator.vercel.app/signin",
        { username, password }
      );
      setResponseMessage(response.data.msg);
      if (response.data.msg === "Login successful") {
        login(response.data.username);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error during signin:", error);
    }
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-white via-gray-100 to-gray-200">
        <Navbar/>

      <div className="m-6">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-extrabold text-orange-500 mb-2">
              Foodiee
            </h1>
            <p className="text-gray-500">Explore and Share Delicious Recipes</p>
          </div>

          <form className="space-y-4">
          <input
            type="text"
            id="email"
            name="username"
            placeholder="Enter your email"
            onChange={(e)=>{
              setUsername(e.target.value)
            }}
            className="w-full p-3 rounded-md border-gray-300 focus:border focus:bg-gray-50 shadow-sm bg-gray-100"
          />
          <input
            type="text"
            name="password"
            id="password"
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            placeholder="Enter your password"
            className="w-full p-3 rounded-md border-gray-300 focus:border focus:bg-gray-50 shadow-sm my-4 bg-gray-100"
          />
           {responseMessage && (
              <div className="my-1 text-red-500 text-sm">
                {responseMessage}
              </div>
            )}

            <button
              className="bg-orange-500 text-lg font-bold text-white p-3 rounded-xl w-full hover:bg-orange-600 transition duration-300"
              type="button"
              onClick={signin}
            >
              Sign In
            </button>
          </form>

          <div className="mt-4 flex flex-row">
            <p className="text-gray-500 text-sm">
              Already a member?{" "}
              <a href="#/signup" className="text-sm text-black font-bold underline">
                Log in here
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <Footer/>

    </div>
  );
};
export default Login;
