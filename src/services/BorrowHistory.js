import axios from "axios"

const REST_API_BASE_URL = "http://localhost:8080/borrow";

// Borrow a book
export const borrowBook = (userId, bookId) =>
  axios.post(`${REST_API_BASE_URL}/${userId}/${bookId}`);

export const listBorrowHistory = () =>
  axios.get(REST_API_BASE_URL);

export const searchBorrowHistory = (keyword) => {
  return axios.get(`${REST_API_BASE_URL}/search?q=${keyword}`);
};

export const deleteBorrowHistory = (id) =>
  axios.delete(`${REST_API_BASE_URL}/${id}`);

export const updateBorrowHistory = (borrowHistoryId, borrowHistory) => axios.put(REST_API_BASE_URL + "/" + borrowHistoryId, borrowHistory);

