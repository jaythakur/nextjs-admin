import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:8080/api';

// // Request interceptor
// axios.interceptors.request.use(
//   (config) => {
//     // Do something before request is sent, like adding a token
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// // Response interceptor
// axios.interceptors.response.use(
//   (response) => {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     return response;
//   },
//   (error) => {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     if (error.response.status === 401) {
//       // Handle unauthorized error
//       // e.g., redirect to login page
//     }
//     return Promise.reject(error);
//   }
// );

// // Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api/', // Replace with your API base URL
});

// Request interceptor to add token to headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken'); // Replace with your token logic
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle responses and errors
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 403) {
      // Handle unauthorized error, e.g., redirect to login
      console.error('Unauthorized, logging out...');
      localStorage.removeItem('token'); // Replace with your token removal logic
      window.location.href = '/login?message=' + error.response.data?.message; // Replace with your login route
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
