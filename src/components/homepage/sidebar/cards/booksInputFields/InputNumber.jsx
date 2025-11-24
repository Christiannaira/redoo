import React from "react";
import { useState } from "react";

const InputNumber = ({ title, limit, variable, setVariable }) => {
   const [value, setValue] = useState("");

   const handleChange = (e) => {
      let val = e.target.value;

      // Remove non-digit characters
      val = val.replace(/\D/g, "");

      // If empty
      if (!val) {
         setValue("");
         setVariable(0); // reset parent
         return;
      }

      let num = Number(val);

      // Limit range
      if (num < 1) num = 1;
      if (num > limit) num = limit;

      setValue(num);
      setVariable(num); // update parent AFTER applying limit
   };

   return (
      <div className="mt-3">
         <div className="w-64">
            <label htmlFor="title" className="block font-medium text-[#515151]">
               {title}
            </label>

            <input
               id="number"
               name="number"
               type="text"
               className="bg-gray-100/50 px-4 py-3 rounded-md max-w-full"
               placeholder={`1 - ${limit}`}
               value={variable != null ? variable : value}
               onChange={handleChange}
            />

            {/* <p className="mt-2 text-sm">
               Value: <strong>{value || "None"}</strong>
            </p> */}
         </div>
      </div>
   );
};

export default InputNumber;
