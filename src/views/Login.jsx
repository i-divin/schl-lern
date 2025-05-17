import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="max-w-md mx-auto">
      
    <div className="bg-amber-50 rounded-lg shadow-md p-8">
    <h1 className="text-3xl font-bold text-center text-black mb-6">Log In</h1>
      <form>
        <div className="mb-4">
          <label 
            htmlFor="email" 
            className="block text-gray-700 font-medium mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your email"
          />
        </div>
        
        <div className="mb-6">
          <label 
            htmlFor="password" 
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your password"
          />
        </div>
        
        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-amber-200 hover:bg-indigo-700 text-black py-2 px-4 rounded-md transition-colors disabled:opacity-75"
          >
          </button>
        </div>
        
        <div className="text-center text-gray-600">
          Don't have an account?
          <Link to="/register" className="text-black hover:text-indigo-800">
            Register
          </Link>
        </div>
      </form>
    </div>
  </div>
  );
}

export default Login;
