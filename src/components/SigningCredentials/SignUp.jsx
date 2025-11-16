import { PiUserDuotone, PiEye, PiEyeClosed } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";

const SignUp = () => {
   // Password visibility state
   const [passOpen, setPassOpen] = useState(true);
   const [secondPassOpen, setSecondPassOpen] = useState(true);

   // Form input states
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");

   const openFirstPass = () => {
      setPassOpen(!passOpen);
   };

   const openSecondPass = () => {
      setSecondPassOpen(!secondPassOpen);
   };

   const handleSignUp = (e) => {
      e.preventDefault();

      const newEntry = {
         username: username,
         email: email,
         password: password,
         confirmPassword: confirmPassword,
      };

      console.log(newEntry);
   };

   return (
      <div className="max-w-full h-screen p-5 box-border">
         <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 h-full">
            <div className="place-content-center place-items-center border">
               <form>
                  <div className="mb-3">
                     <h2 className="text-blue-500 text-5xl mb-2">Sign Up</h2>
                     <p>Manage Library Books With Ease</p>
                  </div>
                  <div className="flex bg-gray-100 w-full max-w-[500px] p-3 rounded-sm justify-start items-center gap-3 mb-3">
                     <PiUserDuotone size={20} color="#737373" />
                     <input
                        type="text"
                        placeholder="Enter Your Username"
                        className="max-w-[420px] focus:outline-none focus:ring-0"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                     />
                  </div>
                  <div className="flex bg-gray-100 w-full max-w-[500px] p-3 rounded-sm justify-start items-center gap-3 mb-3">
                     <TfiEmail size={20} color="#737373" />
                     <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="max-w-[420px] focus:outline-none focus:ring-0"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />
                  </div>
                  <div className="flex bg-gray-100 w-full max-w-[500px] p-3 rounded-sm justify-start items-center gap-3 mb-3">
                     <RiLockPasswordLine size={25} color="#737373" />
                     <input
                        type={passOpen ? "text" : "password"}
                        placeholder="Enter Your Password"
                        className="max-w-[380px] focus:outline-none focus:ring-0"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />
                     <PiEye
                        size={25}
                        color="#737373"
                        onClick={openFirstPass}
                        className={passOpen ? "hidden" : ""}
                     />
                     <PiEyeClosed
                        size={25}
                        color="#737373"
                        className={passOpen ? "" : "hidden"}
                        onClick={openFirstPass}
                     />
                  </div>
                  <div className="flex bg-gray-100 w-[500px] p-3 rounded-sm justify-start items-center gap-3 mb-3">
                     <RiLockPasswordLine size={25} color="#737373" />
                     <input
                        type={secondPassOpen ? "text" : "password"}
                        placeholder="Confirm Your Password"
                        className="w-[380px] focus:outline-none focus:ring-0"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                     />
                     <PiEye
                        size={25}
                        color="#737373"
                        onClick={openSecondPass}
                        className={secondPassOpen ? "hidden" : ""}
                     />
                     <PiEyeClosed
                        size={25}
                        color="#737373"
                        className={secondPassOpen ? "" : "hidden"}
                        onClick={openSecondPass}
                     />
                  </div>
                  <div>
                     <button
                        onClick={handleSignUp}
                        className="bg-[#FF6927] text-white p-3 px-10 text-xl rounded-full"
                     >
                        Sign Up
                     </button>
                  </div>
               </form>
            </div>
            <div>hello</div>
         </div>
      </div>
   );
};

export default SignUp;
