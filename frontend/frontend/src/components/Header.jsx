import React from "react";

export const Header = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <svg 
              className="h-8 w-8 text-white mr-3" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h1 className="text-2xl font-bold text-white">
              Brain Tumour Detection System
            </h1>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="#" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium">FAQ</a>
            <a href="#" className="bg-white text-blue-700 hover:bg-blue-100 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;