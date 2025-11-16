import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
   const [sideOpen, setSideOpen] = useState(true);

   return (
      <div>
         <Sidebar sideOpen={sideOpen} setSideOpen={setSideOpen} />
         <div
            className={
               `bg-[#FAF7F5] min-h-screen transition-all duration-300 ease-in-out ` +
               (sideOpen ? "ml-[350px]" : "ml-[120px]")
            }
         >
            <Outlet />
         </div>
      </div>
   );
};

export default DashboardLayout;
