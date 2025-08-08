import React, { useState } from "react";
import { Phone, Eye, EyeOff } from "lucide-react";
import LoginImage from "../../../assets/images/LoginImage.png";
import LoginLogo from "../../../assets/images/LoginLogo.png";
import LoginAva from "../../../assets/images/LoginAva.png"
import { Link } from "react-router-dom";


export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col justify-center p-8 lg:p-12">
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center space-x-2">
            <img
              src={LoginLogo}
              alt="Al Muamalat Logo"
              width={230}
              height={200}
              className="relative left-30 bottom-10"
            />
          </div>
          <div className=" flex items-center space-x-2  text-gray-600">
            <span className="relative bottom-10 left-28 text-sm"> Questions?</span>
            <span className=" relative  bottom-8 left-9 text-sm font-bold text-teal-600"><br/>Ask Diyor</span>
            <img
              src={LoginAva}
              alt="Diyor's Avatar"
              width={90}
              height={40}
              className=" relative bottom-10 left-20 rounded-full"
            />
          </div>
        </header>
        <main className="mx-auto w-full max-w-md space-y-6">
          <h1 className="text-5xl font-extrabold">Get started</h1>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium">
                Enter your phone number
              </label>
              <div className="relative">
                <input
                  id="phone"
                  type="tel"
                  placeholder="+(998) 99 123-12-34"
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
                <Phone className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-teal-600 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="w-full rounded-md bg-teal-600 px-4 py-2 text-white font-semibold hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600"
            >
              Sign in
            </button>
          </div>
          <div className="mt-4 text-center text-sm">
            Create a new account?{" "}
            <Link to="/register" className="font-semibold text-teal-600">
              Sign up
            </Link>
          </div>
        </main>
      </div>
      <div className="hidden bg-teal-600 lg:flex items-center justify-center bg-primary-green p-8 rounded-l-3xl overflow-hidden">
        <div className="text-center text-white space-y-4 max-w-lg">
          <img
            src={LoginImage}
            alt="Illustration of a person interacting with a mobile app, representing Islamic Finance"
            width={800}
            height={600}
            className="max-w-full h-auto"
          />
          <h2 className="text-4xl font-bold leading-tight">
            Welcome to Al Muamalat – Empowering Your Journey in Islamic Finance
          </h2>
        </div>
      </div>
    </div>
  );
}