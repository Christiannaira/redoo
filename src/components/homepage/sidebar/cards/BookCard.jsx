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

   const handleBook = () => {
      navigate(`book/${book.id}`);
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

   return (
      <div>
         <div
            className="max-[500px]:flex-row  max-[500px]:items-center bg-white gap-2 rounded-md p-3 flex flex-col items-left cursor-pointer truncate"
            onClick={handleBook}
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
