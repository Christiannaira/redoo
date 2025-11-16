import SignUp from "./components/SigningCredentials/SignUp";
import SignIn from "./components/SigningCredentials/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
   return (
      <div>
         <BrowserRouter>
            <Routes>
               <Route path="/signup" element={<SignUp />} />
               <Route path="/signin" element={<SignIn />} />
            </Routes>
         </BrowserRouter>

         {/* <div className="p-5">
            <h1>Tailwind Practice</h1>
            <div className="border max-w-[200px] w-full">
               <h2>Content inside</h2>
               <input
                  type="text"
                  placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  ab voluptate facere sint officiis repudiandae debitis enim qui
                  ullam, consequatur, perferendis alias harum! Labore suscipit
                  cupiditate numquam totam exercitationem quasi?"
                  className="max-w-full w-[200px]"
               />
            </div>
         </div> */}
      </div>
   );
}

export default App;
