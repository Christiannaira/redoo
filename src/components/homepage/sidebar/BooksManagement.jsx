import { useState, useEffect } from "react";
import { listBooks } from "../../../services/BooksServices";
import BooksPhoto from "../../../assets/booksPhoto.png";

const BooksManagement = () => {
   const [books, setBooks] = useState([]);

   useEffect(() => {
      getAllBooks();
   }, []);

   function getAllBooks() {
      listBooks()
         .then((response) => {
            setBooks(response.data);
         })
         .catch((error) => {
            console.error(error);
         });
   }

   return (
      <div className="p-4">
         <h2 className="text-4xl font-medium text-[#444444]">
            Books Management
         </h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2x:grid-cols-7 gap-3 mt-5">
            {books.map((book, key) => (
               <div className="bg-white gap-2 rounded-md p-3 flex flex-col items-left cursor-pointer">
                  <img
                     src={BooksPhoto}
                     alt={`${book.title} cover photo`}
                     className="inline-block cursor-pointer w-full"
                  />
                  <div className="px-2">
                     <h2 className="text-[20px] truncate font-medium">
                        {book.title}
                     </h2>
                     <h3 className="text-sm font-regular text-[#A9A9A9]">
                        by {book.author}
                     </h3>
                     <div className="mt-2">
                        <div className="flex justify-between">
                           <h3 className="text-md font-medium text-[#515151]">
                              Copies Available
                           </h3>
                           <span className="text-md font-bold text-[#FD7C43]">
                              {book.copiesAvailable
                                 ? book.copiesAvailable
                                 : "-"}
                           </span>
                        </div>
                        <div className="flex justify-between">
                           <h3 className="text-md font-medium text-[#515151]">
                              Total Copies
                           </h3>
                           <span className="text-md font-bold text-[#FD7C43]">
                              {book.totalCopies ? book.totalCopies : "-"}
                           </span>
                        </div>
                        <div className="flex justify-between">
                           <h3 className="text-md font-medium text-[#515151]">
                              Status
                           </h3>
                           <span
                              className={`text-md font-regular ${
                                 book.status === "Available"
                                    ? "text-green-600"
                                    : "text-red-600"
                              }`}
                           >
                              {book.status ? book.status : "-"}
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
         <div className="my-10 rounded-md bg-white p-1 inline-block">
            <div className="flex items-center gap-1">
               <a className="inline-block font-medium text-[#515151] py-3 px-5 cursor-pointer hover:bg-[#FD7C43] transition-all duration-100 ease-out rounded-md hover:text-white bg-[#f7f7f7]">
                  1
               </a>
               <a className="inline-block font-medium text-[#515151] py-3 px-5 cursor-pointer hover:bg-[#FD7C43] transition-all duration-100 ease-out rounded-md hover:text-white bg-[#f7f7f7]">
                  2
               </a>
               <a className="inline-block font-medium text-[#515151] py-3 px-5 cursor-pointer hover:bg-[#FD7C43] transition-all duration-100 ease-out rounded-md hover:text-white bg-[#f7f7f7]">
                  3
               </a>
               <a className="inline-block font-medium text-[#515151] py-3 px-5 cursor-pointer hover:bg-[#FD7C43] transition-all duration-100 ease-out rounded-md hover:text-white bg-[#f7f7f7]">
                  4
               </a>
               <a className="inline-block font-medium text-[#515151] py-3 px-5 cursor-pointer hover:bg-[#FD7C43] transition-all duration-100 ease-out rounded-md hover:text-white bg-[#f7f7f7]">
                  5
               </a>
               <a className="inline-block font-medium text-[#515151] py-3 px-5 cursor-pointer hover:bg-[#FD7C43] transition-all duration-100 ease-out rounded-md hover:text-white bg-[#f7f7f7]">
                  6
               </a>
               <a className="inline-block font-medium text-[#515151] py-3 px-5 cursor-pointer hover:bg-[#FD7C43] transition-all duration-100 ease-out rounded-md hover:text-white bg-[#f7f7f7]">
                  7
               </a>
            </div>
         </div>
      </div>
   );
};

export default BooksManagement;
