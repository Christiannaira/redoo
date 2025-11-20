import React from "react";

const UserCard = ({ user, key }) => {
   const dateCreation = new Date(user.dateCreated);

   return (
      <div
         key={key}
         className="flex justify-between items-center bg-gray-200 mb-2 py-2 px-3 rounded-sm hover:bg-[#FF6927] cursor-pointer transition-full duration-200 ease-in-out"
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
