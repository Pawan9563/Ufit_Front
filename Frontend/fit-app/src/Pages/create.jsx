import React, { useEffect } from "react";
import Silk from "../components/BgReactBits";

function Login() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3000/home/oauth/google";
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden ">
      {/* Silk background full-screen */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Silk />
      </div>

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Login Form centered */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white px-4">
        <h1 className="text-6xl font-bold mb-6 leading-tight">WELCOME BACK!</h1>
        <form className="flex flex-col gap-4 w-full max-w-xs">
          <input
            type="text"
            placeholder="Username"
            className="p-3 rounded bg-gray-800 placeholder-gray-400 text-white outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded bg-gray-800 placeholder-gray-400 text-white outline-none"
          />
          <button
            type="submit"
            className="p-3 rounded bg-purple-600 hover:bg-purple-700 transition"
          >
            Login
          </button>
        </form>
        <button
          onClick={handleGoogleLogin}
          className="flex items-center gap-3 p-3 bg-white text-black rounded hover:bg-gray-200 transition"
        >
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google logo"
            className="w-5 h-5"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default Login;