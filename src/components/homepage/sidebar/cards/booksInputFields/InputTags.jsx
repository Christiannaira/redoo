import { useState } from "react";

const InputTags = ({ tags, setTags }) => {
   const [inputValue, setInputValue] = useState("");

   const handleKeyDown = (e) => {
      if (e.key === "Enter" && inputValue.trim() !== "") {
         e.preventDefault();

         // avoid duplicate tags
         if (!tags.includes(inputValue.trim())) {
            setTags([...tags, inputValue.trim()]);
         }

         setInputValue("");
      }
   };

   const removeTag = (tagToRemove) => {
      setTags(tags.filter((tag) => tag !== tagToRemove));
   };

   return (
      <div className="mt-3">
         <div className="w-full max-w-md">
            <label htmlFor="tags" className="block font-medium text-[#515151]">
               Add Tags:
            </label>

            {/* Tags container */}
            <div className="flex flex-wrap items-center gap-2 p-2 rounded bg-gray-100/50 mt-4">
               {tags.map((tag) => (
                  <span
                     key={tag}
                     className="flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                  >
                     {tag}
                     <button
                        className="text-blue-500 hover:text-blue-700"
                        onClick={() => removeTag(tag)}
                     >
                        ✕
                     </button>
                  </span>
               ))}

               {/* Input box for tags */}
               <input
                  type="text"
                  className="flex-grow outline-none p-1"
                  placeholder="Type and press Enter..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
               />
            </div>

            {/* <p className="mt-3 text-sm">
               Tags: <strong>{tags.join(", ") || "None"}</strong>
            </p> */}
         </div>
      </div>
   );
};

export default InputTags;
