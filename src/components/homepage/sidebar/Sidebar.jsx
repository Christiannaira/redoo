import { useState } from "react";

import { MdOutlineSpaceDashboard, MdOutlineWorkHistory } from "react-icons/md";
import { SiWikibooks } from "react-icons/si";
import { PiBookBookmark, PiUsers } from "react-icons/pi";
import { IoSettingsOutline, IoLogOutSharp } from "react-icons/io5";
import { BsHandIndexThumb } from "react-icons/bs";
import { FiSidebar } from "react-icons/fi";
import { Link } from "react-router-dom";

const Sidebar = ({ sideOpen, setSideOpen }) => {
   const [activeSection, setActiveSection] = useState("dashboard");

   const handleSideOpen = () => {
      setSideOpen(!sideOpen);
   };

   return (
      <div
         className={
            `transition-all duration-300 ease-in-out bg-white w-full min-h-screen p-5 absolute top-0 left-0 flex flex-col justify-between ` +
            (sideOpen ? "max-w-[350px]" : "max-w-[90px]")
         }
      >
         <div>
            <div className="flex items-center justify-between">
               <h2
                  className={`text-2xl text-[#FF6927] font-bold ${
                     sideOpen ? "" : "hidden"
                  }`}
               >
                  Reedo
               </h2>
               <div onClick={handleSideOpen} className="cursor-pointer group">
                  <FiSidebar className="group-hover:text-[#FF6927] transition duration-300" />
               </div>
            </div>

            <ul className="mt-5">
               <div>
                  <li className="flex items-center gap-3 my-3 group cursor-pointer">
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
                        className={
                           "text-2xl font-medium group-hover:text-[#FF6927] transition duration-300 " +
                           (activeSection === "dashboard"
                              ? "text-[#FF6927]"
                              : "text-[#222222]")
                        }
                     >
                        <Link
                           to="/dashboard"
                           onClick={() => setActiveSection("dashboard")}
                           className={sideOpen ? "" : "hidden"}
                        >
                           Dashboard
                        </Link>
                     </h2>
                  </li>
                  <li className="flex items-center gap-3 my-3 group cursor-pointer">
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
                        className={
                           "text-2xl font-medium group-hover:text-[#FF6927] transition duration-300 " +
                           (activeSection === "user-management"
                              ? "text-[#FF6927]"
                              : "text-[#222222]")
                        }
                     >
                        <Link
                           to={"user-management"}
                           onClick={() => setActiveSection("user-management")}
                           className={sideOpen ? "" : "hidden"}
                        >
                           User Management
                        </Link>
                     </h2>
                  </li>
                  <li className="flex items-center gap-3 my-3 group cursor-pointer">
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
                        className={
                           "text-2xl font-medium group-hover:text-[#FF6927] transition duration-300 " +
                           (activeSection === "books-management"
                              ? "text-[#FF6927]"
                              : "text-[#222222]")
                        }
                     >
                        <Link
                           to={"books-management"}
                           onClick={() => setActiveSection("books-management")}
                           className={sideOpen ? "" : "hidden"}
                        >
                           Books Management
                        </Link>
                     </h2>
                  </li>
                  <li className="flex items-center gap-3 my-3 group cursor-pointer">
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
                        className={
                           "text-2xl font-medium group-hover:text-[#FF6927] transition duration-300 " +
                           (activeSection === "borrows-book"
                              ? "text-[#FF6927]"
                              : "text-[#222222]")
                        }
                     >
                        <Link
                           to={"borrow-books"}
                           onClick={() => setActiveSection("borrows-book")}
                           className={sideOpen ? "" : "hidden"}
                        >
                           Borrow Books
                        </Link>
                     </h2>
                  </li>
                  <li className="flex items-center gap-3 my-3 group cursor-pointer">
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
                        className={
                           "text-2xl font-medium group-hover:text-[#FF6927] transition duration-300 " +
                           (activeSection === "history"
                              ? "text-[#FF6927]"
                              : "text-[#222222]")
                        }
                     >
                        <Link
                           to={"history"}
                           onClick={() => setActiveSection("history")}
                           className={sideOpen ? "" : "hidden"}
                        >
                           History
                        </Link>
                     </h2>
                  </li>
                  <li className="flex items-center gap-3 my-3 group cursor-pointer">
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
                        className={
                           "text-2xl font-medium group-hover:text-[#FF6927] transition duration-300 " +
                           (activeSection === "approval"
                              ? "text-[#FF6927]"
                              : "text-[#222222]")
                        }
                     >
                        <Link
                           to={"approval"}
                           onClick={() => setActiveSection("approval")}
                           className={sideOpen ? "" : "hidden"}
                        >
                           approval
                        </Link>
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
