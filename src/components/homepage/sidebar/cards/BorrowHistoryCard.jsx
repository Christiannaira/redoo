import React from "react";

const BorrowHistoryCard = ({
   borrowHistory,
   location,
   getAllBorrowHistory,
}) => {
   return (
      <div>
         <div className="grid grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 px-3 text-[#222222] bg-gray-200 mb-2 py-2 px-3 rounded-sm hover:bg-[#FF6927] cursor-pointer transition-all duration-100 ease-out group hover:text-[#f7f7f7]">
            <h3 className="font-medium text-[14px] truncate hidden lg:block">
               {borrowHistory.user.id}
            </h3>
            <h3 className="font-medium text-[14px] truncate">
               {borrowHistory.user.username}
            </h3>
            <h3 className="font-medium text-[14px] truncate hidden lg:block">
               {borrowHistory.user.email}
            </h3>
            <h3 className="font-medium text-[14px] truncate">
               {borrowHistory.book.title}
            </h3>
            <h3 className="font-medium text-[14px] truncate hidden lg:block">
               {borrowHistory.book.author}
            </h3>
            <h3 className="font-medium text-[14px] truncate hidden xl:block">
               default date
            </h3>
            <button
               className="font-medium text-[14px] truncate"
               onClick={() => alert("book returned")}
            >
               Return
            </button>
         </div>
      </div>
   );
};

export default BorrowHistoryCard;
