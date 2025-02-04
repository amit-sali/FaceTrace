import React from "react";

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <h2 class="text-2xl font-bold mb-4">Log In</h2>
        <input
          type="email"
          placeholder="example@gmail.com"
          class="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="password"
          class="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button class="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          Log In
        </button>
        <div class="flex justify-center items-center mt-4">
        <p class="text-gray-600 mx-4">New user?</p>
          <a href="/register" class="text-blue-500 font-medium mr-1">
            Sign Up
          </a>

          

        </div>
        <div class="flex justify-center gap-4 mt-4">
          <button class="p-3 bg-gray-200 rounded-full">
            <img
              src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
              alt="Google"
              class="w-6 h-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
