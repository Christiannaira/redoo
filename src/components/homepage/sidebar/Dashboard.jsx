import UserManagement from "./UserManagement";
import BooksManagement from "./BooksManagement";
import BorrowBooks from "./Borrow";
import History from "./History";
import Approval from "./Approval";

const Dashboard = () => {
   return (
      <div className="bg-[#FAF7F5] min-h-screen ml-[350px]">
         <UserManagement />
         <BooksManagement />
         <BorrowBooks />
         <History />
         <Approval />
      </div>
   );
};

export default Dashboard;
