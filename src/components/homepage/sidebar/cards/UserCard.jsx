import React from "react";
import { useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
   const dateCreation = new Date(user.dateCreated);

   const navigator = useNavigate();

   const handleUser = (user) => {
      alert(user.username);
      navigator("/userprofile", { state: user });
   };

   return (
      <div
         className="flex justify-between items-center bg-gray-200 mb-2 py-2 px-3 rounded-sm hover:bg-[#FF6927] cursor-pointer transition-full duration-200 ease-in-out"
         onClick={() => handleUser(user)}
      >
         <h3>{user.username}</h3>
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
