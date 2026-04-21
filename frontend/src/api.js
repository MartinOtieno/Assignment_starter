import axios from "axios";

const API = "http://127.0.0.1:5000";

export const getStudents = () => axios.get(`${API}/students`);
export const getStudent = (id) => axios.get(`${API}/students/${id}`);
export const addStudent = (data) => axios.post(`${API}/student`, data);
export const updateStudent = (id, data) =>
  axios.put(`${API}/students/${id}`, data);
export const deleteStudent = (id) =>
  axios.delete(`${API}/students/${id}`);