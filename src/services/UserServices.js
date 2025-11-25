import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/users";


export const createUser = (user) => axios.post(REST_API_BASE_URL, user);

export const listUsers = () => axios.get(REST_API_BASE_URL);

export const getUser = (userId) => axios.get(REST_API_BASE_URL + "/" + userId);

export const updateUser = (userId, user) => axios.put(REST_API_BASE_URL + "/" + userId, user);

export const deleteUser = (userId) => axios.delete(REST_API_BASE_URL + "/" + userId);

export const userCount = () => axios.get(REST_API_BASE_URL + "/count");

export const searchUser = (keyword) => axios.get(`${REST_API_BASE_URL}/search`, {
    params: {keyword: keyword},
});;

// for admin login
export const loginAdmin = (usernameOrEmail, password) =>
    axios.post(REST_API_BASE_URL + "/adminLogin", {
        usernameOrEmail,
        password,
    });

// for user login
export const loginUser = (usernameOrEmail, password) =>
    axios.post(REST_API_BASE_URL + "/userLogin", {
        usernameOrEmail,
        password,
    });