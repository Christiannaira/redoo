import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/approval";

export const createApprovalRequest = (data) => {
   return axios.post(`${REST_API_BASE_URL}/request`, data);
};

export const getAllApprovals = () => {
   return axios.get(`${REST_API_BASE_URL}/all`);
};

export const approveRequest = (id) => {
   return axios.put(`${REST_API_BASE_URL}/approve/${id}`);
};

export const rejectRequest = (id) => {
   return axios.put(`${REST_API_BASE_URL}/reject/${id}`);
};