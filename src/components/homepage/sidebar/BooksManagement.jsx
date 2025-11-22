import { useState, useEffect } from "react";
import { listBooks } from "../../../services/BooksServices";
import BookCard from "./cards/BookCard";

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
               <BookCard book={book} key={key} />
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
