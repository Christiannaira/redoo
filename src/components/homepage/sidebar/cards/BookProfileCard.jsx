import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBook } from "../../../../services/BooksServices";

const BookProfileCard = () => {
   const { id } = useParams();
   const [book, setBook] = useState(null);
   const navigate = useNavigate();

   useEffect(() => {
      getBook(id)
         .then((response) => setBook(response.data))
         .catch((err) => console.error(err));
   }, [id]);

   if (!book) return <p>Loading...</p>;

   return (
      <div>
         <h3>{book.title}</h3>
         <h3>{book.author}</h3>
         <a onClick={() => navigate("..")}>go back</a>
      </div>
   );
};

export default BookProfileCard;
