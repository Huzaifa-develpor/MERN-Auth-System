import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  // Pehle wale form ki state (Name, Email, Password)
  const [signinData, setSigninData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setError("");
    setSigninData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Pehle wale form ki API hit logic
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/auth/web/register", signinData)
      .then((res) => {
        setSigninData({
          name: "",
          email: "",
          password: ""
        });
        navigate("/");
      }).catch((err) => {
        setError("Something went wrong. Please try again.");
      });
  };

  return (
    // Light Background with subtle gradient glow
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 relative overflow-hidden">
      
      {/* Subtle aesthetic background shapes */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      {/* Main Card (Light Theme) */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100 z-10">
        
        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-center text-slate-800 tracking-tight">
          Create Account
        </h1>

        <p className="text-center text-slate-500 mt-2 text-sm">
          Get started with your free account today
        </p>

        {/* Form */}
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          
          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Enter Full Name"
            value={signinData.name}
            onChange={onChange}
            required
            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-slate-50/50 transition-all"
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={signinData.email}
            onChange={onChange}
            required
            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-slate-50/50 transition-all"
          />

          {/* Password Input */}
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={signinData.password}
            onChange={onChange}
            required
            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-slate-50/50 transition-all"
          />

          {/* Error Message */}
          {error && (
            <p className="text-rose-500 text-xs font-medium pl-1">{error}</p>
          )}

          {/* Premium Gradient Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3.5 rounded-xl font-semibold hover:opacity-95 active:scale-[0.99] transition shadow-md shadow-emerald-500/10 mt-2"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-center mt-6 text-sm text-slate-500">
          Already have an account?{" "}
          <Link to="/" className="text-emerald-600 font-semibold hover:underline underline-offset-4">
            Log in
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Signin;