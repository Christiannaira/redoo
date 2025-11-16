import React from "react";

const SignUp = () => {
   return (
      <div className="w-screen h-screen p-5">
         <div className="grid grid-cols-2 gap-4">
            <div>
               <h2 className="text-blue-500 text-5xl">Sign Up</h2>
               <p>Manage Library Books With Ease</p>
               <form action="">
                  <input
                     type="text"
                     placeholder="Enter Your Username"
                     className="block w-1/2 border border-solid border-gray-200 p-3 mb-3 rounded-sm bg-gray-50"
                  />
                  <input
                     type="email"
                     placeholder="Enter Your Email"
                     className="block w-1/2 border border-solid border-gray-200 p-3 mb-3 rounded-sm bg-gray-50"
                  />
                  <input
                     type="password"
                     placeholder="Enter Your Password"
                     className="block w-1/2 border border-solid border-gray-200 p-3 mb-3 rounded-sm bg-gray-50"
                  />
                  <input
                     type="password"
                     placeholder="Confirm Your Password"
                     className="block w-1/2 border border-solid border-gray-200 p-3 mb-3 rounded-sm bg-gray-50"
                  />
               </form>
            </div>
            <div>hello</div>
         </div>
      </div>
   );
};

export default SignUp;
