import axios from "axios";

const API_URL = "/api/auth";

export const signUp = async (userData) => {
  const response = await axios.post(`${API_URL}/signup`, userData);
  return response.data;
};

export const signIn = async (userData) => {
  const response = await axios.post(`${API_URL}/signin`, userData);
  return response.data;
};
