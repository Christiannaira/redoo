import SignUp from "./components/SigningCredentials/SignUp";
import SignIn from "./components/SigningCredentials/SignIn";
import Dashboard from "./components/homepage/sidebar/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
   return (
      <div>
         <BrowserRouter>
            <Routes>
               <Route path="/signup" element={<SignUp />} />
               <Route path="/signin" element={<SignIn />} />
               <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
