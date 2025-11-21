import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

const UserCard = ({ user, location }) => {
   const dateCreation = new Date(user.dateCreated);

   const navigator = useNavigate();

   const handleUser = (user) => {
      alert(user.username);
      navigator("/userprofile", { state: user });
   };

   if (location === "user-management") {
      return (
         <div
            className="grid grid-cols-8 gap-2 text-[#222222] bg-gray-200 mb-2 py-2 px-3 rounded-sm hover:bg-[#FF6927] cursor-pointer transition-all duration-100 ease-out group hover:text-[#f7f7f7]"
            onClick={() => handleUser(user)}
         >
            <h3 className="font-medium text-1xl">{user.username}</h3>
            <span>{user.email}</span>
            <span>{user.firstName ? user.firstName : `not set`}</span>
            <span>{user.lastName ? user.lastName : `not set`}</span>
            <span>{user.role}</span>
            <span>{user.status}</span>
            <span>
               {dateCreation.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
               })}
            </span>
            <button
               className="flex justify-center items-center cursor-pointer"
               onClick={(e) => {
                  e.stopPropagation();
                  alert("user deleted");
               }}
            >
               <FaTrashAlt />
            </button>
         </div>
      );
   }

   return (
      <div
         className="flex text-[#222222] justify-between items-center bg-gray-200 mb-2 py-2 px-3 rounded-sm hover:bg-[#FF6927] cursor-pointer transition-all duration-100 ease-out group hover:text-[#f7f7f7]"
         onClick={() => handleUser(user)}
      >
         <h3 className="font-medium text-1xl">{user.username}</h3>
         <span>
            {dateCreation.toLocaleDateString("en-US", {
               year: "numeric",
               month: "short",
               day: "numeric",
            })}
         </span>
      </div>
   );
};

export default UserCard;
