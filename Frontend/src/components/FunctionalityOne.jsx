import React from 'react'


function FunctionalityOne() {
  return (
    <div>
        <div className="bg-white text-blue-900 h-screen p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-blue-600 text-3xl font-bold">Welcome, User</h1>
        <div className="w-10 h-10 rounded-full border-4 border-blue-600"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="flex flex-col justify-center items-center bg-blue-100 text-blue-900 h-28 cursor-pointer hover:shadow-lg rounded-lg">
          <div className="w-8 h-8 border-2 border-blue-900 flex items-center justify-center rounded-full">+</div>
          <span className="mt-2 text-lg font-medium">Create</span>
        </div>
        {["Result 1", "Result 2", "Result 3"].map((result, index) => (
          <div
            key={index}
            className="flex justify-center items-center bg-blue-50 text-blue-800 h-28 cursor-pointer hover:shadow-lg rounded-lg"
          >
            <span className="text-lg font-medium">{result}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Search in Database
        </button>
      </div>
    </div>
       
    </div>
  )
}

export default FunctionalityOne