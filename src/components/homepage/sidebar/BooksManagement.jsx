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
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2x:grid-cols-7 gap-3 mt-5">
            {books.map((book, key) => (
               <div className="bg-white gap-2 rounded-md p-3 flex flex-col items-center cursor-pointer">
                  <img
                     src={BooksPhoto}
                     alt={`${book.title} cover photo`}
                     width={"130px"}
                     className="inline-block cursor-pointer"
                  />
                  <h2 className="text-2xl ">{book.title}</h2>
                  <h3 className="text-sm font-medium text-gray-[#aaaaaa]">
                     by {book.author}
                  </h3>
                  <p className="text-center text-[14px]">{book.summary}</p>
                  <p>{book.genre}</p>
                  <p>{book.language}</p>
                  <p>{book.numberOfPages}</p>
                  <p>{book.copiesAvailable}</p>
                  <p>{book.status}</p>
                  <p>{book.tags[0]}</p>
                  <p>{book.tags[1]}</p>
                  <p>{book.tags[2]}</p>
                  <p>{book.totalCopies}</p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default BooksManagement;
