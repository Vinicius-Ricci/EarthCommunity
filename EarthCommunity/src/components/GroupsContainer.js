import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from '@react-native-material/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const GroupsContainer = ({ group}) => {
  const [userId, setUserId] = useState('');
  const [isDeleted, setIsDeleted] = useState(false);
  const [groups, setGroups]= useState('');
  
  useEffect(() => {
    const getUser = async () => {
      const userString = await AsyncStorage.getItem('user');
      const user = JSON.parse(userString);
      setUserId(user._id);
      console.log(group);

    };

    getUser();
  }, []);

  const handleAddUserGroup = async (group) => {
    try {
      const response = await axios.post(
          `https://earth-community-backend-dev.up.railway.app/api/group/add-member/648601b1ed4f15f74fce99c7/${userId}`
      );
      console.log(response.data);
      console.log(userId);
      console.log(group);
        // updateGroups()

    } catch (error) {
      console.error(error);
      console.log('Group ID:', group._id);
      console.log('USER:', userId);
      console.log('Error message:', error.message); //
    }
  };

  const handleDeleteGroup = async () => {
    try {
      const response = await axios.delete(
        `https://earth-community-backend-dev.up.railway.app/api/group/delete/${group._id}/${userId}`
      );
      console.log(response.data);
            setIsDeleted(true); 
    } catch (error) {
      console.error(error);
    }
  };
  if (isDeleted) {
    return null;
  }


  const handleDeleteUserGroup = async () => {
    try {
      const response = await axios.delete(
        `https://earth-community-backend-dev.up.railway.app/api/group/remove-member/${group._id}/${userId}`
        );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <View style={styles.viewContainer} key={group._id}>
       <Avatar style={styles.avatar} image={{ uri: "https://media.gq-magazine.co.uk/photos/620529e268071f7ecff06fac/1:1/w_1080,h_1080,c_limit/100222_Bobba_hp.jpg" }} size={80} />
       <Text style={styles.title}>{group.name}</Text>
      <Text style={styles.subtitle}>{group.description}</Text>
      <TouchableOpacity style={styles.button} onPress={handleAddUserGroup}>
      <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleDeleteUserGroup}>
      <Text style={styles.buttonText}>Deletar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginBottom: '4%',
    borderRadius: 23,
    marginLeft: '3%',
    marginRight: '3%',

  },
  avatar: {
    marginTop: '4%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    width: 200,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#17B978',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '4%',

  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

});


export default GroupsContainer;
