import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "../Navbar";

const DashboardLayout = () => {
   const [sideOpen, setSideOpen] = useState(true);
   const [activeSection, setActiveSection] = useState(() => {
      return localStorage.getItem("activeSection") || "dashboard";
   });

   useEffect(() => {
      localStorage.setItem("activeSection", activeSection);
   }, [activeSection]);

   return (
      <div>
         <Navbar />
         <Sidebar
            sideOpen={sideOpen}
            setSideOpen={setSideOpen}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
         />
         <div
            className={
               `bg-[#FAF7F5] min-h-screen transition-all duration-300 ease-in-out pt-[70px] ` +
               (sideOpen ? "ml-[350px]" : "ml-[90px]")
            }
         >
            <Outlet context={{ activeSection, setActiveSection }} />
         </div>
      </div>
   );
};

export default DashboardLayout;
