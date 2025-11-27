import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/books";

export const addBook = (book) => axios.post(REST_API_BASE_URL, book);

export const listBooks = () => axios.get(REST_API_BASE_URL);

export const getBook = (bookId) => axios.get(REST_API_BASE_URL + "/" + bookId);

export const bookCount = () => axios.get(REST_API_BASE_URL + "/count");


export const searchBook = (keyword) =>
    axios.get(`${REST_API_BASE_URL}/search`, {
        params: { keyword: keyword },
    });

// Sorting
export const listBooksSorted = (sortBy = "createdAt", direction = "desc") =>
    axios.get(REST_API_BASE_URL, {
        params: { sort: `${sortBy},${direction}` },
    });

export const updateBook = (bookId, book) =>
    axios.put(`${REST_API_BASE_URL}/${bookId}`, book);

export const deleteBook = (bookId) => axios.delete(REST_API_BASE_URL + "/" + bookId);