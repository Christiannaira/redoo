import { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import DummyAvatar from "../../assets/dummyAvatar.png";

const Navbar = () => {
   const [currentUserLogin, setCurrentUserLogin] = useState(() => {
      return localStorage.getItem("currentUserLogin") || "";
   });

   return (
      <div className="fixed z-50 bg-white py-2 px-10 w-full flex items-center justify-between">
         <div className="logo">
            <h2 className={`text-2xl text-[#FF6927] font-bold`}>Reedo</h2>
         </div>
         <div>
            <div className="flex items-center gap-3">
               <div className="relative group cursor-pointer">
                  <IoNotificationsOutline size={20} />
                  <span className="p-1 bg-red-600 absolute rounded-full top-[-1px] right-0"></span>
               </div>
               <div className="flex items-center gap-3 cursor-pointer">
                  <img src={DummyAvatar} alt="dummy avatar" />
                  <div className="flex flex-col">
                     {/* <span>admin</span> */}
                     <h3 className="text-[#222222] font-medium">
                        {currentUserLogin}
                     </h3>
                     <span className="text-[14px] text-gray-600 mt-[-5px]">
                        admin
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
