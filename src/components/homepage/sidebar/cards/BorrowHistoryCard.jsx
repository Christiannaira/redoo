import { useState } from "react";

import { getUser } from "../../../../services/UserServices";
import { getBook } from "../../../../services/BooksServices";

import { updateUser } from "../../../../services/UserServices";
import { updateBook } from "../../../../services/BooksServices";
import { deleteBorrowHistory } from "../../../../services/BorrowHistory";

import { borrowBook } from "../../../../services/BorrowHistory";
import { updateBorrowHistory } from "../../../../services/BorrowHistory";

const BorrowHistoryCard = ({
   borrowHistory,
   location,
   getAllBorrowHistory,
   setPopUpUser,
}) => {
   const dueDatesRaw = borrowHistory.returnDate;
   const dueDates = dueDatesRaw ? new Date(dueDatesRaw) : null;

   // const handleReturn = async () => {
   //    try {
   //       const userId = borrowHistory.user?.id;
   //       const bookId = borrowHistory.book?.id;
   //       const historyId = borrowHistory.id; // the row to delete

   //       // 1. Get latest user + book
   //       const userRes = await getUser(userId);
   //       const bookRes = await getBook(bookId);

   //       const user = userRes.data;
   //       const book = bookRes.data;

   //       // 2. Update book.copiesAvailable (+1 because RETURN)
   //       const newCopies = book.copiesAvailable + 1;

   //       await updateBook(bookId, { copiesAvailable: newCopies });

   //       // 3. Update user.booksBorrowed (-1 because RETURN)
   //       const updatedBorrowCount = (user.booksBorrowed || 0) - 1;

   //       await updateUser(userId, { booksBorrowed: updatedBorrowCount });

   //       // 4. Delete the borrow history row
   //       await deleteBorrowHistory(historyId);

   //       alert("Book returned successfully");
   //       getAllBorrowHistory();
   //       setPopUpUser(false);
   //    } catch (err) {
   //       console.error(err);
   //       alert("Return failed");
   //    }
   // };

   const handleReturn = async () => {
      try {
         const userId = borrowHistory.user?.id;
         const bookId = borrowHistory.book?.id;
         const historyId = borrowHistory.id;

         // 1. Get latest user + book
         const userRes = await getUser(userId);
         const bookRes = await getBook(bookId);

         const user = userRes.data;
         const book = bookRes.data;

         // 2. Update book copiesAvailable (+1)
         const newCopies = book.copiesAvailable + 1;
         await updateBook(bookId, { copiesAvailable: newCopies });

         // 3. Update user's booksBorrowed (-1)
         const updatedBorrowCount = (user.booksBorrowed || 0) - 1;
         await updateUser(userId, { booksBorrowed: updatedBorrowCount });

         // 4. Update status instead of deleting
         await updateBorrowHistory(historyId, { status: "Returned" });

         alert("Book returned successfully");
         getAllBorrowHistory();
         setPopUpUser(false);
      } catch (err) {
         console.error(err);
         alert("Return failed");
      }
   };

   return (
      <div>
         <div className="grid grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 px-3 text-[#222222] bg-gray-200 mb-2 py-2 px-3 rounded-sm hover:bg-[#FF6927] cursor-pointer transition-all duration-100 ease-out group hover:text-[#f7f7f7]">
            <h3 className="font-medium text-[14px] truncate hidden lg:block">
               {borrowHistory.user?.id ?? "N/A"}
            </h3>

            <h3 className="font-medium text-[14px] truncate">
               {borrowHistory.user?.username ?? "Unknown"}
            </h3>

            <h3 className="font-medium text-[14px] truncate hidden lg:block">
               {borrowHistory.user?.email ?? "No email"}
            </h3>

            <h3 className="font-medium text-[14px] truncate">
               {borrowHistory.book?.title ?? "Unknown Book"}
            </h3>

            <h3 className="font-medium text-[14px] truncate hidden lg:block">
               {borrowHistory.book?.author ?? "Unknown"}
            </h3>
            <h3 className="font-medium text-[14px] truncate hidden xl:block">
               {!dueDates || dueDates === "" || dueDates === "0000-00-00"
                  ? "No Due Date"
                  : new Date(dueDates).toLocaleDateString("en-US", {
                       year: "numeric",
                       month: "short",
                       day: "numeric",
                    })}
            </h3>
            <button
               className="font-medium text-[14px] truncate"
               onClick={handleReturn}
            >
               Return
            </button>
         </div>
      </div>
   );
};

export default BorrowHistoryCard;
