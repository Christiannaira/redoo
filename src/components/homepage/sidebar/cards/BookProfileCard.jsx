import React from "react";
import { useNavigate } from "react-router-dom";

const BookProfileCard = () => {
   const navigate = useNavigate();

   return (
      <div>
         <a onClick={() => navigate("..")}>go back</a>
      </div>
   );
};

export default BookProfileCard;
