// import React, { useState,useEffect } from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, FlatList,TextInput } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';
// import {getUser} from '../getUser/getUser'
// import axios from 'axios';

// import AsyncStorage from '@react-native-async-storage/async-storage';


// const PostDetails = ({ post }) => {
//   const [showModal, setShowModal] = useState(false);
//   const [commentText, setCommentText] = useState('');
//   const [userId, setUserId] = useState('');
//   const [comments, setComments] = useState(post.comments);



//   useEffect(() => {
//     const getUser = async () => {
//       const userString = await AsyncStorage.getItem('user');
//       const user = JSON.parse(userString);
//       setUserId(user._id);
//     };

//     getUser();
//   }, []);


//   const handleCommentClick = () => {
//     setShowModal(true);
//   };

//   const handleModalClose = () => {
//     setShowModal(false);
//     setCommentText('');
//   };

//   async function handleAddComment() {
//     try {

//       const response = await axios.post(`https://earth-community-backend-dev.up.railway.app/api/post/comment/${post._id}/${userId}`, {
//         comment: commentText,
//       });

//       console.log(response.data);
 
//       navigation.navigate('Groups');
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Image source={{ uri: post.createdByUser.info.profileImage }} style={styles.avatar} />
//         <Text style={styles.username}>{post.createdByUser.info.firstName}</Text>
//       </View>
//       <Text style={styles.text}>{post.text}</Text>
//       <Image source={{ uri: post.image }} style={styles.image} />
//       <TouchableOpacity style={styles.likesContainer}>
//         <FontAwesome name="thumbs-up" size={20} color="blue" />
//         <Text style={styles.likesCount}>{post.likes.quantity}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.commentContainer} onPress={handleCommentClick}>
//         <FontAwesome name="comment" size={20} color="gray" />
//         <Text style={styles.commentText}>Comment</Text>
//       </TouchableOpacity>
//       <Modal visible={showModal} animationType="slide" transparent={true}>


//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             {/* Botão para fechar o modal */}
//             <TouchableOpacity style={styles.closeButton} onPress={handleModalClose}>
//               <FontAwesome name="times" size={20} color="black" />
//             </TouchableOpacity>
            
//             {/* Lista de comentários */}
//             <FlatList
//             />
            
//             {/* Caixa de texto para adicionar comentário */}
//             <TextInput
//               style={styles.commentInput}
//               placeholder="Add a comment..."
//               value={commentText}
//               onChangeText={text => setCommentText(text)}
//             />

//             {/* Botão para adicionar comentário */}
//             <TouchableOpacity style={styles.submitButton} onPress={handleAddComment}>
//               <Text style={styles.submitButtonText}>Post</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//         margin: 10,
//         backgroundColor: 'white',
//         borderRadius: 10,
//         shadowColor: 'rgba(0, 0, 0, 0.2)',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 1,
//         shadowRadius: 2,
//         elevation: 2,
//       },
//       header: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         padding: 10,
//       },
//       avatar: {
//         width: 40,
//         height: 40,
//         borderRadius: 20,
//       },
//       username: {
//         marginLeft: 10,
//         fontWeight: 'bold',
//         fontSize: 16,
//       },
//       image: {
//         width: '100%',
//         height: 300,
//         resizeMode: 'cover',
//       },
//       text: {
//         padding: 10,
//         fontSize: 16,
//       },
//       likesContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingVertical: 10,
//         paddingHorizontal: 20,
//       },
//       likesCount: {
//         marginLeft: 5,
//         fontSize: 16,
//       },
//       modalContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//       },
//       modalContent: {
//         width: '80%',
//         padding: 20,
//         backgroundColor: 'white',
//         borderRadius: 10,
//       },
//       closeButton: {
//         position: 'absolute',
//         top: 10,
//         right: 10,
//       },
//       commentList: {
//         marginBottom: 10,
//       },
//       commentItem: {
//         marginBottom: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: 'lightgray',
//         paddingBottom: 10,
//       },
//       commentUser: {
//         fontWeight: 'bold',
//         marginBottom: 5,
//       },
//       commentText: {
//         fontSize: 16,
//       },
//       commentInputContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 10,
//       },
//       commentInput: {
//         flex: 1,
//         height: 40,
//         borderWidth: 1,
//         borderColor: 'gray',
//         borderRadius: 5,
//         paddingHorizontal: 10,
//         marginRight: 10,
//       },
//       submitButton: {
//         backgroundColor: 'blue',
//         borderRadius: 5,
//         paddingVertical: 10,
//         alignItems: 'center',
//       },
//       submitButtonText: {
//         color: 'white',
//         fontWeight: 'bold',
//       },
//   });
  
//   export default PostDetails;
  
   
import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const PostDetails = ({ post }) => {
  const [showModal, setShowModal] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([
    { id: '1', user: 'John', text: 'Nice post!' },
    { id: '2', user: 'Alice', text: 'Great picture!' },
    { id: '3', user: 'Bob', text: 'Awesome!' },
  ]);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleAddComment = () => {
    // Logic to add the new comment
    const newComment = {
      id: comments.length + 1,
      user: 'You',
      text: commentText,
    };
    setComments([...comments, newComment]);
    setCommentText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* User avatar */}
        <Image source={{ uri: post.createdByUser.info.profileImage }} style={styles.avatar} />
        {/* User name */}
        <Text style={styles.username}>{post.createdByUser.info.firstName}</Text>
      </View>
      {/* Post text */}
      <Text style={styles.text}>{post.text}</Text>
      {/* Post image */}
      <Image source={{ uri: post.image }} style={styles.image} />
      {/* Likes */}
      <View style={styles.likesContainer}>
        <FontAwesome name="heart" size={20} color="red" />
        <Text style={styles.likesCount}>{post.likes.quantity}</Text>
      </View>
      {/* Comment Modal */}
      <Modal visible={showModal} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Botão para fechar o modal */}
            <TouchableOpacity style={styles.closeButton} onPress={handleModalClose}>
              <FontAwesome name="times" size={20} color="black" />
            </TouchableOpacity>
            {/* Lista de comentários */}
            <FlatList
              style={styles.commentList}
              data={comments}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.commentItem}>
                  <Text style={styles.commentUser}>{item.user}</Text>
                  <Text style={styles.commentText}>{item.text}</Text>
                </View>
              )}
            />
            {/* Caixa de texto para adicionar comentário */}
            <View style={styles.commentInputContainer}>
              <TextInput
                style={styles.commentInput}
                placeholder="Add a comment..."
                value={commentText}
                onChangeText={text => setCommentText(text)}
              />
              {/* Botão para adicionar comentário */}
              <TouchableOpacity style={styles.submitButton} onPress={handleAddComment}>
                <Text style={styles.submitButtonText}>Post</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {/* Botão para abrir o modal */}
      <TouchableOpacity style={styles.commentButton} onPress={() => setShowModal(true)}>
        <FontAwesome name="comment" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      margin: 10,
      backgroundColor: 'white',
      borderRadius: 10,
      shadowColor: 'rgba(0, 0, 0, 0.2)',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 2,
      elevation: 2,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
    username: {
      marginLeft: 10,
      fontWeight: 'bold',
      fontSize: 16,
    },
    image: {
      width: '100%',
      height: 300,
      resizeMode: 'cover',
    },
    text: {
      padding: 10,
      fontSize: 16,
    },
    likesContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    likesCount: {
      marginLeft: 5,
      fontSize: 16,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: '80%',
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
    },
    closeButton: {
      position: 'absolute',
      top: 10,
      right: 10,
    },
    commentList: {
      marginBottom: 10,
    },
    commentItem: {
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: 'lightgray',
      paddingBottom: 10,
    },
    commentUser: {
      fontWeight: 'bold',
      marginBottom: 5,
    },
    commentText: {
      fontSize: 16,
    },
    commentInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    commentInput: {
      flex: 1,
      height: 40,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginRight: 10,
    },
    submitButton: {
      backgroundColor: 'blue',
      borderRadius: 5,
      paddingVertical: 10,
      alignItems: 'center',
    },
    submitButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });
    export default PostDetails;
