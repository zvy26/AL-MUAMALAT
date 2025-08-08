import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Added import
import { Phone, Eye, EyeOff, User } from "lucide-react";
import LoginImage from "../../../assets/images/LoginImage.png";
import LoginLogo from "../../../assets/images/LoginLogo.png";
import LoginAva from "../../../assets/images/LoginAva.png";

export default function SignUp() {
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
          <div className="flex items-center space-x-2 text-gray-600">
            <span className="relative bottom-10 left-28 text-sm">Questions?</span>
            <span className="relative bottom-8 left-9 text-sm font-bold text-teal-600">
              <br />Ask Diyor
            </span>
            <img
              src={LoginAva}
              alt="Diyor's Avatar"
              width={90}
              height={40}
              className="relative bottom-10 left-20 rounded-full"
            />
          </div>
        </header>

        <main className="mx-auto w-full max-w-md space-y-6">
          <div>
            <h1 className="text-5xl font-extrabold text-black mb-2">Get started</h1>
            <p className="text-gray-500">
              Already have an account?{" "}
              <Link to="/login" className="text-teal-600 font-semibold">
                Sign in
              </Link>
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                />
                <User className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="relative">
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                />
                <Phone className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                />
                {showPassword ? (
                  <EyeOff
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 cursor-pointer"
                  />
                ) : (
                  <Eye
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 cursor-pointer"
                  />
                )}
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full rounded-lg bg-teal-600 px-4 py-3 text-white font-semibold hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600 transition-colors"
            >
              Sign Up
            </button>
          </div>
        </main>
      </div>

      {/* Right side image */}
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
