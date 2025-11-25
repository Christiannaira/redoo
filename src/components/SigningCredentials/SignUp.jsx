import { PiUserDuotone, PiEye, PiEyeClosed } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import DummyImage from "../../assets/dummyImage.png";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../services/UserServices";

const SignUp = () => {
   const [passOpen, setPassOpen] = useState(false);
   const [secondPassOpen, setSecondPassOpen] = useState(false);

   const [inputReminder, setInputReminder] = useState("");

   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [role, setRole] = useState("");

   const navigator = useNavigate();

   // function navigates to signin
   const toSignIn = () => {
      navigator("/signin");
   };

   // function for signing up (the database function is included)
   const handleSignUp = (e) => {
      e.preventDefault();

      if (validateForm()) {
         const newEntry = {
            username,
            email,
            password,
            confirmPassword,
            role,
         };

         console.log(newEntry);

         createUser(newEntry)
            .then((response) => {
               console.log(response);
               navigator("/signin");
            })
            .catch((error) => {
               console.error(error);
            });
      }
   };

   // filtering signup forms
   const validateForm = () => {
      if (
         username === "" ||
         email === "" ||
         password === "" ||
         confirmPassword === ""
      ) {
         setInputReminder("field must no be empty");
         // alert("field must no be empty");
      } else {
         if (password === confirmPassword) {
            return true;
         }
         setInputReminder("Your password does not match");
         // alert("Your password does not match");
      }
   };

   return (
      <div className="w-full min-h-screen p-5 grid lg:grid-cols-2 grid-cols-1 gap-5">
         {/* LEFT SIDE FORM */}
         <div className="flex justify-between items-center flex-col py-5">
            <div className="flex items-center max-w-[500px] w-full justify-between">
               <div className="p-1 border border-2 border-gray-500 rounded-full cursor-pointer hover:border-[#FF6927] transition transtion duration-300">
                  <GoArrowLeft size={20} />
               </div>
               <h4 className="text-lg font-medium text-gray-600">
                  Already an admin member?{" "}
                  <a
                     onClick={toSignIn}
                     className="text-[#FF6927] underline cursor-pointer"
                  >
                     Sign In
                  </a>
               </h4>
            </div>
            <form
               onSubmit={handleSignUp}
               className="w-full max-w-[500px]"
               id="signupForm"
            >
               <div>
                  <div className="mb-5">
                     <h2 className="text-[#FF6927] text-5xl mb-2 font-semibold">
                        Sign Up
                     </h2>
                     <p className="text-gray-600">
                        Manage Library Books With Ease
                     </p>
                  </div>

                  {/* USERNAME FIELD */}
                  <div className="flex items-center gap-3 bg-gray-100 p-3 rounded mb-4 border border-gray-300">
                     <PiUserDuotone size={22} className="text-gray-500" />
                     <input
                        type="text"
                        placeholder="Enter Your Username"
                        className="flex-1 min-w-0 bg-transparent focus:outline-none"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                     />
                  </div>

                  {/* EMAIL FIELD */}
                  <div className="flex items-center gap-3 bg-gray-100 p-3 rounded mb-4 border border-gray-300">
                     <TfiEmail size={20} className="text-gray-500" />
                     <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="flex-1 min-w-0 bg-transparent focus:outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />
                  </div>

                  {/* PASSWORD FIELD */}
                  <div className="flex items-center gap-3 bg-gray-100 p-3 rounded mb-4 border border-gray-300">
                     <RiLockPasswordLine size={24} className="text-gray-500" />
                     <input
                        type={passOpen ? "text" : "password"}
                        placeholder="Enter Your Password"
                        className="flex-1 min-w-0 bg-transparent focus:outline-none"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />

                     {passOpen ? (
                        <PiEyeClosed
                           size={24}
                           onClick={() => setPassOpen(false)}
                           className="text-gray-600 cursor-pointer"
                        />
                     ) : (
                        <PiEye
                           size={24}
                           onClick={() => setPassOpen(true)}
                           className="text-gray-600 cursor-pointer"
                        />
                     )}
                  </div>

                  {/* CONFIRM PASSWORD FIELD */}
                  <div className="flex items-center gap-3 bg-gray-100 p-3 rounded mb-4 border border-gray-300">
                     <RiLockPasswordLine size={24} className="text-gray-500" />
                     <input
                        type={secondPassOpen ? "text" : "password"}
                        placeholder="Confirm Your Password"
                        className="flex-1 min-w-0 bg-transparent focus:outline-none"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                     />

                     {secondPassOpen ? (
                        <PiEyeClosed
                           size={24}
                           onClick={() => setSecondPassOpen(false)}
                           className="text-gray-600 cursor-pointer"
                        />
                     ) : (
                        <PiEye
                           size={24}
                           onClick={() => setSecondPassOpen(true)}
                           className="text-gray-600 cursor-pointer"
                        />
                     )}
                  </div>

                  <div className="mt-2">
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
                     </div>
                  </div>
               </div>

               <div className="h-10 p-2 mt-5">
                  <h3 className="font-medium text-red-500">
                     *{inputReminder}*
                  </h3>
               </div>

               {/* BUTTON */}
            </form>
            <button
               type="submit"
               className="bg-[#FF6927] hover:bg-[#ff7f45] transition text-white p-3 px-10 text-xl rounded-full max-w-[500px] w-full mt-5"
               form="signupForm"
            >
               Sign Up
            </button>
         </div>

         {/* RIGHT SIDE */}
         <div className="flex justify-center items-center">
            <img
               src={DummyImage}
               alt="dummy image"
               className="lg:w-[500px] w-[300px]"
            />
         </div>
      </div>
   );
};

export default SignUp;
