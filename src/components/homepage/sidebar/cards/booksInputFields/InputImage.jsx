import { useState } from "react";
import { supabase } from "../../../../../supabase/supabaseClient";

const InputImage = ({ setImage }) => {
   return (
      <div>
         <div>
            <div>
               <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="border"
               />
               {/* <button
                  className="border p-2 bg-gray-500"
                  onClick={alert("hello")}
               >
                  Upload
               </button> */}
            </div>
         </div>
      </div>
   );
};

export default InputImage;
