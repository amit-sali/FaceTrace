import React from 'react';
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className="bg-white text-black px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-semibold">
          FaceTrace
        </div>

        {/* Navigation Links , only change color of active link */}
        <div className="space-x-6">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-gray-700 font-bold" : "text-black hover:text-gray-700 transition duration-300"}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-gray-700 font-bold" : "text-black hover:text-gray-700 transition duration-300"}>About</NavLink>
          <NavLink to="/login" className={({ isActive }) => isActive ? "text-gray-700 font-bold" : "text-black hover:text-gray-700 transition duration-300"}>Login</NavLink>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
