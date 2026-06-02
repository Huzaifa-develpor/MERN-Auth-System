import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../Components/Login'
import Signin from '../Components/Signin'
import Home from '../Components/Home'
import ProtectedRoute from './ProtectedRoute'
const AppRouter = () => {
  return (

    <div>
      <Router>
        <Routes>
          <Route path="/home" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  )
}


export default AppRouter
