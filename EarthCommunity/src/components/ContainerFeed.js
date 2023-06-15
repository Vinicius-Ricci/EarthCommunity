import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Alert, Picker, ScrollView } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PostDetails from './PostDetails';

export default function ContainerFeed() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://earth-community-backend-dev.up.railway.app/api/post/get-all");
        console.log(response.data);
        setPosts(response.data.posts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  const updatePostComments = (postId, newComments) => {
    setPosts((prevPosts) => {
      // Percorra a lista de posts e encontre o post específico pelo ID
      const updatedPosts = prevPosts.map((post) => {
        if (post._id === postId) {
          // Atualize apenas o post com o ID correspondente
          return {
            ...post,
            comments: newComments,
          };
        }
        return post;
      });
  
      return updatedPosts;
    });
  };
  

  return (
    <View style={styles.container}>
      {/* <ScrollView contentContainerStyle={styles.scrollContent}>
        {posts.map((post) => (
          <View key={post._id}>
            <PostDetails post={post} updateComments={updatePostComments} />
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollContent: {
      flexGrow: 1,
      paddingBottom: 16,
    },
  });