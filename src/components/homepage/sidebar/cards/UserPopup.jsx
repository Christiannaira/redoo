import React, { useState } from "react";
import { createUser, createGuestUser } from "../../../../services/UserServices";
import { IoMdClose } from "react-icons/io";

const UserPopup = ({ fetchUsers, setPopUpUser }) => {
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [role, setRole] = useState("");

   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [address, setAddress] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");

   const [fieldReminder, setFieldReminder] = useState("");

   const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
   const validatePassword = (password) => password.length >= 6;
   const validateUsername = (username) => username.length >= 3;

   const handleNewEntry = (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (role === "Non-User") {
         if (
            firstName === "" ||
            lastName === "" ||
            email === "" ||
            address === "" ||
            phoneNumber === ""
         ) {
            setFieldReminder("Please fill up the necessary info.");
         } else {
            const guestEntry = {
               firstName,
               lastName,
               email,
               address,
               phoneNumber,
            };

            createGuestUser(guestEntry)
               .then(() => {
                  alert("added");
                  setFirstName("");
                  setLastName("");
                  setEmail("");
                  setAddress("");
                  setPhoneNumber("");
                  fetchUsers();
                  setPopUpUser(false);
               })
               .catch((err) => {
                  // console.error(err);
                  // alert("Successfully User Added");
               });
         }
      } else {
         alert("hello");
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
                  setRole("");
               } else {
                  const userEntry = {
                     username,
                     email,
                     password,
                     role,
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
                        // console.error(err);
                     });
               }
            }
         }
      }
   };

   return (
      <div className="">
         <form onSubmit={handleNewEntry}>
            <div className="flex justify-between items-center">
               <h3 className="text-2xl font-bold">
                  {role === "Non-User" ? "Add Guest" : "Add New User"}
               </h3>
               <IoMdClose
                  size={30}
                  className="text-[#222222] cursor-pointer"
                  onClick={() => setPopUpUser(false)}
               />
            </div>
            <div className="flex flex-col gap-4 mt-5">
               {role === "Non-User" ? (
                  <>
                     <div>
                        <div className="grid grid-cols-2 gap-3 mt-5">
                           <div>
                              <label
                                 htmlFor="firstName"
                                 className="block font-medium text-[#515151]"
                              >
                                 FirstName
                              </label>
                              <input
                                 id="firstName"
                                 name="firstName"
                                 type="text"
                                 placeholder="Enter firstname"
                                 className="block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                                 value={firstName}
                                 onChange={(e) => setFirstName(e.target.value)}
                              />
                           </div>
                           <div>
                              <label
                                 htmlFor="lastName"
                                 className="block font-medium text-[#515151]"
                              >
                                 LastName
                              </label>
                              <input
                                 id="lastName"
                                 name="lastName"
                                 type="text"
                                 placeholder="Enter lastname"
                                 className="block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                                 value={lastName}
                                 onChange={(e) => setLastName(e.target.value)}
                              />
                           </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mt-5">
                           <div>
                              <label
                                 htmlFor="address"
                                 className="block font-medium text-[#515151]"
                              >
                                 Address
                              </label>
                              <input
                                 id="address"
                                 name="address"
                                 type="text"
                                 placeholder="Enter address"
                                 className="block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                                 value={address}
                                 onChange={(e) => setAddress(e.target.value)}
                              />
                           </div>

                           <div>
                              <label
                                 htmlFor="phoneNumber"
                                 className="block font-medium text-[#515151]"
                              >
                                 Phone Number
                              </label>
                              <input
                                 id="phoneNumber"
                                 name="phoneNumber"
                                 type="text"
                                 placeholder="Enter phone number"
                                 className="block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                                 value={phoneNumber}
                                 onChange={(e) =>
                                    setPhoneNumber(e.target.value)
                                 }
                              />
                           </div>
                        </div>
                     </div>
                  </>
               ) : (
                  <>
                     {" "}
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
                  </>
               )}
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
               <div className="">
                  <label className="block font-medium text-[#515151]">
                     Role
                  </label>
                  <div className="flex items-center gap-6 mt-2">
                     <label className="flex items-center gap-2">
                        <input
                           type="radio"
                           name="role"
                           value="User"
                           checked={role === "User"}
                           onChange={(e) => setRole(e.target.value)}
                        />
                        User
                     </label>

                     <label className="flex items-center gap-2">
                        <input
                           type="radio"
                           name="role"
                           value="Admin"
                           checked={role === "Admin"}
                           onChange={(e) => setRole(e.target.value)}
                        />
                        Admin
                     </label>

                     <label className="flex items-center gap-2">
                        <input
                           type="radio"
                           name="role"
                           value="Non-User"
                           checked={role === "Non-User"}
                           onChange={(e) => setRole(e.target.value)}
                        />
                        Non-User
                     </label>
                  </div>
               </div>
               {role === "Non-User" ? (
                  <div></div>
               ) : (
                  <>
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
                  </>
               )}
               <div>
                  <h3 className="h-5 text-red-500 font-medium">
                     {fieldReminder ? "*" + fieldReminder + "*" : ""}
                  </h3>
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
