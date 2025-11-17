import UserManagement from "./UserManagement";
import BooksManagement from "./BooksManagement";
import BorrowBooks from "./Borrow";
import History from "./History";
import Approval from "./Approval";
import { MdOutlineVerified } from "react-icons/md";
import { PiUsers, PiBooks } from "react-icons/pi";

const Dashboard = () => {
   const dummyAccounts = [
      { username: "Christian Naira", date: "11/15/2025" },
      { username: "Zaid Competente", date: "11/15/2025" },
      { username: "Laurence Gomez", date: "11/14/2025" },
      { username: "Nazh Abadeza", date: "11/13/2025" },
      { username: "Dominique Jao", date: "11/13/2025" },
      { username: "Prince Jamil Romero", date: "11/10/2025" },
      { username: "John Expie Berjuega", date: "11/10/2025" },
      { username: "Arn Gile", date: "11/09/2025" },
   ];

   return (
      <div className="p-4">
         <h1 className="text-4xl font-medium text-[#444444]">Dashboard</h1>
         <div className="bg-white p-5 rounded-sm my-5 w-full">
            <div className="grid grid-cols-3 gap-3">
               <div className="flex items-center gap-3">
                  <div class="w-25 h-25 rounded-full bg-gradient-to-b from-orange-300 to-white flex items-center justify-center">
                     <PiUsers size={35} color="#fff" />
                  </div>
                  <div>
                     <span className="text-sm font-medium text-gray-400">
                        Total Users
                     </span>
                     <h3 className="text-4xl font-bold">300</h3>
                  </div>
               </div>

               <div className="flex items-center gap-3">
                  <div class="w-25 h-25 rounded-full bg-gradient-to-b from-orange-300 to-white flex items-center justify-center">
                     <MdOutlineVerified size={35} color="#fff" />
                  </div>
                  <div>
                     <span className="text-sm font-medium text-gray-400">
                        Verified Users
                     </span>
                     <h3 className="text-4xl font-bold">150</h3>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <div class="w-25 h-25 rounded-full bg-gradient-to-b from-orange-300 to-white flex items-center justify-center">
                     <PiBooks size={35} color="#fff" />
                  </div>

                  <div>
                     <span className="text-sm font-medium text-gray-400">
                        Total Borrowed Books
                     </span>
                     <h3 className="text-4xl font-bold">130</h3>
                  </div>
               </div>
            </div>
         </div>
         <div className="grid grid-cols-2 gap-5 mt-3 min-h-screen">
            <div className="bg-white p-5 rounded-sm">
               <div className="flex items-center justify-between">
                  <h3>All Users</h3>
                  <a href="">View All</a>
               </div>
               <div className="mt-5">
                  {dummyAccounts.map((account, key) => (
                     <div
                        key={key}
                        className="flex justify-between items-center bg-gray-200 mb-2 py-2 px-3 rounded-sm hover:bg-[#FF6927] cursor-pointer transition-full duration-200 ease-in-out"
                        onClick={() => alert(account.username)}
                     >
                        <h3>{account.username}</h3>
                        <span>{account.date}</span>
                     </div>
                  ))}
               </div>
            </div>
            <div>
               <div>
                  <div className="flex items-center justify-between bg-white p-5 rounded-sm">
                     <h3>All Books</h3>
                     <a href="">View All</a>
                  </div>
                  <div>
                     <button>Borrow Book</button>
                     <button>Return Books</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Dashboard;
