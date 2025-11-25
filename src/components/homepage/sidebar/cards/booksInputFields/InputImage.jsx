import { useState } from "react";

const InputImage = () => {
   const [preview, setPreview] = useState(null);

   const handleChange = (e) => {
      const file = e.target.files[0];
      if (!file) return;

      // Optional: check file type
      if (!file.type.startsWith("image/")) {
         alert("Please select an image file!");
         return;
      }

      // Optional: limit file size to 5MB
      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
         alert("File is too large. Max 5MB.");
         return;
      }

      //   setVariable(file); // store the file in parent state
      setPreview(URL.createObjectURL(file)); // show preview
   };

   return (
      <div>
         <div className="flex flex-col mt-3 w-64">
            {/* <label className="font-medium text-gray-700 mb-2">{title}</label> */}

            <input
               type="file"
               accept="image/*"
               onChange={handleChange}
               className="block w-full text-sm text-gray-500
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-md file:border-0
                   file:text-sm file:font-semibold
                   file:bg-blue-100 file:text-blue-700
                   hover:file:bg-blue-200"
            />

            {/* {preview && (
               <img
                  src={preview}
                  alt="Preview"
                  className="mt-2 w-full h-48 object-cover rounded-md border"
               />
            )} */}
         </div>
      </div>
   );
};

export default InputImage;
