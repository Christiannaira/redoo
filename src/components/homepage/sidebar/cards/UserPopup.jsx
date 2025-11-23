import React from "react";

const UserPopup = () => {
   return (
      <div className="">
         <form>
            <h3 className="text-2xl font-bold">Add New User</h3>
            <div className="flex flex-col gap-4 mt-5">
               <div>
                  <label
                     htmlFor="username"
                     className="block font-medium text-[#515151]"
                  >
                     Username
                  </label>
                  <input
                     id="username"
                     name="username"
                     type="text"
                     placeholder="Enter username"
                     className="block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                  />
               </div>
               <div>
                  <label
                     htmlFor="email"
                     className="block font-medium text-[#515151]"
                  >
                     Email
                  </label>
                  <input
                     id="email"
                     name="email"
                     type="email"
                     placeholder="Enter email"
                     className="block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                  />
               </div>
               <div>
                  <label
                     htmlFor="password"
                     className="block font-medium text-[#515151]"
                  >
                     Password
                  </label>
                  <input
                     id="password"
                     name="password"
                     type="password"
                     placeholder="Enter password"
                     className="block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                  />
               </div>
               <div>
                  <label
                     htmlFor="confirmPassword"
                     className="block font-medium text-[#515151]"
                  >
                     Confirm Password
                  </label>
                  <input
                     id="confirmPassword"
                     name="confirmPassword"
                     type="password"
                     placeholder="Confirm Password"
                     className="block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                  />
               </div>
               <button>Add User</button>
            </div>
         </form>
      </div>
   );
};

export default UserPopup;
