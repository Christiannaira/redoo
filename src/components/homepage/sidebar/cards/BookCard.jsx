import { useNavigate } from "react-router-dom";
import BookProfileCard from "./BookProfileCard";
import BooksPhoto from "../../../../assets/booksPhoto.png";
import BooksOne from "../../../../assets/atomicHabits.jpg";
import BooksTwo from "../../../../assets/powerHabits.jpg";
import BooksThree from "../../../../assets/highlyEffectivePeople.png";
import BooksFour from "../../../../assets/thinkgrowrich.jpg";
import BooksFive from "../../../../assets/winfriends.jpg";
import BooksSix from "../../../../assets/briefhistoryoftime.jpg";
import BooksSeven from "../../../../assets/theselfishgene.jpg";
import BooksEight from "../../../../assets/lecturephysics.jpg";

const BookCard = ({ book, location, setActiveSection, index }) => {
   const navigate = useNavigate();

   const handleBook = (book, page) => {
      if (page === "books-management") {
         navigate(`book/${book.id}`);
      } else if (page === "books-management-dashboard") {
         navigate(`books-management/book/${book.id}`);
         setActiveSection("books-management");
      }
   };

   const booksLocalCover = [
      BooksOne,
      BooksTwo,
      BooksThree,
      BooksFour,
      BooksFive,
      BooksSix,
      BooksSeven,
      BooksEight,
      BooksOne,
      BooksOne,
   ];

   if (location === "books-management-dashboard") {
      return (
         <div
            className="flex text-[#222222] justify-between items-center bg-gray-200 mb-2 py-2 px-3 rounded-sm hover:bg-[#FF6927] cursor-pointer transition-all duration-100 ease group hover:text-[#f7f7f7]"
            onClick={() => handleBook(book, "books-management-dashboard")}
         >
            <h3 className="font-medium text-1xl  truncate">{book.title}</h3>
            <span className="font-medium  truncate">{book.author}</span>
         </div>
      );
   }

   return (
      <div>
         <div
            className="max-[500px]:flex-row  max-[500px]:items-center bg-white gap-2 rounded-md p-3 flex flex-col items-left cursor-pointer truncate"
            onClick={() => handleBook(book, "books-management")}
         >
            <img
               src={booksLocalCover[index]}
               alt={`${book.title} cover photo`}
               className="inline-block cursor-pointer w-[100px] sm:w-full h-70"
            />
            <div className="px-2">
               <h2 className="text-[16px] sm:text-[20px] truncate font-medium">
                  {book.title}
               </h2>
               <h3 className="text-[13px] sm:text-sm font-regular text-[#A9A9A9]">
                  by {book.author}
               </h3>
               <div className="mt-2">
                  <div className="flex justify-between">
                     <h3 className="text-[14px] sm:text-md font-medium text-[#515151] truncate">
                        Copies Available
                     </h3>
                     <span className="text-[14px] sm:text-md font-bold text-[#FD7C43] truncate">
                        {book.copiesAvailable ? book.copiesAvailable : "-"}
                     </span>
                  </div>
                  <div className="flex justify-between">
                     <h3 className="text-[14px] sm:text-md font-medium text-[#515151] truncate">
                        Total Copies
                     </h3>
                     <span className="text-[14px] sm:text-md font-bold text-[#FD7C43] truncate">
                        {book.totalCopies ? book.totalCopies : "-"}
                     </span>
                  </div>
                  <div className="flex justify-between">
                     <h3 className="text-[14px] sm:text-md font-medium text-[#515151] truncate">
                        Status
                     </h3>
                     <span
                        className={`text-[14px] sm:text-md font-regular truncate ${
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
      </div>
   );
};

export default BookCard;
