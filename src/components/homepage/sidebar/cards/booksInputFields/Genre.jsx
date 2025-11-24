import React, { useState } from "react";

const Genre = () => {
   const options = [
      "React",
      "Vue",
      "Angular",
      "Svelte",
      "Next.js",
      "Nuxt",
      "Laravel",
      "Django",
      "Flask",
   ];

   const [query, setQuery] = useState("");
   const [selected, setSelected] = useState("");
   const [open, setOpen] = useState(false);

   const filtered = options.filter((opt) =>
      opt.toLowerCase().includes(query.toLowerCase())
   );

   const chooseOption = (value) => {
      setSelected(value);
      setQuery("");
      setOpen(false);
   };

   return (
      <div>
         <div className="w-64 relative">
            <label className="block mb-1 text-gray-700">Genre:</label>

            {/* Input Box */}
            <input
               type="text"
               className="w-full p-2 border rounded"
               placeholder="Search..."
               value={query || selected}
               onChange={(e) => {
                  setQuery(e.target.value);
                  setOpen(true);
               }}
               onFocus={() => setOpen(true)}
            />

            {/* Dropdown List */}
            {open && (
               <ul className="absolute w-full mt-1 border rounded bg-white shadow-lg max-h-40 overflow-auto z-10">
                  {filtered.length > 0 ? (
                     filtered.map((item) => (
                        <li
                           key={item}
                           className="p-2 hover:bg-gray-100 cursor-pointer"
                           onClick={() => chooseOption(item)}
                        >
                           {item}
                        </li>
                     ))
                  ) : (
                     <li className="p-2 text-gray-500 italic">No results</li>
                  )}
               </ul>
            )}

            <p className="mt-2 text-sm">
               Selected: <strong>{selected || "None"}</strong>
            </p>
         </div>
      </div>
   );
};

export default Genre;
