import { useState } from "react";
import { Link } from "react-router-dom";

const GettingStarted = () => {
   return (
      <div>
         <div>Getting Started</div>
         <Link to={"/signup"}>Sign Up</Link>
         <Link to={"/signin"}>Sign In</Link>
      </div>
   );
};

export default GettingStarted;
