import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getUser, updateUser } from "../../../../services/UserServices";
import { Link } from "react-router-dom";
import DummyAvatar from "../../../../assets/dummyAvatar.png";
import { MdArrowBackIos } from "react-icons/md";

const UserProfileCard = () => {
   const { id } = useParams();
   const [user, setUser] = useState(null);

   const [updateChangesSaved, setUpdateChangesSaved] = useState(false);
   const [updateChangesError, setUpdateChangesError] = useState(false);

   const dateCreation =
      user && user.dateCreated ? new Date(user.dateCreated) : null;

   console.log(dateCreation);

   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [address, setAddress] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");
   const [sex, setSex] = useState("");
   const [birthDate, setBirthDate] = useState("");

   console.log(user);

   useEffect(() => {
      getUser(id)
         .then((response) => {
            setUser(response.data);
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setUsername(response.data.username);
            setEmail(response.data.email);
            setAddress(response.data.address);
            setPhoneNumber(response.data.phoneNumber);
            setSex(response.data.sex);

            if (response.data.birthDate) {
               const date = new Date(response.data.birthDate);
               const formattedDate = date.toISOString().split("T")[0];
               setBirthDate(formattedDate);
            } else {
               setBirthDate("");
            }
         })
         .catch((err) => console.error(err));
   }, [id]);

   const handleSubmit = () => {
      const updatedUser = {
         firstName,
         lastName,
         username,
         email,
         address,
         phoneNumber,
         sex,
         dateOfBirth: birthDate,
      };

      updateUser(id, updatedUser)
         .then(() => {
            setUpdateChangesSaved(true);
         })
         .catch((err) => {
            console.error(err);
            alert("Failed to update User");
         });

      console.log(updatedUser);
   };

   if (!user) return <p>Loading...</p>;

   return (
      <div className="p-4">
         <div className="flex items-center">
            <div>
               <Link to={".."}>
                  <MdArrowBackIos size={25} />
               </Link>
            </div>
            <h2 className="ml-2 text-4xl font-medium text-[#444444] truncate">
               Edit Profile
            </h2>
         </div>

         <div className="bg-white p-10 rounded-sm mt-5 min-h-screen relative flex flex-col">
            <div className="flex items-center gap-5 justify-left">
               <img
                  src={DummyAvatar}
                  alt="dummy avatar"
                  className="inline-block w-30 h-30"
               />
               <h3 className="font-medium text-3xl text-[#515151]">
                  {user.firstName && user.lastName
                     ? `${user.firstName} ${user.lastName}`
                     : user.username}
               </h3>
            </div>

            <div className="flex flex-col-reverse lg:grid lg:grid-cols-1 lg:grid-cols-2 gap-5">
               <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-4 md:gap-10">
                     <div>
                        <label
                           htmlFor="firstName"
                           className="block font-medium text-[#515151]"
                        >
                           First Name
                        </label>
                        <input
                           id="firstName"
                           type="text"
                           placeholder="Enter your firstname"
                           className="block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                           value={firstName ? firstName : ""}
                           onChange={(e) => setFirstName(e.target.value)}
                        />
                     </div>
                     <div>
                        <label
                           htmlFor="lastName"
                           className="block font-medium text-[#515151]"
                        >
                           Last Name
                        </label>
                        <input
                           id="lastName"
                           type="text"
                           placeholder="Enter your lastname"
                           className="block block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                           value={lastName ? lastName : ""}
                           onChange={(e) => setLastName(e.target.value)}
                        />
                     </div>
                  </div>
                  <div className="flex flex-col mt-4">
                     <label
                        htmlFor="username"
                        className="block font-medium text-[#515151]"
                     >
                        Username
                     </label>
                     <input
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        className="block block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                     />
                  </div>
                  <div className="flex flex-col mt-4">
                     <label
                        htmlFor="email"
                        className="block font-medium text-[#515151]"
                     >
                        Email
                     </label>
                     <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="block block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />
                  </div>
                  <div className="flex flex-col mt-4">
                     <label
                        htmlFor="address"
                        className="block font-medium text-[#515151]"
                     >
                        Address
                     </label>
                     <input
                        id="address"
                        type="text"
                        placeholder="Enter your address"
                        className="block block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                        value={address ? address : ""}
                        onChange={(e) => setAddress(e.target.value)}
                     />
                  </div>
                  <div className="flex flex-col mt-4">
                     <label
                        htmlFor="phoneNumber"
                        className="block font-medium text-[#515151]"
                     >
                        Phone Number
                     </label>
                     <input
                        id="phoneNumber"
                        type="number"
                        placeholder="Enter your phone number"
                        className="block block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                        value={phoneNumber ? phoneNumber : ""}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                     />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4 md:gap-10">
                     <div className="mt-2">
                        <label className="block font-medium text-[#515151]">
                           Sex
                        </label>

                        <div className="flex items-center gap-6">
                           <label className="flex items-center gap-2">
                              <input
                                 type="radio"
                                 name="sex"
                                 value="Male"
                                 checked={sex === "Male"}
                                 onChange={(e) => setSex(e.target.value)}
                              />
                              Male
                           </label>

                           <label className="flex items-center gap-2">
                              <input
                                 type="radio"
                                 name="sex"
                                 value="Female"
                                 checked={sex === "Female"}
                                 onChange={(e) => setSex(e.target.value)}
                              />
                              Female
                           </label>
                        </div>
                     </div>

                     <div>
                        <label
                           htmlFor="birthday"
                           className="block font-medium text-[#515151]"
                        >
                           Date Of Birth
                        </label>
                        <input
                           id="birthday"
                           type="date"
                           className="block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                           value={birthDate ? birthDate : ""}
                           onChange={(e) => setBirthDate(e.target.value)}
                        />
                     </div>
                  </div>
                  <button
                     onClick={handleSubmit}
                     className="mt-5 bg-[#FF6927] cursor-pointer text-white font-medium px-6 py-3 rounded-md w-full"
                  >
                     Save Changes
                  </button>
                  <div
                     className={`text-center p-5 text-green-500 font-medium mt-5 ${
                        updateChangesSaved ? "block" : "hidden"
                     }`}
                  >
                     Update Changed Successfully
                  </div>
               </div>

               <div className="p-5">
                  <div className="bg-[#f7f7f7] p-5 rounded-md grid grid-cols-2">
                     <div>
                        <h3 className="block font-normal text-[#9C9C9C] truncate">
                           Role
                        </h3>
                        <h3 className="block font-normal text-[#9C9C9C] truncate">
                           Status
                        </h3>
                        <h3 className="block font-normal text-[#9C9C9C] truncate">
                           Date Created
                        </h3>
                        <h3 className="block font-normal text-[#9C9C9C] truncate">
                           Borrowed Books
                        </h3>
                        <h3 className="block font-normal text-[#9C9C9C] truncate">
                           ReferenceID
                        </h3>
                        <a
                           href=""
                           className="mt-5 block text-[#5676F8] font-medium underline hover:text-[#113ADD] truncate"
                        >
                           Change Password
                        </a>
                     </div>
                     <div>
                        <h2 className="block font-normal text-[#616161] truncate">
                           {user.role}
                        </h2>
                        <h2 className="block font-normal text-[#616161] truncate">
                           {user.status}
                        </h2>
                        <h2 className="block font-normal text-[#616161] truncate">
                           {dateCreation
                              ? dateCreation.toLocaleDateString("en-US", {
                                   year: "numeric",
                                   month: "short",
                                   day: "numeric",
                                })
                              : "N/A"}
                        </h2>
                        <h2 className="block font-normal text-[#616161] truncate">
                           {user.booksBorrowed ? booksBorrowed : "0"}
                        </h2>
                        <h2 className="block font-normal text-[#616161] truncate">
                           {user.id}
                        </h2>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default UserProfileCard;
