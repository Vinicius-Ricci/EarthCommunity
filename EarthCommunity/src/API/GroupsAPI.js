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


export const fetchAllGroups = async (userId, setParticipatingGroups, setUserGroups, setGroups) => {
  try {
    const response = await axios.get(
      "https://earth-community-backend-dev.up.railway.app/api/group/get-all"
    );

    const userGroups = response.data.groups.filter(group => {
      return group.members.some(members => members.user._id === userId);
    });

    setParticipatingGroups(userGroups);
    setUserGroups(userGroups);
    setGroups(response.data.groups);
    console.log(response.data.groups);
  } catch (error) {
    console.error(error);
  }
};

export const Usercreategroup = async (userId, setSeusGrupos) => {
  try {
    const response = await axios.get(`https://earth-community-backend-dev.up.railway.app/api/group/get-all?createdBy=${userId}`);
    setSeusGrupos(response.data.groups);
    console.log(response.data.groups);
  } catch (error) {
    console.error(error);
  }
};


export const fetchOtherGroups = async (userId, setOtherGroups) => {
  try {
    const response = await axios.get(
      `https://earth-community-backend-dev.up.railway.app/api/group/get-all?createdBy_ne=${userId}&members.user._id_ne=${userId}`
    );

    setOtherGroups(response.data.groups);
    console.log(response.data.groups);
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

