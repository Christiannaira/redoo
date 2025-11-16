import { PiUserDuotone, PiEye, PiEyeClosed } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";

const SignUp = () => {
   const [passOpen, setPassOpen] = useState(false);
   const [secondPassOpen, setSecondPassOpen] = useState(false);

   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");

   const handleSignUp = (e) => {
      e.preventDefault();

      const newEntry = {
         username,
         email,
         password,
         confirmPassword,
      };

      console.log(newEntry);
   };

   return (
      <div className="w-full min-h-screen p-5 grid lg:grid-cols-2 grid-cols-1">
         {/* LEFT SIDE FORM */}
         <div className="flex justify-around items-center flex-col">
            <div>
               <div></div>
               <h4>
                  Already an admin member? <a href="#">Sign In</a>
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
               </div>
               {/* BUTTON */}
            </form>
            <button
               type="submit"
               className="bg-[#FF6927] hover:bg-[#ff7f45] transition text-white p-3 px-10 text-xl rounded-full w-50"
               form="signupForm"
            >
               Sign Up
            </button>
         </div>

         {/* RIGHT SIDE */}
         <div className="flex justify-center items-center">
            <p className="text-gray-400 text-xl">hello</p>
         </div>
      </div>
   );
};

export default SignUp;
