import { useEffect, useState } from "react";
import { getBook } from "../../../../services/BooksServices";
import { getUser } from "../../../../services/UserServices";
import { borrowBook } from "../../../../services/BorrowHistory";
import { createGuestUser } from "../../../../services/UserServices";

const BorrowPopup = () => {
   const [role, setRole] = useState("");

   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [address, setAddress] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");
   const [email, setEmail] = useState("");

   const [username, setUsername] = useState("");

   const [bookId, setBookId] = useState("");
   const [userId, setUserId] = useState("");

   const [outputReminder, setOutputReminder] = useState("");

   //    const getUserById = async (userId) => {
   //       try {
   //          const res = await getUser(userId);
   //          console.log(res.data);
   //          return res.data;
   //       } catch (error) {
   //          //  console.error(error);
   //          setOutputReminder("Account does not exist!");
   //          console.log("Account does not exist!");
   //          return null;
   //       }
   //    };

   //    const getBookById = async (bookId) => {
   //       try {
   //          const res = await getBook(bookId);
   //          console.log(res.data);
   //          return res.data;
   //       } catch (error) {
   //          setOutputReminder("Account does not exist!");
   //          console.log("Book does not exist!");
   //          return null;
   //       }
   //    };

   const handleBorrowUser = () => {
      const borrowBookUserEntry = [bookId, userId];
      console.log(borrowBookUserEntry);

      //   getUserById(userId);
      //   getBookById(bookId);

      borrowBook(userId, bookId)
         .then((res) => {
            alert("added");
         })
         .catch((err) => {
            console.error(err);
         });
   };

   const handleBorrowNonUser = () => {
      if (
         firstName === "" ||
         lastName === "" ||
         address === "" ||
         phoneNumber === "" ||
         email === ""
      ) {
         alert("field must not be empty");
      } else {
         const borrowBookNonUserEntry = {
            firstName,
            lastName,
            address,
            phoneNumber,
            email,
         };

         createGuestUser(borrowBookNonUserEntry)
            .then((res) => {
               alert("added");
               setFirstName("");
               setLastName("");
               setEmail("");
               setAddress("");
               setPhoneNumber("");
               //    fetchUsers();
               //    setPopUpUser(false);

               borrowBook(res.data.id, bookId)
                  .then((res) => {
                     alert("added");
                  })
                  .catch((err) => {
                     console.error(err);
                  });
            })
            .catch((err) => {
               // console.error(err);
               // alert("Successfully User Added");
            });

         console.log(borrowBookNonUserEntry);
      }
   };

   return (
      <div>
         <div>
            {/* Role Selector */}
            <div>
               <label className="block font-medium text-[#515151]">Role</label>
               <div className="flex items-center gap-6 mt-2">
                  <label className="flex items-center gap-2">
                     <input
                        type="radio"
                        name="role"
                        value="User"
                        checked={role === "User"}
                        onChange={(e) => setRole(e.target.value)}
                     />
                     User
                  </label>
                  {/* 
                  <label className="flex items-center gap-2">
                     <input
                        type="radio"
                        name="role"
                        value="Admin"
                        checked={role === "Admin"}
                        onChange={(e) => setRole(e.target.value)}
                     />
                     Admin
                  </label> */}

                  <label className="flex items-center gap-2">
                     <input
                        type="radio"
                        name="role"
                        value="NonUser"
                        checked={role === "NonUser"}
                        onChange={(e) => setRole(e.target.value)}
                     />
                     Non-User
                  </label>
               </div>
            </div>

            {/* NonUser extra fields */}
            {role === "NonUser" && (
               <>
                  <div className="grid grid-cols-2 gap-3 mt-5">
                     <div>
                        <label className="block font-medium text-[#515151]">
                           FirstName
                        </label>
                        <input
                           type="text"
                           placeholder="Enter firstname"
                           className="block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                           value={firstName}
                           onChange={(e) => setFirstName(e.target.value)}
                        />
                     </div>

                     <div>
                        <label className="block font-medium text-[#515151]">
                           LastName
                        </label>
                        <input
                           type="text"
                           placeholder="Enter lastname"
                           className="block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                           value={lastName}
                           onChange={(e) => setLastName(e.target.value)}
                        />
                     </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-5">
                     <div>
                        <label className="block font-medium text-[#515151]">
                           Address
                        </label>
                        <input
                           type="text"
                           placeholder="Enter address"
                           className="block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                           value={address}
                           onChange={(e) => setAddress(e.target.value)}
                        />
                     </div>

                     <div>
                        <label className="block font-medium text-[#515151]">
                           Phone Number
                        </label>
                        <input
                           type="text"
                           placeholder="Enter phone number"
                           className="block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                           value={phoneNumber}
                           onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                     </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-5">
                     <div>
                        <label className="block font-medium text-[#515151]">
                           Email
                        </label>
                        <input
                           type="email"
                           placeholder="Enter email"
                           className="block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                        />
                     </div>
                     <div>
                        <label className="block font-medium text-[#515151]">
                           Book ReferenceID
                        </label>
                        <input
                           type="text"
                           placeholder="Enter book ReferenceID"
                           className="block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                           value={bookId}
                           onChange={(e) => setBookId(e.target.value)}
                        />
                     </div>
                  </div>

                  <div className="mt-5">
                     <button
                        className="px-5 py-4 border rounded-sm"
                        onClick={handleBorrowNonUser}
                     >
                        Borrow Book
                     </button>
                  </div>
               </>
            )}

            {/* UsernID field */}
            {role === "User" && (
               <>
                  <div className="flex flex-col gap-5 mt-5">
                     <div>
                        <label className="block font-medium text-[#515151]">
                           User ReferenceID
                        </label>
                        <input
                           type="text"
                           placeholder="Enter user ReferenceID"
                           className="block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                           value={userId}
                           onChange={(e) => setUserId(e.target.value)}
                        />
                     </div>
                     <div>
                        <label className="block font-medium text-[#515151]">
                           Book ReferenceID
                        </label>
                        <input
                           type="text"
                           placeholder="Enter book ReferenceID"
                           className="block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                           value={bookId}
                           onChange={(e) => setBookId(e.target.value)}
                        />
                     </div>
                  </div>

                  <div className="mt-5">
                     <button
                        className="px-5 py-4 border rounded-sm"
                        onClick={handleBorrowUser}
                     >
                        Borrow Book
                     </button>
                  </div>
               </>
            )}
         </div>
      </div>
   );
};

export default BorrowPopup;
