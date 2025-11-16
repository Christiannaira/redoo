import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
   const [activeSection, setActiveSection] = useState("dashboard");

   return (
      <div>
         <Sidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
         />
         <div className="bg-[#FAF7F5] min-h-screen ml-[350px]">
            <Outlet />
         </div>
      </div>
   );
};

export default DashboardLayout;
