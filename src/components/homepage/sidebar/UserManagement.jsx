import { useEffect, useState } from "react";
import { listUsers } from "../../../services/UserServices";
import UserCard from "./cards/UserCard";

const UserManagement = () => {
   const [users, setUsers] = useState([]);

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

   return (
      <div className="p-5">
         <h2>User Management</h2>
         <div className="bg-white p-5 rounded-sm mt-5">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 px-3">
               <h3 className="text-[14px] font-medium truncate">Username</h3>
               <h3 className="text-[14px] font-medium truncate hidden md:block">
                  Email
               </h3>
               <h3 className="text-[14px] font-medium truncate hidden lg:block">
                  First Name
               </h3>
               <h3 className="text-[14px] font-medium truncate hidden lg:block">
                  Last Name
               </h3>
               <h3 className="text-[14px] font-medium truncate">Role</h3>
               <h3 className="text-[14px] font-medium truncate hidden lg:block">
                  Status
               </h3>

               <h3 className="text-[14px] font-medium truncate hidden 2xl:block">
                  Date Created
               </h3>

               <h3 className="text-[14px] font-medium truncate hidden xl:block">
                  Remove User
               </h3>
            </div>
            <div className="mt-5">
               {users.map((user, key) => (
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
