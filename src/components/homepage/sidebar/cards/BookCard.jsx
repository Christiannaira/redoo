import BooksPhoto from "../../../../assets/booksPhoto.png";
import { useNavigate } from "react-router-dom";
import BookProfileCard from "./BookProfileCard";

const BookCard = ({ book, location, setActiveSection }) => {
   const navigate = useNavigate();

   const handleBook = () => {
      navigate(`book/${book.id}`);
   };

   return (
      <div>
         <div
            className="bg-white gap-2 rounded-md p-3 flex flex-col items-left cursor-pointer"
            onClick={handleBook}
         >
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
                        {book.copiesAvailable ? book.copiesAvailable : "-"}
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
      </div>
   );
};

export default BookCard;
