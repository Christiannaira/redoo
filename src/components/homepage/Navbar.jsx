import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import DummyAvatar from "../../assets/dummyAvatar.png";

const Navbar = () => {
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
               <div className="flex items-center gap-3">
                  <img src={DummyAvatar} alt="dummy avatar" />
                  <div className="flex flex-col">
                     <h3>Zaid Competente</h3>
                     <span>admin</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
