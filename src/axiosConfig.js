import axios from "axios";
 
axios.defaults.baseURL = "http://localhost:3000/api";

// Minden kérésnél automatikusan hozzáadja az Authorization fejlécet
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axios;
