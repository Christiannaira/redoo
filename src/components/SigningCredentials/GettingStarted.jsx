import { useState } from "react";
import { Link } from "react-router-dom";

const GettingStarted = () => {
   return (
      <div className="min-h-screen flex items-center justify-center bg-[#fff5ef]">
         <div className="text-center bg-white p-10 rounded-2xl shadow-lg w-[90%] max-w-md border border-[#ff7f45]/20">
            <h1 className="text-2xl font-bold mb-6 text-[#ff7f45]">
               Welcome to Reedo Library Management System
            </h1>

            <div className="flex flex-col gap-4">
               <Link
                  to="/signup"
                  className="w-full py-3 bg-[#ff7f45] text-white rounded-lg text-lg font-medium hover:bg-[#ff965f] transition"
               >
                  Sign Up
               </Link>

               <Link
                  to="/signin"
                  className="w-full py-3 bg-[#ff9f70] text-white rounded-lg text-lg font-medium hover:bg-[#ff7f45] transition"
               >
                  Sign In
               </Link>
            </div>
         </div>
      </div>
   );
};

export default GettingStarted;
