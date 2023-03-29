import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const getAllUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

const getUserById = async (id) => {
  const response = await axios.get(`${API_URL}/users/${id}`);
  return response.data;
};

const createUser = async (user) => {
  const response = await axios.post(`${API_URL}/users`, user);
  return response.data;
};

const updateUser = async (id, user) => {
  const response = await axios.put(`${API_URL}/users/${id}`, user);
  return response.data;
};

const deleteUser = async (id) => {
  const response = await axios.delete(`${API_URL}/users/${id}`);
  return response.data;
};

export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
