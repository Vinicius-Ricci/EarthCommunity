import axios from 'axios';

const BASE_URL = 'https://earth-community-backend-dev.up.railway.app/api';

export const addPost = async (userId) => {
  try {
    const response = await axios.post(`${BASE_URL}//api/post/create/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};