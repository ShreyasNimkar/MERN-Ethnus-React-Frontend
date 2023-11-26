import axios from "axios";

const API_URL = `http://34.121.115.75/service1/api/users`;

// Register user
const register = async (userData) => {
  console.log(API_URL);
  console.log(API_URL);
  const response = await axios.post(API_URL, userData);
  console.log("from register", response);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "/login", userData);
  console.log("from register", response);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// Logout user
const logout = () => localStorage.removeItem("user");

const authService = {
  register,
  logout,
  login,
};

export default authService;
