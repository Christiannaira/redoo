import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBook } from "../../../../services/BooksServices";
import InputOptions from "./booksInputFields/InputOptions";
import InputNumber from "./booksInputFields/InputNumber";
import InputTags from "./booksInputFields/InputTags";
import InputImage from "./booksInputFields/InputImage";
import { updateBook } from "../../../../services/BooksServices";
import { supabase } from "../../../../supabase/supabaseClient";

const BookProfileCard = () => {
   const { id } = useParams();
   const [book, setBook] = useState(null);
   const navigate = useNavigate();

   const [title, setTitle] = useState("");
   const [author, setAuthor] = useState("");
   const [publisher, setPublisher] = useState("");
   const [genre, setGenre] = useState("");
   const [category, setCategory] = useState("");
   const [summary, setSummary] = useState("");
   const [language, setLanguage] = useState("");
   const [status, setStatus] = useState("");
   const [copiesAvailable, setCopiesAvailable] = useState(null);
   const [totalCopies, setTotalCopies] = useState(null);
   const [numberOfPages, setNumberOfPages] = useState(null);
   const [tags, setTags] = useState([]);
   const [date, setDate] = useState("");

   const [image, setImage] = useState(null);

   useEffect(() => {
      getBook(id)
         .then((response) => {
            setBook(response.data);
            console.log(response.data);
         })
         .catch((err) => console.error(err));
   }, [id]);

   if (!book) return <p>Loading...</p>;

   const genreOptions = ["Action,", "Comedy", "Horror", "Thriller", "Romance"];

   const languageOptions = ["English", "Filipino", "Spanish"];

   const statusOptions = ["Available", "Not Available for now"];

   const uploadImage = async () => {
      if (!image) return null;

      const fileName = `${Date.now()}-${image.name}`;

      const { data, error } = await supabase.storage
         .from("test")
         .upload(fileName, image);

      if (error) {
         console.log("Upload error:", error);
         return null;
      }

      const { data: publicUrlData } = supabase.storage
         .from("test")
         .getPublicUrl(fileName);

      return publicUrlData.publicUrl; // ✅ return the URL
   };

   const handleUpdateBook = async (e) => {
      e.preventDefault();
      e.stopPropagation();

      try {
         let imageUrl = book.coverImageUrl; // <-- NOW THIS WORKS

         if (image) {
            const uploadedUrl = await uploadImage();
            if (!uploadedUrl) {
               alert("Image upload failed!");
               return;
            }
            imageUrl = uploadedUrl;
         }

         const updatedBookEntry = {
            title,
            author,
            publisher,
            category,
            summary,
            publicationDate: date,
            genre,
            status,
            language,
            copiesAvailable,
            totalCopies,
            numberOfPages,
            tags,
            coverImageUrl: imageUrl,
         };

         const response = await updateBook(book.id, updatedBookEntry);

         console.log("Updated:", response.data);
         alert("Book updated successfully");
         navigate("..");
      } catch (error) {
         console.error(error);
         alert("Update failed");
      }
   };

   return (
      <div className="m-5 p-5 bg-white rounded-md">
         <form onSubmit={handleUpdateBook}>
            <h3>{book.title}</h3>
            <h3>{book.author}</h3>
            <a onClick={() => navigate("..")}>go back</a>
            <div className="flex flex-col gap-4 mt-5">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                     <label
                        htmlFor="title"
                        className="block font-medium text-[#515151]"
                     >
                        Title
                     </label>
                     <input
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Enter Book Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                     />
                  </div>
                  <div>
                     <label
                        htmlFor="author"
                        className="block font-medium text-[#515151]"
                     >
                        Author
                     </label>
                     <input
                        id="author"
                        name="author"
                        type="text"
                        placeholder="Enter Book Author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                     />
                  </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                     <label
                        htmlFor="publisher"
                        className="block font-medium text-[#515151]"
                     >
                        Publisher
                     </label>
                     <input
                        id="publisher"
                        name="publisher"
                        type="text"
                        placeholder="Enter Book Publisher"
                        value={publisher}
                        onChange={(e) => setPublisher(e.target.value)}
                        className="block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                     />
                  </div>
                  <div>
                     <label
                        htmlFor="category"
                        className="block font-medium text-[#515151]"
                     >
                        Category
                     </label>
                     <input
                        id="caterogy"
                        name="caterogy"
                        type="text"
                        placeholder="Enter Book Caterogy"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                     />
                  </div>
               </div>
            </div>

            <div className="mt-5">
               <label
                  htmlFor="summary"
                  className="block font-medium text-[#515151]"
               >
                  Book Summary Description
               </label>
               <textarea
                  name="summary"
                  id="summary"
                  className="block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  placeholder="Enter Book Description"
               ></textarea>
            </div>

            <div className="grid grid-cols-3 gap-5 mt-2">
               <InputOptions
                  title={"Genre"}
                  options={genreOptions}
                  variable={genre}
                  setVariable={setGenre}
               />
               <InputOptions
                  title={"Language"}
                  options={languageOptions}
                  variable={language}
                  setVariable={setLanguage}
               />
               <InputOptions
                  title={"Status"}
                  options={statusOptions}
                  variable={status}
                  setVariable={setStatus}
               />
            </div>

            <div className="grid grid-cols-3 gap-5 mt-2">
               <InputNumber
                  title={"Copies Available"}
                  limit={20}
                  variable={copiesAvailable}
                  setVariable={setCopiesAvailable}
               />
               <InputNumber
                  title={"Total Copies"}
                  limit={30}
                  variable={totalCopies}
                  setVariable={setTotalCopies}
               />
               <InputNumber
                  title={"Number Of Pages"}
                  limit={5000}
                  variable={numberOfPages}
                  setVariable={setNumberOfPages}
               />
            </div>

            <div className="grid grid-cols-2 gap-5">
               <div className="relative flex flex-col mt-3">
                  <label
                     className="block font-medium text-[#515151] mb-2"
                     htmlFor="date"
                  >
                     Publication Date
                  </label>

                  <input
                     id="date"
                     name="date"
                     type="date"
                     className="block bg-gray-100/50 px-4 py-3 rounded-md w-full mt-2"
                     value={date}
                     onChange={(e) => setDate(e.target.value)}
                  />

                  <span className="absolute right-3 top-11 -translate-y-1/2 text-gray-500 pointer-events-none">
                     📅
                  </span>
               </div>
               <div>
                  <InputTags tags={tags} setTags={setTags} />
               </div>
            </div>
            <div>
               <InputImage setImage={setImage} />
            </div>
            <button
               type="submit"
               className="px-5 py-3 w-full max-w-full bg-[#FF6927] rounded-sm cursor-pointer text-[#f7f7f7] font-medium"
            >
               Add Book to the Collection
            </button>
         </form>
      </div>
   );
};

export default BookProfileCard;
