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

const Dashboard = () => {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      getAllUsers();
   }, []);

   function getAllUsers() {
      listUsers()
         .then((response) => {
            // const sortedUsers = [...response.data].sort(
            //    (a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)
            // );

            // sorting desc data in frontend
            setUsers(response.data);
         })
         .catch((error) => {
            console.error(error);
         });
   }

   // const dummyAccounts = [
   //    { username: "Christian Naira", date: "11/15/2025" },
   //    { username: "Zaid Competente", date: "11/15/2025" },
   //    { username: "Laurence Gomez", date: "11/14/2025" },
   //    { username: "Nazh Abadeza", date: "11/13/2025" },
   //    { username: "Dominique Jao", date: "11/13/2025" },
   //    { username: "Prince Jamil Romero", date: "11/10/2025" },
   //    { username: "John Expie Berjuega", date: "11/10/2025" },
   //    { username: "Arn Gile", date: "11/09/2025" },
   //    { username: "Christian Naira", date: "11/15/2025" },
   //    { username: "Zaid Competente", date: "11/15/2025" },
   //    { username: "Laurence Gomez", date: "11/14/2025" },
   //    { username: "Nazh Abadeza", date: "11/13/2025" },
   //    { username: "Dominique Jao", date: "11/13/2025" },
   //    { username: "Prince Jamil Romero", date: "11/10/2025" },
   //    { username: "John Expie Berjuega", date: "11/10/2025" },
   //    { username: "Arn Gile", date: "11/09/2025" },
   // ];

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
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
               <div className="flex items-center gap-3 relative">
                  <div className="xl:h-full xl:w-1 xl:bg-gray-900/5 xl:top-0 xl:right-30 xl:absolute xl:rounded-full" />
                  <div className="w-25 h-25 rounded-full bg-gradient-to-b from-orange-400 to-white flex items-center justify-center">
                     <PiUsers size={35} color="#fff" />
                  </div>
                  <div>
                     <span className="text-sm font-medium text-gray-400">
                        Total Users
                     </span>
                     <h3 className="text-5xl font-bold text-gray-700">300</h3>
                  </div>
               </div>

               <div className="flex items-center gap-3 relative">
                  <div className="xl:h-full xl:w-1 xl:bg-gray-900/5 xl:top-0 xl:right-30 xl:absolute xl:rounded-full" />
                  <div class="w-25 h-25 rounded-full bg-gradient-to-b from-orange-400 to-white flex items-center justify-center">
                     <MdOutlineVerified size={35} color="#fff" />
                  </div>
                  <div>
                     <span className="text-sm font-medium text-gray-400">
                        Verified Users
                     </span>
                     <h3 className="text-5xl font-bold text-gray-700">150</h3>
                  </div>
               </div>
               <div className="flex items-center gap-3 relative">
                  <div class="w-25 h-25 rounded-full bg-gradient-to-b from-orange-400 to-white flex items-center justify-center">
                     <PiBooks size={35} color="#fff" />
                  </div>

                  <div>
                     <span className="text-sm font-medium text-gray-400">
                        Total Borrowed Books
                     </span>
                     <h3 className="text-5xl font-bold text-gray-700">130</h3>
                  </div>
               </div>
            </div>
         </div>
         <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-3 min-h-screen">
            <div className="bg-white p-5 rounded-sm">
               <div className="flex items-center justify-between">
                  <h3 className="font-bold text-3xl">All Users</h3>
                  <Link className="font-medium text-[#FF6927] text-xl">
                     View All
                  </Link>
               </div>
               <div className="mt-5">
                  {/* {dummyAccounts.map((account, key) => (
                     <div
                        key={key}
                        className="flex justify-between items-center bg-gray-200 mb-2 py-2 px-3 rounded-sm hover:bg-[#FF6927] cursor-pointer transition-full duration-200 ease-in-out"
                        onClick={() => alert(account.username)}
                     >
                        <h3>{account.username}</h3>
                        <span>{account.date}</span>
                     </div>
                  ))} */}
                  {users.map((user, key) => (
                     <UserCard user={user} key={key} />
                  ))}
               </div>
            </div>
            <div>
               <div>
                  <div className="bg-white p-5 rounded-sm">
                     <div className="flex items-center justify-between">
                        <h3 className="font-bold text-3xl">All Books</h3>
                        <Link className="font-medium text-[#FF6927] text-xl">
                           View All
                        </Link>
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
