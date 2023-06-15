// import React, { useState, useEffect } from 'react';
// import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity, Modal, FlatList, TextInput } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';
// import axios from 'axios';

// import AsyncStorage from '@react-native-async-storage/async-storage';

// const PostDetails = ({ post }) => {
//   const [showModal, setShowModal] = useState(false);
//   const [commentText, setCommentText] = useState('');
//   const [userId, setUserId] = useState('');
//   const [comments, setComments] = useState(post.comments);
//   const [newComment, setNewComment] = useState(null);
//   const [liked, setLiked] = useState(false);
//   const [likesCount, setLikesCount] = useState(post.likes.quantity);

//   useEffect(() => {
//     const getUser = async () => {
//       const userString = await AsyncStorage.getItem('user');
//       const user = JSON.parse(userString);
//       setUserId(user._id);
//     };

//     getUser();
//   }, []);


//   const updateLikes = async () => {
//     try {
//       const response = await axios.post(
//         `https://earth-community-backend-dev.up.railway.app/api/post/like/${post._id}/${userId}`
//       );
//       const updatedLikesCount = response.data.likesCount;
//       setLiked(!liked);
//       setLikesCount((prevLikesCount) => (liked ? prevLikesCount - 1 : prevLikesCount + 1));
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   useEffect(() => {
//     if (newComment) {
//       setComments((prevComments) => [...prevComments, newComment]);
//     }
//   }, [newComment]);

//   const handleCommentClick = () => {
//     setShowModal(true);
//   };

//   const handleModalClose = () => {
//     setShowModal(false);
//     setCommentText('');
//   };

//   async function handleAddComment() {
//     try {
//       const response = await axios.post(
//         `https://earth-community-backend-dev.up.railway.app/api/post/comment/${post._id}/${userId}`,
//         {
//           comment: commentText,
//         }
//       );

//       const newComment = response.data;
//       setComments((prevComments) => [...prevComments, newComment]);
//       setNewComment(newComment);

//       setShowModal(false);
//       setCommentText('');
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//       {/* <Image source={{ uri: post.createdByUser.info.profileImage }} style={styles.avatar} /> */}
//         <Text style={styles.username}>{post.createdByUser.info.firstName}</Text>
//       </View>
//       <Text style={styles.text}>{post.text}</Text>
//       <Image source={{ uri: post.image }} style={styles.image} />
//       <View style={{ flexDirection: 'row' }}>
//         <TouchableOpacity
//           style={styles.likesContainer}
//           onPress={updateLikes}
//           activeOpacity={0.8}
//         >
//           <FontAwesome
//             name={liked ? 'thumbs-up' : 'thumbs-o-up'}
//             size={20}
//             color={liked ? 'blue' : 'gray'}
//           />
//           <Text style={styles.likesCount}>{likesCount}</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.commentContainer} onPress={handleCommentClick}>
//           <FontAwesome name="comment" size={20} color="gray" />
//           <Text style={styles.commentText}>Comment</Text>
//         </TouchableOpacity>
//       </View>
//       <Modal visible={showModal} animationType="slide" transparent={true}>
//         <ScrollView>
// <View style={styles.modalContainer}>
// <View style={styles.modalContent}>
// <TouchableOpacity style={styles.closeButton} onPress={handleModalClose}>
// <FontAwesome name="close" size={20} color="gray" />
// </TouchableOpacity>
// {comments.map((comment, index) => (
// <View style={styles.border} key={index}>
// <View style={styles.comentario}>
// <Image source={{ uri: comment.user.info?.profileImage }} style={styles.avatar} />
// <Text style={styles.username}>{comment.user.info?.firstName}</Text>
// </View>
// <Text style={styles.comentariotexto}>{comment.comment}</Text>
// </View>
// ))}
// <View style={styles.commentInputContainer}>
// <TextInput
// style={styles.commentInput}
// placeholder="Add a comment..."
// value={commentText}
// onChangeText={(text) => setCommentText(text)}
// />
// <TouchableOpacity style={styles.submitButton} onPress={handleAddComment}>
// <Text style={styles.submitButtonText}>Enviar</Text>
// </TouchableOpacity>
// </View>
// </View>
// </View>
// </ScrollView>
// </Modal>
// </View>
// );
// };

// const styles = StyleSheet.create({
// container: {
// margin: 10,
// backgroundColor: 'white',
// borderRadius: 10,
// shadowColor: 'rgba(0, 0, 0, 0.2)',
// shadowOffset: { width: 0, height: 2 },
// shadowOpacity: 1,
// shadowRadius: 2,
// elevation: 2,
// },
// header: {
// flexDirection: 'row',
// alignItems: 'center',
// padding: 10,
// },
// avatar: {
// width: 40,
// height: 40,
// borderRadius: 20,
// },
// username: {
// marginLeft: 10,
// fontWeight: 'bold',
// fontSize: 16,
// },
// image: {
// width: '100%',
// height: 300,
// resizeMode: 'cover',
// },
// text: {
// padding: 10,
// fontSize: 16,
// },
// likesContainer: {
// flexDirection: 'row',
// alignItems: 'center',
// paddingVertical: 10,
// paddingHorizontal: 20,
// },
// likesCount: {
// marginLeft: 5,
// fontSize: 16,
// },
// modalContainer: {
// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// backgroundColor: 'rgba(0, 0, 0, 0.5)',
// },
// modalContent: {
// width: '90%',
// padding: 20,
// backgroundColor: 'white',
// borderRadius: 10,
// },
// closeButton: {
// position: 'absolute',
// top: 10,
// right: 10,
// },
// border: {
// borderColor: "#e8e6e6",
// borderWidth: 1,
// marginBottom: 20,
// },
// comentario: {
// flexDirection: 'row',
// alignItems: 'center',
// paddingRight: 10,
// paddingLeft: 10,
// paddingTop: 2,
// paddingBottom: 1,
// },
// commentContainer: {
// flexDirection: 'row',
// alignItems: 'center',
// paddingVertical: 10,
// paddingHorizontal: 20,
// },
// comentariotexto: {
// paddingRight: 10,
// paddingLeft: 10,
// },
// commentText: {
// fontSize: 16,
// },
// commentInputContainer: {
// flexDirection: 'row',
// alignItems: 'center',
// marginBottom: 10},
// commentInput: {
//   flex: 1,
//   height: 40,
//   borderWidth: 1,
//   borderColor: 'gray',
//   borderRadius: 5,
//   paddingHorizontal: 10,
//   marginRight: 10,
// },
// submitButton: {
//   backgroundColor: 'blue',
//   borderRadius: 5,
//   padding: 10,
// },
// submitButtonText: {
//   color: 'white',
//   fontWeight: 'bold',
// },
// });

// export default PostDetails;
