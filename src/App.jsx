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

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
   return (
      <div>
         <BrowserRouter>
            <Routes>
               <Route path="/signup" element={<SignUp />} />
               <Route path="/signin" element={<SignIn />} />
               <Route path="/dashboard" element={<DashboardLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="user-management" element={<UserManagement />} />
                  <Route
                     path="books-management"
                     element={<BooksManagement />}
                  />
                  <Route path="borrow-books" element={<BorrowBooks />} />
                  <Route path="history" element={<History />} />
                  <Route path="approval" element={<Approval />} />
               </Route>
               <Route path="/settings" element={<Settings />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
