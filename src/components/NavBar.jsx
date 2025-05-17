import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-amber-100 p-4 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-black text-4xl font-bold">
          <Link to="/">P MANNAGER</Link>
        </div>
        <div className="flex items-center space-x-4 gap-4" >
          <Link to="/"className="text-black hover:text-indigo-200">Home</Link>
          <Link to="/services"className="text-black hover:text-indigo-200">Service</Link>
          <div className="flex items-center space-x-4">
            
              <Link
               to="/login"className="text-black bg-white hover:text-green-100"
               >LOGIN
               </Link>
            
            
              <Link
               to="/register"className="bg-white text-black px-4 py-2 rounded-md hover:bg-indigo-100 transition-colors"
               >JOIN NOW
               </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
