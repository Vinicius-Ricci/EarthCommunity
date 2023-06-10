import axios from 'axios';

const BASE_URL = 'https://earth-community-backend-dev.up.railway.app/api';

export const addUserGroup = async (groupId, userId) => {
  try {
    const response = await axios.post(`${BASE_URL}/group/add-member/${groupId}/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://earth-community-backend-dev.up.railway.app/api/group/get-all"
    );
    setGroups(response.data.group);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const deleteGroup = async (groupId, userId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/group/delete/${groupId}/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

