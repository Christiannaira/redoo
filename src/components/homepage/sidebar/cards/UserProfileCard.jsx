import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getUser } from "../../../../services/UserServices";
import { Link } from "react-router-dom";

const UserProfileCard = () => {
   const { id } = useParams();
   const [user, setUser] = useState(null);

   useEffect(() => {
      getUser(id)
         .then((response) => setUser(response.data))
         .catch((err) => console.error(err));
   }, [id]);

   if (!user) return <p>Loading...</p>;

   return (
      <div>
         UserProfileCard
         <h3>{user.username}</h3>
         <Link to={".."}>Back</Link>
      </div>
   );
};

export default UserProfileCard;
