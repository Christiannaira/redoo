import { useEffect, useState } from "react";
import { getBook } from "../../../../services/BooksServices";
import { getUser } from "../../../../services/UserServices";
import { borrowBook } from "../../../../services/BorrowHistory";
import { createGuestUser } from "../../../../services/UserServices";
import { updateBook } from "../../../../services/BooksServices";
import { updateUser } from "../../../../services/UserServices";

const BorrowPopup = ({ setPopUpUser, getAllBorrowHistory }) => {
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

   const handleBorrowUser = () => {
      if (!userId || !bookId) {
         alert("User ID and Book ID must not be empty");
         return;
      }

      // 1. Get user info first
      getUser(userId)
         .then(async (userRes) => {
            if (!userRes.data) {
               alert("User not found");
               return Promise.reject("User not found");
            }

            return getBook(bookId).then((bookRes) => ({
               user: userRes.data,
               book: bookRes.data,
            }));
         })
         .then(async ({ user, book }) => {
            const newCopies = book.copiesAvailable - 1;

            if (newCopies < 0) {
               alert("No copies available");
               return Promise.reject("No copies available");
            }

            // 2. Update book copies
            return updateBook(bookId, { copiesAvailable: newCopies }).then(
               () => user
            );
         })
         .then(async (user) => {
            // 3. Add borrowHistory
            return borrowBook(user.id, bookId).then(() => user);
         })
         .then((user) => {
            // 4. Update user's borrowedBooks count
            const previous = user.booksBorrowed || 0;
            const updatedCount = previous + 1;

            return updateUser(user.id, { booksBorrowed: updatedCount });
         })
         .then(() => {
            alert("Borrow process completed");
            getAllBorrowHistory();
            setPopUpUser(false);
         })
         .catch((err) => {
            console.error(err);
            alert("failed");
         });
   };

   // const handleBorrowNonUser = () => {
   //    if (
   //       firstName === "" ||
   //       lastName === "" ||
   //       address === "" ||
   //       phoneNumber === "" ||
   //       email === ""
   //    ) {
   //       alert("field must not be empty");
   //       return;
   //    }

   //    // 1. Get the book details
   //    getBook(bookId)
   //       .then((res) => {
   //          const newCopies = res.data.copiesAvailable - 1;

   //          if (newCopies < 0) {
   //             alert("No copies available");
   //             return;
   //          }

   //          // 2. Update the book copies
   //          return updateBook(bookId, { copiesAvailable: newCopies })
   //             .then(() => {
   //                // 3. Create guest user
   //                const guestData = {
   //                   firstName,
   //                   lastName,
   //                   address,
   //                   phoneNumber,
   //                   email,
   //                };

   //                return createGuestUser(guestData);
   //             })
   //             .then((userRes) => {
   //                // 4. Borrow the book

   //                const userId = userRes.data.id;

   //                // 4. Borrow the book (borrowHistory entry)
   //                return borrowBook(userId, bookId).then(() => {
   //                   // 5. Update user.borrowedBooks
   //                   return getUser(userId).then((userData) => {
   //                      const previousCount = userData.data.booksBorrowed || 0;
   //                      const newCount = previousCount + 1;
   //                      return updateUser(userId, { booksBorrowed: newCount });
   //                   });
   //                });

   //                console.log(userId);

   //                // return borrowBook(userRes.data.id, bookId);
   //             })
   //             .then(() => {
   //                alert("Borrow process completed");
   //                getAllBorrowHistory();
   //                setPopUpUser(false);
   //             });
   //       })
   //       .catch((err) => console.error(err));
   // };

   const handleBorrowNonUser = () => {
      if (!firstName || !lastName || !address || !phoneNumber || !email) {
         alert("Fields must not be empty");
         return;
      }

      const guestData = { firstName, lastName, address, phoneNumber, email };

      // 1. Create or get existing guest user
      createGuestUser(guestData)
         .then(async (userRes) => {
            const userId = userRes.data.id;

            // 2. Get book info
            return getBook(bookId).then((res) => ({ userId, book: res.data }));
         })
         .then(({ userId, book }) => {
            const newCopies = book.copiesAvailable - 1;

            if (newCopies < 0) {
               alert("No copies available");
               return;
            }

            // 3. Update book copies
            return updateBook(bookId, { copiesAvailable: newCopies }).then(
               () => userId
            );
         })
         .then(async (userId) => {
            // 4. Register borrow in borrowHistory
            return borrowBook(userId, bookId).then(() => userId);
         })
         .then(async (userId) => {
            // 5. Update user's borrowedBooks count
            return getUser(userId).then((userData) => {
               const previousCount = userData.data.booksBorrowed || 0;
               const newCount = previousCount + 1;

               return updateUser(userId, { booksBorrowed: newCount });
            });
         })
         .then(() => {
            alert("Borrow process completed");
            getAllBorrowHistory();
            setPopUpUser(false);
         })
         .catch((err) => console.error(err));
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
