import React from 'react'
import { useNavigate } from 'react-router-dom' // Ya jo bhi aap logout ke liye use karein

const Home = () => {
  return (
    // Matching Light Background with subtle gradient glow
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 relative overflow-hidden">
      
      {/* Aesthetic background shapes */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      {/* Main Home Card */}
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-10 border border-slate-100 z-10 text-center space-y-6">
        
        {/* Success Icon / Badge */}
        <div className="mx-auto w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100 shadow-sm animate-bounce-short">
          <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>

        {/* Headings */}
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight sm:text-4xl">
            Welcome to the Home Page
          </h1>
          
          {/* Aapka manga hua paragraph */}
          <p className="text-emerald-600 font-medium bg-emerald-50/50 inline-block px-4 py-1.5 rounded-full text-sm border border-emerald-100/60">
            ✨ You are successfully logged in!
          </p>
        </div>

        {/* Placeholder Content / Divider */}
        <div className="border-t border-slate-100 pt-6">
          <p className="text-slate-500 text-sm leading-relaxed max-w-md mx-auto">
            This is your secure dashboard space. This project mainly focuses on authentication and JWT.
          </p>
        </div>

       

      </div>
    </div>
  )
}

export default Home