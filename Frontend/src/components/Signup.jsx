import React from 'react'

function Signup() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <input type="text" placeholder="First Name" className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <input type="text" placeholder="Last Name" className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <input type="email" placeholder="Email" className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <input type="date" className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <input type="password" placeholder="Password" className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <input type="password" placeholder="Confirm Password" className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <button className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">Register</button>
      </div>
    </div>
  )
}

export default Signup
