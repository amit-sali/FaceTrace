import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white text-black px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-semibold">
          FaceTrace
        </div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <button className="text-black hover:text-gray-700 transition duration-300">Home</button>
          <button className="text-black hover:text-gray-700 transition duration-300">About</button>
          <button className="text-black hover:text-gray-700 transition duration-300">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
