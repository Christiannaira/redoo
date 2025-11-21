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
            <div className="grid grid-cols-8 px-3">
               <h3 className="text-[14px] font-medium">Username</h3>
               <h3 className="text-[14px] font-medium">Email</h3>
               <h3 className="text-[14px] font-medium">First Name</h3>
               <h3 className="text-[14px] font-medium">Last Name</h3>
               <h3 className="text-[14px] font-medium">Role</h3>
               <h3 className="text-[14px] font-medium">Status</h3>
               <h3 className="text-[14px] font-medium">Date Created</h3>
            </div>
            <div className="mt-5">
               {users.map((user, key) => (
                  <UserCard
                     user={user}
                     key={key}
                     location={"user-management"}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

export default UserManagement;
