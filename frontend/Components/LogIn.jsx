import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const [loginData, setloginData] = useState({
    email: "",
    password: ""
  })

  const checkUser = (res) => {
    if (res.data.message === "Login Successful" || res.data.status==200) {
      navigate("/home")
      localStorage.setItem("token", res.data.token)
    }
    if (res.data.message === "Invalid Credentials" || res.data.status==401) {
      setError("Invalid Email or Password")
    }
  }

  const onChange = (e) => {
    setError("") 
    setloginData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("https://mern-auth-system-production-2000.up.railway.app/auth/web/login", loginData)
      .then((res) => {
        setloginData({
          email: "",
          password: ""
        })
        checkUser(res)
      })
      .catch((err) => {
        setError("Server Error. Please try again later.")
      })
  }

  return (
    // Light Background with matching background glow effects
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 relative overflow-hidden">
      
      {/* Aesthetic background shapes */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      {/* Main Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100 z-10">
        
        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-center text-slate-800 tracking-tight">
          Welcome Back
        </h1>

        <p className="text-center text-slate-500 mt-2 text-sm">
          Please enter your details to sign in
        </p>

        {/* Form */}
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          
          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={loginData.email}
            onChange={onChange}
            required
            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-slate-50/50 transition-all"
          />

          {/* Password Input */}
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={loginData.password}
            onChange={onChange}
            required
            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-slate-50/50 transition-all"
          />

          {/* Error Message Display */}
          {error && (
            <p className="text-rose-500 text-xs font-medium pl-1">{error}</p>
          )}

          {/* Premium Gradient Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3.5 rounded-xl font-semibold hover:opacity-95 active:scale-[0.99] transition shadow-md shadow-emerald-500/10 mt-2"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center mt-6 text-sm text-slate-500">
          Don't have an account?{" "}
          <Link to="/register" className="text-emerald-600 font-semibold hover:underline underline-offset-4">
            Sign up
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Login