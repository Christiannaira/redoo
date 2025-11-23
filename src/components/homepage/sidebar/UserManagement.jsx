import { useEffect, useState } from "react";
import { listUsers, searchUser } from "../../../services/UserServices";
import UserCard from "./cards/UserCard";
import { IoSearch } from "react-icons/io5";

const UserManagement = () => {
   const [users, setUsers] = useState([]);
   const [keyword, setKeyword] = useState("");
   const [results, setResults] = useState([]);

   useEffect(() => {
      getAllUsers();
   }, []);

   const handleSearch = async (e) => {
      const value = e.target.value;
      setKeyword(value);

      if (value == "") {
         setResults([]);
         return;
      }

      searchUser(value)
         .then((response) => {
            setResults(response.data);
         })
         .catch((err) => {
            console.error(err);
         });
   };

   function getAllUsers() {
      listUsers()
         .then((response) => {
            setUsers(response.data);
         })
         .catch((error) => {
            console.error(error);
         });
   }

   return (
      <div className="p-4">
         <h2 className="text-4xl font-medium text-[#444444] truncate">
            User Management
         </h2>
         <div className="bg-white p-5 rounded-sm mt-5 h-screen relative flex flex-col">
            <button className="px-5 py-3 bg-green-500 fixed bottom-10 right-10 rounded-sm cursor-pointer">
               Add User
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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 px-3 mt-5">
               <h3 className="text-[14px] font-medium truncate text-[#A9A9A9]">
                  Username
               </h3>
               <h3 className="text-[14px] font-medium truncate text-[#A9A9A9] hidden md:block">
                  Email
               </h3>
               <h3 className="text-[14px] font-medium truncate text-[#A9A9A9] hidden lg:block">
                  First Name
               </h3>
               <h3 className="text-[14px] font-medium truncate text-[#A9A9A9] hidden lg:block">
                  Last Name
               </h3>
               <h3 className="text-[14px] font-medium truncate text-[#A9A9A9] hidden sm:block">
                  Role
               </h3>
               <h3 className="text-[14px] font-medium truncate text-[#A9A9A9] hidden lg:block">
                  Status
               </h3>

               <h3 className="text-[14px] font-medium truncate text-[#A9A9A9] hidden 2xl:block">
                  Date Created
               </h3>

               <h3 className="text-[14px] font-medium truncate text-[#A9A9A9] hidden xl:block text-center">
                  Remove User
               </h3>
            </div>
            <div className="mt-5">
               {(keyword === "" ? users : results).map((user, key) => (
                  <UserCard
                     user={user}
                     key={key}
                     location={"user-management"}
                     getAllUsers={getAllUsers}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

export default UserManagement;
