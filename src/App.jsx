import SignUp from "./components/SigningCredentials/SignUp";
import SignIn from "./components/SigningCredentials/SignIn";
import Dashboard from "./components/homepage/sidebar/Dashboard";
import DashboardLayout from "./components/homepage/sidebar/DashboardLayout";
import UserManagement from "./components/homepage/sidebar/UserManagement";
import BooksManagement from "./components/homepage/sidebar/BooksManagement";
import BorrowBooks from "./components/homepage/sidebar/Borrow";
import History from "./components/homepage/sidebar/History";
import Approval from "./components/homepage/sidebar/Approval";
import Settings from "./components/homepage/sidebar/Settings";
import UserProfileCard from "./components/homepage/sidebar/cards/UserProfileCard";
import BookProfileCard from "./components/homepage/sidebar/cards/BookProfileCard";
import GettingStarted from "./components/SigningCredentials/GettingStarted";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
   const [currentUserLogin, setCurrentUserLogin] = useState("");

   const [isLogin, setIsLogin] = useState(() => {
      return localStorage.getItem("login") === "true";
   });

   useEffect(() => {
      localStorage.setItem("login", isLogin);
      localStorage.setItem("activeSection", "dashboard");
   }, [isLogin]);

   return (
      <div>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<GettingStarted />} />
               <Route path="/signup" element={<SignUp />} />
               <Route
                  path="/signin"
                  element={<SignIn isLogin={isLogin} setIsLogin={setIsLogin} />}
               />

               {/* Dashboard Route has nested path*/}
               <Route
                  path="/dashboard"
                  element={
                     <DashboardLayout
                        isLogin={isLogin}
                        setIsLogin={setIsLogin}
                     />
                  }
               >
                  <Route
                     index
                     element={
                        <Dashboard isLogin={isLogin} setIsLogin={setIsLogin} />
                     }
                  />

                  {/* User Management Route has nested path*/}
                  <Route path="user-management">
                     <Route
                        index
                        element={
                           <UserManagement
                              isLogin={isLogin}
                              setIsLogin={setIsLogin}
                           />
                        }
                     />
                     <Route path="profile/:id" element={<UserProfileCard />} />
                  </Route>

                  {/* Book Management Route has nested path*/}
                  <Route path="books-management">
                     <Route
                        index
                        element={
                           <BooksManagement
                              isLogin={isLogin}
                              setIsLogin={setIsLogin}
                           />
                        }
                     />
                     <Route path="book/:id" element={<BookProfileCard />} />
                  </Route>

                  <Route path="borrows-book" element={<BorrowBooks />} />
                  <Route path="history" element={<History />} />
                  <Route path="approval" element={<Approval />} />
               </Route>

               <Route path="/settings" element={<Settings />} />
               {/* <Route path="/userprofile" element={<UserProfileCard />} /> */}
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
