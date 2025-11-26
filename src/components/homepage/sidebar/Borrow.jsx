import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import BorrowPopup from "./cards/BorrowPopup";
import { listBorrowHistory } from "../../../services/BorrowHistory";
import BorrowHistoryCard from "./cards/BorrowHistoryCard";
import { searchBorrowHistory } from "../../../services/BorrowHistory";

const Borrow = () => {
   const [keyword, setKeyword] = useState("");
   const [results, setResults] = useState([]);
   const [allBorrowHistory, setAllBorrowHistory] = useState([]);
   const [popUpUser, setPopUpUser] = useState(false);

   const handleAddBorrowBook = () => {
      setPopUpUser(!popUpUser);
   };

   const handleSearch = async (e) => {
      const value = e.target.value;
      setKeyword(value);

      if (value == "") {
         setAllBorrowHistory([]);
         return;
      }

      // try {
      //    const res = await searchBorrowHistory(value);
      //    setResults(res.data);
      //    console.log(res.data);
      // } catch (err) {
      //    console.error(err);
      // }

      searchBorrowHistory(value)
         .then((res) => {
            setAllBorrowHistory(res.data);
            console.log(res.data);
         })
         .catch((err) => console.error(err));
   };

   const getAllBorrowHistory = () => {
      listBorrowHistory()
         .then((res) => {
            // setAllBorrowHistory(res.data);
            // console.log(res.data);
            setResults(res.data);
         })
         .catch((err) => {
            console.error(err);
         });
   };

   useEffect(() => {
      getAllBorrowHistory();
   }, []);

   return (
      <div className="p-4">
         <div
            className={`fixed top-0 left-0 w-full h-full z-100 bg-[#222222]/20 ${
               popUpUser ? "block" : "hidden"
            }`}
            onClick={handleAddBorrowBook}
         ></div>

         {/* Add User Popup Section */}
         <div
            className={`w-200 p-5 fixed z-200 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md z-500 ${
               popUpUser ? "block" : "hidden"
            }`}
         >
            <BorrowPopup setPopUpUser={setPopUpUser} />
            {/* <UserPopup fetchUsers={getAllUsers} setPopUpUser={setPopUpUser} /> */}
         </div>
         <div className="flex items-center">
            <div>
               <button
                  onClick={(e) => {
                     e.stopPropagation();
                     navigate("/dashboard");
                     setActiveSection("dashboard");
                  }}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
               >
                  <MdArrowBackIos size={25} className="cursor-pointer" />
               </button>
            </div>
            <h2 className="ml-2 text-4xl font-medium text-[#444444] truncate">
               Books Borrowed
            </h2>
         </div>

         <div className="bg-white p-5 rounded-sm mt-5 h-screen relative flex flex-col">
            <button
               className="px-5 py-3 w-35 max-w-full bg-[#FF6927] fixed bottom-10 right-10 rounded-sm cursor-pointer text-[#f7f7f7] font-medium"
               onClick={handleAddBorrowBook}
            >
               Borrow Book
            </button>
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

            <div className="grid grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 px-3 mt-5">
               <h3 className="text-[14px] font-medium truncate text-[#A9A9A9] hidden lg:block">
                  ReferenceID
               </h3>
               <h3 className="text-[14px] font-medium truncate text-[#A9A9A9]">
                  Username
               </h3>
               <h3 className="text-[14px] font-medium truncate text-[#A9A9A9] hidden lg:block">
                  Email
               </h3>
               <h3 className="text-[14px] font-medium truncate text-[#A9A9A9]">
                  Book
               </h3>
               <h3 className="text-[14px] font-medium truncate text-[#A9A9A9] hidden lg:block">
                  Author
               </h3>
               <h3 className="text-[14px] font-medium truncate text-[#A9A9A9] hidden xl:block">
                  Return Deadline
               </h3>

               <h3 className="text-[14px] font-medium truncate text-[#A9A9A9] text-center">
                  Return Book
               </h3>
            </div>

            <div className="mt-5">
               {(keyword === "" ? results : allBorrowHistory).map(
                  (borrowHistory, key) => (
                     <BorrowHistoryCard
                        borrowHistory={borrowHistory}
                        key={key}
                        location={"borrow"}
                        getAllBorrowHistory={getAllBorrowHistory}
                     />
                  )
               )}
            </div>
         </div>
      </div>
   );
};

export default Borrow;
