import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { deleteUser } from "../../../../services/UserServices";

const UserCard = ({ user, location, getAllUsers, setActiveSection }) => {
   const dateCreation = new Date(user.dateCreated);

   const navigator = useNavigate();

   const handleUser = (user, page) => {
      if (page === "user-management") {
         navigator(`profile/${user.id}`);
      } else if (page === "dashboard") {
         navigator(`user-management/profile/${user.id}`);
         setActiveSection("user-management");
      }
   };

   const removeUser = (userId) => {
      alert(userId);

      deleteUser(userId)
         .then((response) => {
            getAllUsers();
            console.log("User is successfully deleted");
         })
         .catch((error) => {
            console.error(error);
         });
   };

   if (location === "user-management") {
      return (
         <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-2 text-[#222222] bg-gray-200 mb-2 py-2 px-3 rounded-sm hover:bg-[#FF6927] cursor-pointer transition-all duration-100 ease-out group hover:text-[#f7f7f7]"
            onClick={() => handleUser(user, "user-management")}
         >
            {/* Username - always visible */}
            <h3 className="font-medium text-[14px] truncate">
               {user.username}
            </h3>

            {/* Email - visible on md and above */}
            <h3 className="font-medium text-[14px] truncate hidden md:block">
               {user.email}
            </h3>

            <h3
               className={`text-[14px] truncate hidden lg:block ${
                  user.firstName ? "font-medium" : "font-normal text-gray-400"
               }`}
            >
               {user.firstName ?? "-"}
            </h3>

            <h3
               className={`text-[14px] truncate hidden lg:block ${
                  user.lastName ? "font-medium" : "font-normal text-gray-400"
               }`}
            >
               {user.lastName ?? "-"}
            </h3>

            <h3 className="font-medium text-[14px] truncate hidden sm:block">
               {user.role}
            </h3>

            <h3
               className={`font-medium text-[14px] truncate hidden lg:block ${
                  user.status === "Verified" ? "text-green-500" : "text-red-500"
               }`}
            >
               {user.status}
            </h3>

            <h3 className="font-medium text-[14px] truncate hidden 2xl:block">
               {dateCreation.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
               })}
            </h3>

            <button
               className="flex items-center justify-center cursor-pointer text-red-500 hover:text-red-700 hidden xl:flex"
               onClick={(e) => {
                  e.stopPropagation();
                  removeUser(user.id);
               }}
            >
               <FaTrashAlt />
            </button>
         </div>
      );
   }

   return (
      <div
         className="flex text-[#222222] justify-between items-center bg-gray-200 mb-2 py-2 px-3 rounded-sm hover:bg-[#FF6927] cursor-pointer transition-all duration-100 ease group hover:text-[#f7f7f7]"
         onClick={() => handleUser(user, "dashboard")}
      >
         <h3 className="font-medium text-1xl truncate">{user.username}</h3>
         <span className="font-medium truncate">
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
