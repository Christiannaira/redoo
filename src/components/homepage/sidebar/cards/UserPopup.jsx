import React, { useState } from "react";
import { createUser } from "../../../../services/UserServices";
import { IoMdClose } from "react-icons/io";

const UserPopup = ({ fetchUsers, setPopUpUser }) => {
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");

   const [fieldReminder, setFieldReminder] = useState("");

   const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
   const validatePassword = (password) => password.length >= 6;
   const validateUsername = (username) => username.length >= 3;

   const handleNewEntry = (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (username === "" || email === "" || password === "") {
         setFieldReminder("Please fill up the necessary info.");
      } else {
         if (password === "" || confirmPassword === "") {
            setFieldReminder("Your Password is empty");
         } else {
            if (password != confirmPassword) {
               setFieldReminder("Your password doesn't match");
               setPassword("");
               setConfirmPassword("");
            } else {
               const userEntry = {
                  username,
                  email,
                  password,
               };

               createUser(userEntry)
                  .then(() => {
                     alert("User added");
                     setUsername("");
                     setEmail("");
                     setPassword("");
                     setConfirmPassword("");
                     fetchUsers();
                     setPopUpUser(false);
                  })
                  .catch((err) => {
                     console.error(err);
                  });
            }
         }
      }
   };

   return (
      <div className="">
         <form onSubmit={handleNewEntry}>
            <div className="flex justify-between items-center">
               <h3 className="text-2xl font-bold">Add New User</h3>
               <IoMdClose
                  size={30}
                  className="text-[#222222] cursor-pointer"
                  onClick={() => setPopUpUser(false)}
               />
            </div>
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
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
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
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
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
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
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
                     value={confirmPassword}
                     onChange={(e) => setConfirmPassword(e.target.value)}
                  />
               </div>
               <div>
                  <h3>{fieldReminder ? fieldReminder : ""}</h3>
               </div>
               <button
                  type="submit"
                  className="px-5 py-3 w-35 max-w-full bg-[#FF6927] rounded-sm cursor-pointer text-[#f7f7f7] font-medium"
               >
                  Create User
               </button>
            </div>
         </form>
      </div>
   );
};

export default UserPopup;
