import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

export const signup = async (username, password) => {
  const response = await axios.post(`${API_URL}/signup`, { username, password });
  return response.data;
};

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response.data;
};

export const addPoints = async (userId, points) => {
  const response = await axios.post(`${API_URL}/add-points`, { userId, points });
  return response.data;
};
