import React from "react";
import { useLocation } from "react-router-dom";

const UserProfileCard = () => {
   const location = useLocation();
   const user = location.state;

   return (
      <div>
         UserProfileCard
         <h3>{user.username}</h3>
      </div>
   );
};

export default UserProfileCard;
