import { useState } from "react";

import { MdOutlineSpaceDashboard, MdOutlineWorkHistory } from "react-icons/md";
import { SiWikibooks } from "react-icons/si";
import { PiBookBookmark, PiUsers } from "react-icons/pi";
import { IoSettingsOutline, IoLogOutSharp } from "react-icons/io5";
import { BsHandIndexThumb } from "react-icons/bs";
import { FiSidebar } from "react-icons/fi";
import { Link } from "react-router-dom";

const Sidebar = ({
   sideOpen,
   setSideOpen,
   activeSection,
   setActiveSection,
}) => {
   const handleSideOpen = () => {
      setSideOpen(!sideOpen);
   };

   return (
      <div
         className={
            `transition-all duration-300 ease-in-out bg-white w-full min-h-screen p-5 fixed left-0 flex flex-col justify-between ` +
            (sideOpen ? "max-w-[350px]" : "max-w-[90px]")
         }
      >
         <div className="mt-13">
            <div className="flex items-center justify-end">
               <div onClick={handleSideOpen} className="cursor-pointer group">
                  <FiSidebar className="group-hover:text-[#FF6927] transition duration-300" />
               </div>
            </div>

            <ul className="mt-5">
               <div>
                  <Link
                     to="/dashboard"
                     onClick={() => setActiveSection("dashboard")}
                  >
                     <li
                        className={`flex items-center gap-3 my-5 mt-10 group cursor-pointer ${
                           sideOpen ? "" : "justify-center"
                        }`}
                     >
                        <MdOutlineSpaceDashboard
                           size={20}
                           className={
                              "group-hover:text-[#FF6927] transition duration-200 " +
                              (activeSection === "dashboard"
                                 ? "text-[#FF6927]"
                                 : "text-[#222222]")
                           }
                        />
                        <h2
                           className={`text-2xl font-medium group-hover:text-[#FF6927] transition duration-300 ${
                              activeSection === "dashboard"
                                 ? "text-[#FF6927]"
                                 : "text-[#222222]"
                           } ${sideOpen ? "" : "hidden"}`}
                        >
                           Dashboard
                        </h2>
                     </li>
                  </Link>

                  <Link
                     to={"user-management"}
                     onClick={() => setActiveSection("user-management")}
                  >
                     <li
                        className={`flex items-center gap-3 my-5 group cursor-pointer ${
                           sideOpen ? "" : "justify-center"
                        }`}
                     >
                        <PiUsers
                           size={20}
                           className={
                              "group-hover:text-[#FF6927] transition duration-300 " +
                              (activeSection === "user-management"
                                 ? "text-[#FF6927]"
                                 : "text-[#222222]")
                           }
                        />
                        <h2
                           className={`text-2xl font-medium group-hover:text-[#FF6927] transition duration-300 ${
                              activeSection === "user-management"
                                 ? "text-[#FF6927]"
                                 : "text-[#222222]"
                           } ${sideOpen ? "" : "hidden"}`}
                        >
                           User Management
                        </h2>
                     </li>
                  </Link>

                  <Link
                     to={"books-management"}
                     onClick={() => setActiveSection("books-management")}
                  >
                     <li
                        className={`flex items-center gap-3 my-5 group cursor-pointer ${
                           sideOpen ? "" : "justify-center"
                        }`}
                     >
                        <SiWikibooks
                           size={20}
                           className={
                              "group-hover:text-[#FF6927] transition duration-300 " +
                              (activeSection === "books-management"
                                 ? "text-[#FF6927]"
                                 : "text-[#222222]")
                           }
                        />
                        <h2
                           className={`text-2xl font-medium group-hover:text-[#FF6927] transition duration-300 ${
                              activeSection === "books-management"
                                 ? "text-[#FF6927]"
                                 : "text-[#222222]"
                           } ${sideOpen ? "" : "hidden"}`}
                        >
                           Books Management
                        </h2>
                     </li>
                  </Link>

                  <Link
                     to={"borrow-books"}
                     onClick={() => setActiveSection("borrows-book")}
                  >
                     <li
                        className={`flex items-center gap-3 my-5 group cursor-pointer ${
                           sideOpen ? "" : "justify-center"
                        }`}
                     >
                        <PiBookBookmark
                           size={20}
                           className={
                              "group-hover:text-[#FF6927] transition duration-300 " +
                              (activeSection === "borrows-book"
                                 ? "text-[#FF6927]"
                                 : "text-[#222222]")
                           }
                        />

                        <h2
                           className={`text-2xl font-medium group-hover:text-[#FF6927] transition duration-300 ${
                              activeSection === "borrows-book"
                                 ? "text-[#FF6927]"
                                 : "text-[#222222]"
                           } ${sideOpen ? "" : "hidden"}`}
                        >
                           Borrow Books
                        </h2>
                     </li>
                  </Link>
                  <Link
                     to={"history"}
                     onClick={() => setActiveSection("history")}
                  >
                     <li
                        className={`flex items-center gap-3 my-5 group cursor-pointer ${
                           sideOpen ? "" : "justify-center"
                        }`}
                     >
                        <MdOutlineWorkHistory
                           size={20}
                           className={
                              "group-hover:text-[#FF6927] transition duration-300 " +
                              (activeSection === "history"
                                 ? "text-[#FF6927]"
                                 : "text-[#222222]")
                           }
                        />
                        <h2
                           className={`text-2xl font-medium group-hover:text-[#FF6927] transition duration-300 ${
                              activeSection === "history"
                                 ? "text-[#FF6927]"
                                 : "text-[#222222]"
                           } ${sideOpen ? "" : "hidden"}`}
                        >
                           History
                        </h2>
                     </li>
                  </Link>

                  <Link
                     to={"approval"}
                     onClick={() => setActiveSection("approval")}
                  >
                     <li
                        className={`flex items-center gap-3 my-5 group cursor-pointer ${
                           sideOpen ? "" : "justify-center"
                        }`}
                     >
                        <BsHandIndexThumb
                           size={20}
                           className={
                              "group-hover:text-[#FF6927] transition duration-300 " +
                              (activeSection === "approval"
                                 ? "text-[#FF6927]"
                                 : "text-[#222222]")
                           }
                        />
                        <h2
                           className={`text-2xl font-medium group-hover:text-[#FF6927] transition duration-300 ${
                              activeSection === "approval"
                                 ? "text-[#FF6927]"
                                 : "text-[#222222]"
                           } ${sideOpen ? "" : "hidden"}`}
                        >
                           Approval
                        </h2>
                     </li>
                  </Link>
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
                     <Link
                        to={"/settings"}
                        className={sideOpen ? "" : "hidden"}
                     >
                        Settings
                     </Link>
                  </h2>
               </li>
               <li className="flex items-center gap-3 my-3 group cursor-pointer">
                  <IoLogOutSharp
                     size={20}
                     className="text-[#222222] group-hover:text-[#FF6927] transition duration-300"
                  />
                  <h2
                     className={`text-2xl text-[#222222] font-medium group-hover:text-[#FF6927] transition duration-300 ${
                        sideOpen ? "" : "hidden"
                     }`}
                  >
                     Logout
                  </h2>
               </li>
            </div>
         </ul>
      </div>
   );
};

export default Sidebar;
