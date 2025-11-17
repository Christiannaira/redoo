import React from "react";

const Navbar = ({ sideOpen }) => {
   return (
      <div className="fixed z-50 bg-white py-2 px-5 w-full flex items-center justify-between">
         <div className="logo">
            <h2 className={`text-2xl text-[#FF6927] font-bold`}>Reedo</h2>
         </div>
         <div>
            <div className="flex">
               <div className="image"></div>
               <div>
                  <h3>Zaid Competente</h3>
                  <span>admin</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
