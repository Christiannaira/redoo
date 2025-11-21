import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const UserProfileCard = () => {
   const location = useLocation();
   const user = location.state;

   return (
      <div>
         UserProfileCard
         <h3>{user.username}</h3>
         <Link to={".."}>Back</Link>
      </div>
   );
};

export default UserProfileCard;
