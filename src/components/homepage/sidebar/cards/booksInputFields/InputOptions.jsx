import React, { useState, useEffect, useRef } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Genre = ({ title, options }) => {
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

   const containerRef = useRef(null);

   // Close dropdown when clicking outside
   useEffect(() => {
      function handleClickOutside(e) {
         if (containerRef.current && !containerRef.current.contains(e.target)) {
            setOpen(false);
         }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
         document.removeEventListener("mousedown", handleClickOutside);
   }, []);

   return (
      <div>
         <div className="w-64 relative" ref={containerRef}>
            <label className="block font-medium text-[#515151]">{title}:</label>

            <div className="relative flex items-center">
               {/* Input Box */}
               <input
                  type="text"
                  className="block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                  placeholder="Search..."
                  value={query || selected}
                  onChange={(e) => {
                     setQuery(e.target.value);
                     setOpen(true);
                  }}
                  onFocus={() => setOpen(true)}
               />
               <div
                  onClick={() => {
                     setOpen(!open);
                  }}
               >
                  {open ? (
                     <MdKeyboardArrowUp className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer mt-1" />
                  ) : (
                     <MdKeyboardArrowDown
                        size={16}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer mt-1"
                     />
                  )}
               </div>
            </div>

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
