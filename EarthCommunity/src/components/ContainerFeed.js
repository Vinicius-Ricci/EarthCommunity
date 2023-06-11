// import { Surface, Stack, Avatar, Text, HStack } from '@react-native-material/core';
// import React, { useState, useEffect } from 'react';
// import { Measure } from 'react-native-size-matters';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { View,ScrollView, StyleSheet, Image, TextInput } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';

// const ContainerFeed = () => {
//     const [user, setUser] = useState(null);
//     const [posts, setPosts] = useState([]);

  
//     useEffect(() => {
//       const getUser = async () => {
//         const userString = await AsyncStorage.getItem('user');
//         const user = JSON.parse(userString);
//         console.log(user); // Verifica o conteúdo do objeto user
//         setUser(user);
//       };
  
//       getUser();
//     }, []);
//     useEffect(() => {
//         const fetchPosts = async () => {
//           try {
//             const response = await axios.get("https://earth-community-backend-dev.up.railway.app/api/post/get-all");
//             console.log(response.data); // Verifica o conteúdo de response.data
//             const postsArray = Object.values(response.data);
//             setPosts(postsArray);

//           } catch (error) {
//             console.error(error);
//           }
//         };
        
//         fetchPosts();
//       }, []);
      
//     return (


// <View>
//   </View>
//     )
// }

// export default ContainerFeed;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },

// });

import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Alert, Picker } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PostDetails from './PostDetails'; // Importe o componente PostDetails

export default function ContainerFeed() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://earth-community-backend-dev.up.railway.app/api/post/get-all");
        console.log(response.data);
        setPosts(response.data.posts); // Atualize apenas o estado dos posts, não a resposta inteira
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <View>
      {posts.map((post) => (
        <View key={post._id}>
          <PostDetails post={post} /> {/* Renderize o componente PostDetails com o post como prop */}
        </View>
      ))}
    </View>
  );
}
