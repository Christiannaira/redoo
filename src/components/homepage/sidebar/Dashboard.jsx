import UserManagement from "./UserManagement";
import BooksManagement from "./BooksManagement";
import BorrowBooks from "./Borrow";
import History from "./History";
import Approval from "./Approval";
import { MdOutlineVerified } from "react-icons/md";
import { PiUsers, PiBooks } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { listUsers } from "../../../services/UserServices";
import UserCard from "./cards/UserCard";
import { useNavigate, useOutletContext } from "react-router-dom";

const Dashboard = () => {
   const [users, setUsers] = useState([]);
   const { setActiveSection } = useOutletContext();

   const navigator = useNavigate();

   const handleViewClick = () => {
      navigator("/dashboard/user-management");
      setActiveSection("user-management");
   };

   useEffect(() => {
      getAllUsers();
   }, []);

   function getAllUsers() {
      listUsers()
         .then((response) => {
            setUsers(response.data);
         })
         .catch((error) => {
            console.error(error);
         });
   }

   const dummyBooks = [
      { title: "Harry Potter", author: "J.K Rowling" },
      { title: "Harry Potter", author: "J.K Rowling" },
      { title: "Harry Potter", author: "J.K Rowling" },
      { title: "Harry Potter", author: "J.K Rowling" },
      { title: "Harry Potter", author: "J.K Rowling" },
      { title: "Harry Potter", author: "J.K Rowling" },
      { title: "Harry Potter", author: "J.K Rowling" },
      { title: "Harry Potter", author: "J.K Rowling" },
      { title: "Harry Potter", author: "J.K Rowling" },
      { title: "Harry Potter", author: "J.K Rowling" },
   ];

   return (
      <div className="p-4">
         <h1 className="text-4xl font-medium text-[#444444]">Dashboard</h1>
         <div className="bg-white p-5 rounded-sm my-5 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {/* Total Users */}
               <div className="flex items-center gap-4 relative">
                  <div className="hidden xl:block absolute top-0 right-0 h-full w-1 bg-gray-900/5 rounded-full" />
                  <div className="w-20 h-20 rounded-full bg-gradient-to-b from-orange-400 to-white flex items-center justify-center shadow">
                     <PiUsers size={30} color="#fff" />
                  </div>
                  <div>
                     <span className="text-sm font-medium text-gray-400">
                        Total Users
                     </span>
                     <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700">
                        300
                     </h3>
                  </div>
               </div>

               {/* Verified Users */}
               <div className="flex items-center gap-4 relative">
                  <div className="hidden xl:block absolute top-0 right-0 h-full w-1 bg-gray-900/5 rounded-full" />
                  <div className="w-20 h-20 rounded-full bg-gradient-to-b from-orange-400 to-white flex items-center justify-center shadow">
                     <MdOutlineVerified size={30} color="#fff" />
                  </div>
                  <div>
                     <span className="text-sm font-medium text-gray-400">
                        Verified Users
                     </span>
                     <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700">
                        150
                     </h3>
                  </div>
               </div>

               {/* Borrowed Books */}
               <div className="flex items-center gap-4 relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-b from-orange-400 to-white flex items-center justify-center shadow">
                     <PiBooks size={30} color="#fff" />
                  </div>
                  <div>
                     <span className="text-sm font-medium text-gray-400">
                        Total Borrowed Books
                     </span>
                     <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700">
                        130
                     </h3>
                  </div>
               </div>
            </div>
         </div>

         <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-3 min-h-screen">
            <div className="bg-white p-5 rounded-sm">
               <div className="flex items-center justify-between relative md:pb-5 pb-2">
                  <div className="absolute xl:w-50 lg:w-40 md:w-30 sm:w-20 h-1 bg-gray-200 bottom-[-8px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full" />
                  <h3 className="font-bold text-1xl md:text-2xl lg:text-3xl">
                     All Users
                  </h3>
                  <span
                     className="font-medium text-[#FF6927] text-xl cursor-pointer hidden md:block"
                     onClick={handleViewClick}
                  >
                     View All
                  </span>
               </div>
               <div className="mt-5 flex justify-between items-center">
                  <h3 className="text-1xl lg:text-2xl font-medium text-[#333333]">
                     Username
                  </h3>
                  <h3 className="text-1xl lg:text-2xl font-medium text-[#333333]">
                     Joined Date
                  </h3>
               </div>
               <div className="mt-2">
                  {users.map((user, key) => (
                     <UserCard user={user} key={key} location />
                  ))}
               </div>
            </div>
            <div>
               <div>
                  <div className="bg-white p-5 rounded-sm">
                     <div className="flex items-center justify-between relative md:pb-5 pb-2">
                        <div className="absolute xl:w-50 lg:w-40 md:w-30 sm:w-20 h-1 bg-gray-200 bottom-[-8px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full" />
                        <h3 className="font-bold text-1xl md:text-2xl lg:text-3xl">
                           All Books
                        </h3>
                        <Link className="font-medium text-[#FF6927] text-xl  hidden md:block">
                           View All
                        </Link>
                     </div>
                     <div className="mt-5 flex justify-between items-center">
                        <h3 className="text-1xl lg:text-2xl font-medium text-[#333333]">
                           Book Title
                        </h3>
                        <h3 className="text-1xl lg:text-2xl font-medium text-[#333333]">
                           Book Author
                        </h3>
                     </div>
                     <div className="mt-5">
                        {dummyBooks.map((book, key) => (
                           <div
                              key={key}
                              className="flex justify-between items-center bg-gray-200 mb-2 py-2 px-3 rounded-sm hover:bg-[#FF6927] cursor-pointer transition-full duration-200 ease-in-out"
                              onClick={() => alert(book.title)}
                           >
                              <h3>{book.title}</h3>
                              <span>{book.author}</span>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="flex items-center justify-center gap-3 mt-5">
                     <button className="px-8 py-4 border border-orange-600 rounded-2xl cursor-pointer hover:bg-orange-600 hover:text-white transition-all duration ease-in-out font-medium">
                        Borrow Book
                     </button>
                     <button className="px-8 py-4 border border-transparent bg-orange-600 text-white rounded-2xl cursor-pointer hover:border-orange-600 transition-all duration ease-in-out hover:bg-orange-700 font-medium">
                        Return Books
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Dashboard;
