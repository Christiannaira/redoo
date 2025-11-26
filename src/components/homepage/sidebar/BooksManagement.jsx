import { useState, useEffect } from "react";
import {
   listBooks,
   listBooksSorted,
   searchBook,
} from "../../../services/BooksServices";

import BookCard from "./cards/BookCard";
import { useOutletContext } from "react-router-dom";
import BookPopup from "./cards/BookPopup";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const BooksManagement = ({ isLogin, setIsLogin }) => {
   const [books, setBooks] = useState([]);
   const [results, setResults] = useState([]);
   const [keyword, setKeyword] = useState("");
   const [popUpBook, setPopUpBook] = useState(false);

   const { setActiveSection } = useOutletContext();
   const navigate = useNavigate();

   const sortBy = "createdAt";
   const direction = "desc";

   // ---------------------------------
   // FETCH SORTED BOOKS (DEFAULT VIEW)
   // ---------------------------------
   const getAllBooks = () => {
      listBooksSorted(sortBy, direction)
         .then((response) => setBooks(response.data))
         .catch((error) => console.error("Fetch books error:", error));
   };

   useEffect(() => {
      getAllBooks();
   }, []);

   // ---------------------------------
   // SEARCH FUNCTION
   // ---------------------------------
   const handleSearch = async (e) => {
      const value = e.target.value;
      setKeyword(value);

      console.log(value);

      if (value.trim() === "") {
         setResults([]); // Clears search results
         return;
      }

      searchBook(value.trim())
         .then((response) => {
            const data = response.data;
            console.log(data);
            setResults(Array.isArray(data) ? data : []);
         })
         .catch((err) => console.error("Search error:", err));
   };

   // ---------------------------------
   // LOGIN VALIDATION
   // ---------------------------------
   useEffect(() => {
      if (!isLogin) {
         navigate("/signin");
      }
   }, [isLogin, navigate]);

   // ---------------------------------
   // POPUP HANDLER
   // ---------------------------------
   const handleAddBook = () => {
      setPopUpBook(!popUpBook);
   };

   // ---------------------------------
   // DETERMINE WHICH LIST IS SHOWN
   // ---------------------------------
   const normalizeArray = (data) => {
      if (Array.isArray(data)) return data;
      if (!data) return [];
      // if backend returns a single object instead of array:
      return [data];
   };

   const displayedBooks =
      keyword.trim() === "" ? normalizeArray(books) : normalizeArray(results);

   // ---------------------------------
   // RENDER
   // ---------------------------------
   return (
      <div className="p-4 flex flex-col">
         {/* BACKDROP */}
         {popUpBook && (
            <div
               className="fixed top-0 left-0 w-full h-full bg-[#222222]/20"
               onClick={handleAddBook}
            ></div>
         )}

         {/* POPUP */}
         {popUpBook && (
            <div
               className="w-200 max-w-full p-5 fixed bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md"
               onClick={(e) => e.stopPropagation()} // 🔥 prevents popup closing when clicking inside
            >
               <BookPopup
                  fetchBooks={getAllBooks}
                  setPopUpBook={setPopUpBook}
               />
            </div>
         )}

         <h2 className="text-4xl font-medium text-[#444444]">
            Books Management
         </h2>

         {/* SEARCH BAR */}
         <div className="flex items-center bg-gray-100/50 rounded-md flex-row w-full max-w-full self-end mt-4">
            <input
               type="text"
               placeholder="Search..."
               className="flex-1 min-w-0 focus:outline-none py-3 px-5"
               value={keyword}
               onChange={handleSearch}
            />
            <button className="rounded-tr-md rounded-br-md bg-[#333333] py-3 px-6 hover:bg-[#FF6927]">
               <IoSearch size={20} className="text-white" />
            </button>
         </div>

         {/* BOOKS GRID */}
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 mt-5">
            {displayedBooks.map((book, index) => (
               <BookCard
                  book={book}
                  location="books-management"
                  setActiveSection={setActiveSection}
                  index={index}
                  key={book.id}
               />
            ))}
         </div>

         {/* ADD BOOK BUTTON */}
         <button
            className="px-5 py-3 bg-[#FF6927] fixed bottom-10 right-10 rounded-sm text-white font-medium"
            onClick={handleAddBook}
         >
            Add Book
         </button>
      </div>
   );
};

export default BooksManagement;
