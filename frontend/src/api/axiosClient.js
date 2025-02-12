import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // URL của backend
  headers: {
    "Content-Type": "application/json",
  },
});

// Thêm interceptor để xử lý lỗi (tuỳ chọn)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
