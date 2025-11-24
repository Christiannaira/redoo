import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Genre from "./booksInputFields/Genre";

const BookPopup = ({ fetchBooks, setPopUpBook }) => {
   return (
      <div>
         <form action="">
            <div className="flex justify-between items-center">
               <h3 className="text-2xl font-bold">Add New Book</h3>
               <IoMdClose
                  size={30}
                  className="text-[#222222] cursor-pointer"
                  onClick={() => setPopUpBook(false)}
               />
            </div>
            <div className="flex flex-col gap-4 mt-5">
               <div className="grid grid-cols-2 gap-3">
                  <div>
                     <label
                        htmlFor="title"
                        className="block font-medium text-[#515151]"
                     >
                        Title
                     </label>
                     <input
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Enter Book Title"
                        className="block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                     />
                  </div>
                  <div>
                     <label
                        htmlFor="author"
                        className="block font-medium text-[#515151]"
                     >
                        Author
                     </label>
                     <input
                        id="author"
                        name="author"
                        type="text"
                        placeholder="Enter Book Author"
                        className="block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                     />
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-3">
                  <div>
                     <label
                        htmlFor="publisher"
                        className="block font-medium text-[#515151]"
                     >
                        Publisher
                     </label>
                     <input
                        id="publisher"
                        name="publisher"
                        type="text"
                        placeholder="Enter Book Publisher"
                        className="block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                     />
                  </div>
                  <div>
                     <label
                        htmlFor="genre"
                        className="block font-medium text-[#515151]"
                     >
                        Genre
                     </label>
                     <input
                        id="genre"
                        name="genre"
                        type="text"
                        placeholder="Enter Book Genre"
                        className="block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                     />
                  </div>
               </div>
            </div>

            <div>
               <Genre />
            </div>
         </form>
      </div>
   );
};

export default BookPopup;
