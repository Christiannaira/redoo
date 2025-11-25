import { useState, useEffect } from "react";
import { listBooks } from "../../../services/BooksServices";
import BookCard from "./cards/BookCard";
import { useOutletContext } from "react-router-dom";
import BookPopup from "./cards/BookPopup";
import { IoSearch } from "react-icons/io5";
import { searchBook } from "../../../services/BooksServices";
import { useNavigate } from "react-router-dom";

const BooksManagement = ({ isLogin, setIsLogin }) => {
   const [books, setBooks] = useState([]);
   const { activeSelection, setActiveSection } = useOutletContext();
   const [popUpBook, setPopUpBook] = useState(false);

   const [keyword, setKeyword] = useState("");
   const [results, setResults] = useState([]);

   const navigator = useNavigate();

   const handleSearch = async (e) => {
      const value = e.target.value;
      setKeyword(value);

      if (value == "") {
         setResults([]);
         return;
      }

      searchBook(value)
         .then((response) => {
            setResults(response.data);
         })
         .catch((err) => {
            console.error(err);
         });
   };

   useEffect(() => {
      getAllBooks();
   }, []);

   useEffect(() => {
      if (!isLogin) {
         navigator("/signin");
      }
   }, [isLogin, navigator]);

   function getAllBooks() {
      listBooks()
         .then((response) => {
            setBooks(response.data);
         })
         .catch((error) => {
            console.error(error);
         });
   }

   const handleAddBook = () => {
      setPopUpBook(!popUpBook);
   };

   return (
      <div className="p-4 flex flex-col">
         <div
            className={`fixed top-0 left-0 w-full h-full z-100 bg-[#222222]/20 ${
               popUpBook ? "block" : "hidden"
            }`}
            onClick={handleAddBook}
         ></div>

         {/* Add Book Popup Section */}
         <div
            className={`w-200 max-w-full p-5 fixed z-200 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md z-500 ${
               popUpBook ? "block" : "hidden"
            }`}
         >
            <BookPopup fetchBooks={getAllBooks} setPopUpBook={setPopUpBook} />
         </div>

         <h2 className="text-4xl font-medium text-[#444444]">
            Books Management
         </h2>

         <div className="flex items-center bg-gray-100/50 rounded-md flex-row w-100 max-w-full rounded-md hover:w-full transition-all duration-200 ease self-end">
            <input
               type="text"
               placeholder="Search..."
               className="flex-1 min-w-0 focus:outline-none py-3 px-5"
               value={keyword}
               onChange={handleSearch}
            />
            <button className="rounded-tr-md rounded-br-md bg-[#333333] py-3 px-6 cursor-pointer transition-all duration-100 ease hover:bg-[#FF6927]">
               <IoSearch size={20} className="inline-block text-white" />
            </button>
         </div>

         <div className="max-[500px]:grid-cols-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2x:grid-cols-7 gap-3 mt-5">
            {((keyword === "" ? books : results) || []).map((book, index) => (
               <BookCard
                  book={book}
                  location={"books-management"}
                  setActiveSection={setActiveSection}
                  index={index}
                  key={book.id}
               />
            ))}
         </div>
         <div className="my-10 rounded-md bg-white p-1 inline-block relative">
            <button
               className="px-5 py-3 w-35 max-w-full bg-[#FF6927] fixed bottom-10 right-10 rounded-sm cursor-pointer text-[#f7f7f7] font-medium"
               onClick={handleAddBook}
            >
               Add Book
            </button>
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
