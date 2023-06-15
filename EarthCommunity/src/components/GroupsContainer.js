// import React from 'react';
// import { View, Text, Button, Linking } from 'react-native';

// const MyComponent = () => {
//   const handleNavigation = () => {
//     Linking.openURL('https://earth-community.vercel.app/groups');
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text style={{ color: '#17B978', fontSize: 20, marginTop: 20, marginBottom: 20, textAlign: 'center' }}>
//         Navegue até grupos através do botão abaixo
//       </Text>
//       <Button
//         title="Ir para Grupos"
//         onPress={handleNavigation}
//         color="#17B978"
//         style={{margin: 20}}
//       />
//     </View>
//   );
// };

// export default MyComponent;



import React, { useState, useEffect } from 'react';


import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from '@react-native-material/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';


const GroupsContainer = ({group}) => {
  const [userId, setUserId] = useState('');
  const [isDeleted, setIsDeleted] = useState(false);
  
  useEffect(() => {
    const getUser = async () => {
      const userString = await AsyncStorage.getItem('user');
      const user = JSON.parse(userString);
      setUserId(user._id, () => {
        console.log('USER:', userId);
      });


    };
    getUser();
  }, []);

  const handleAddUserGroup = async () => {
    try {
      const response = await axios.post(
          `https://earth-community-backend-dev.up.railway.app/api/group/add-member/${group._id}/${userId}`
      );
      console.log(response.data);



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
      console.log(group);


    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <View style={styles.viewContainer} key={group._id}>
       <Avatar style={styles.avatar} image={group.image} size={80} />
       <Text style={styles.title}>{group.name}</Text>
      <Text style={styles.subtitle}>{group.description}</Text>
      <TouchableOpacity style={styles.buttondelete} onPress={handleDeleteUserGroup}>
  <Ionicons name="exit-outline" size={20} color="#fff" style={styles.buttonIcon} />
  <Text style={styles.buttonText}>Sair</Text>
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
  buttondelete:{
    width: 200,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#fa5555',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '4%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonIcon: {
    marginRight: 5,
  },
  

});


export default GroupsContainer;
