import { useState } from "react";
import { supabase } from "../../../../../supabase/supabaseClient";

const InputImage = ({ setImage }) => {
   return (
      <div>
         <div>
            <div className="my-5">
               <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="border py-2 px-4 rounded-md border-gray-300 text-gray-300"
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
