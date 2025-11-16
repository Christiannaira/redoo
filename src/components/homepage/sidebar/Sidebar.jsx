import { useState } from "react";

import { MdOutlineSpaceDashboard, MdOutlineWorkHistory } from "react-icons/md";
import { SiWikibooks } from "react-icons/si";
import { PiBookBookmark, PiUsers } from "react-icons/pi";
import { IoSettingsOutline, IoLogOutSharp } from "react-icons/io5";
import { BsHandIndexThumb } from "react-icons/bs";
import { FiSidebar } from "react-icons/fi";

const Sidebar = () => {
   const [sideOpen, setSideOpen] = useState(true);

   const handleSideOpen = () => {
      alert("hello");
   };

   return (
      <div className="bg-white w-full max-w-[350px] min-h-screen p-5 absolute top-0 left-0 flex flex-col justify-between">
         <div>
            <div className="flex items-center justify-between">
               <h2 className="text-2xl text-[#FF6927] font-bold">Reedo</h2>
               <div onClick={handleSideOpen}>
                  <FiSidebar />
               </div>
            </div>

            <ul className="mt-5">
               <div>
                  <li className="flex items-center gap-3 my-3 group cursor-pointer">
                     <MdOutlineSpaceDashboard
                        size={20}
                        className="text-[#222222] group-hover:text-[#FF6927] transition duration-300"
                     />
                     <h2 className="text-2xl text-[#222222] font-medium group-hover:text-[#FF6927] transition duration-300">
                        Dashboard
                     </h2>
                  </li>
                  <li className="flex items-center gap-3 my-3 group cursor-pointer">
                     <PiUsers
                        size={20}
                        className="text-[#222222] group-hover:text-[#FF6927] transition duration-300"
                     />
                     <h2 className="text-2xl text-[#222222] font-medium group-hover:text-[#FF6927] transition duration-300">
                        User Management
                     </h2>
                  </li>
                  <li className="flex items-center gap-3 my-3 group cursor-pointer">
                     <SiWikibooks
                        size={20}
                        className="text-[#222222] group-hover:text-[#FF6927] transition duration-300"
                     />
                     <h2 className="text-2xl text-[#222222] font-medium group-hover:text-[#FF6927] transition duration-300">
                        Books Management
                     </h2>
                  </li>
                  <li className="flex items-center gap-3 my-3 group cursor-pointer">
                     <PiBookBookmark
                        size={20}
                        className="text-[#222222] group-hover:text-[#FF6927] transition duration-300"
                     />

                     <h2 className="text-2xl text-[#222222] font-medium group-hover:text-[#FF6927] transition duration-300">
                        Borrow Books
                     </h2>
                  </li>
                  <li className="flex items-center gap-3 my-3 group cursor-pointer">
                     <MdOutlineWorkHistory
                        size={20}
                        className="text-[#222222] group-hover:text-[#FF6927] transition duration-300"
                     />
                     <h2 className="text-2xl text-[#222222] font-medium group-hover:text-[#FF6927] transition duration-300">
                        History
                     </h2>
                  </li>
                  <li className="flex items-center gap-3 my-3 group cursor-pointer">
                     <BsHandIndexThumb
                        size={20}
                        className="text-[#222222] group-hover:text-[#FF6927] transition duration-300"
                     />
                     <h2 className="text-2xl text-[#222222] font-medium group-hover:text-[#FF6927] transition duration-300">
                        Approval
                     </h2>
                  </li>
               </div>
            </ul>
         </div>

         <ul>
            <div>
               <li className="flex items-center gap-3 my-3 group cursor-pointer">
                  <IoSettingsOutline
                     size={20}
                     className="text-[#222222] group-hover:text-[#FF6927] transition duration-300"
                  />
                  <h2 className="text-2xl text-[#222222] font-medium group-hover:text-[#FF6927] transition duration-300">
                     Settings
                  </h2>
               </li>
               <li className="flex items-center gap-3 my-3 group cursor-pointer">
                  <IoLogOutSharp
                     size={20}
                     className="text-[#222222] group-hover:text-[#FF6927] transition duration-300"
                  />
                  <h2 className="text-2xl text-[#222222] font-medium group-hover:text-[#FF6927] transition duration-300">
                     Logout
                  </h2>
               </li>
            </div>
         </ul>
      </div>
   );
};

export default Sidebar;
