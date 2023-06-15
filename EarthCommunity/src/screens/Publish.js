import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Button, Alert } from 'react-native';
import { TextInput, Button, Avatar } from '@react-native-material/core';
import { IconButton, MD3Colors } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { firebase } from '../../config';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import Toast from 'react-native-toast-message';



export default function Publish() {
  const [inputValue, setInputValue] = useState('');
  const [image, setImage] = useState(null);
  const [selectedValue, setSelectedValue] = useState('');
  const [groups, setGroups] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [userId, setUserId] = useState('');
  const [posts, setPosts] = useState([]);
  const [userGroups, setUserGroups] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [filteredGroups, setFilteredGroups] = useState([]);
  const [userName, setUserName] = useState('');
  const toast = useToast();

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Sucesso',
      text2: 'Operação realizada com sucesso!',
    });
  };


  useEffect(() => {
    const getUser = async () => {
      const userString = await AsyncStorage.getItem('user');
      const user = JSON.parse(userString);
      setUserId(user._id);
      setUserName(user.info.nickName); // Adicione essa linha para obter o nome do usuário

    };

    getUser();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://earth-community-backend-dev.up.railway.app/api/group/get-all`);
        console.log(response.data);
        const userGroups = response.data.groups;
        setGroups(userGroups);
        setUserGroups(userGroups);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const filterParticipation = groups.filter((group) => group.members.some((member) => member.user._id === userId));

  useEffect(() => {
    const AtualizarGrupos = async () => {
      try {
        const response = await axios.get(`https://earth-community-backend-dev.up.railway.app/api/post/get-all`);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    AtualizarGrupos();
  }, []);

  const handleValueChange = (itemValue, itemIndex) => {
    setSelectedValue(itemValue);

    const selectedItem = groups.find((group) => group._id === itemValue);
    setSelectedItem(selectedItem);
    console.log(selectedItem);
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0,
    });

    if (!result.cancelled) {
      const source = { uri: result.uri };
      console.log(source);
      setImage(source);
    }
  };

  const NoSelectImage = () => {
    setImage(null);
  };

  const uploadImage = async () => {
    setUploading(true);
    const response = await fetch(image.uri);
    const blob = await response.blob();
    const filename = image?.uri?.substring(image?.uri?.lastIndexOf('/') + 1);

    var ref = firebase.storage().ref().child('picture-post/' + filename).put(blob);

    try {
      await ref;
      const downloadURL = await ref.snapshot.ref.getDownloadURL();
      return downloadURL;
    } catch (e) {
      console.log(e);
    }setUploading(false);
    Alert.alert('Photo uploaded!');
    setImage(null);
    };





    async function handleCreatePost() {
      try {
      const downloadURL = image ? await uploadImage() : '';
      
        const response = await axios.post(
          `https://earth-community-backend-dev.up.railway.app/api/post/create/${userId}/${selectedValue}`,
          {
            text: inputValue,
            image: downloadURL,
          }
        );
      
        console.log(response.data);
        const updatedPosts = [...posts];
        updatedPosts.unshift(response.data);
        setPosts(updatedPosts);
      
        setInputValue('');
        setImage(null);
        setSelectedValue('');
        setSelectedItem(null);
      

        
      } catch (error) {
        console.error(error);
    
      }
      }return (
        <View style={styles.container}>
 <ToastProvider
      ref={(ref) => Toast.setRef(ref)}
      autoHide={true}
      visibilityTime={4000}
    ></ToastProvider>
        <View style={styles.publication}>
        <View style={styles.userInfoContainer}>
        <View style={styles.flex}>
        <Avatar style={styles.avatar} image={{ uri: "100222_Bobba_hp.jpg" }} size={48} />
        <View>
        <Text style={styles.username}>{userName}</Text>
        <Picker
                     selectedValue={selectedValue}
                     onValueChange={handleValueChange}
                     style={styles.picker}
                     itemStyle={styles.pickerItem}
                   >
        {filterParticipation && filterParticipation.map((group) => (
        <Picker.Item label={group.name} value={group._id} key={group._id} />
        ))}
        </Picker>
        </View>
        </View>

              <TouchableOpacity
                style={styles.button}
                onPress={handleCreatePost}
              >
                <Text style={styles.buttonText}>Publicar</Text>
              </TouchableOpacity>
              <Button title="Mostrar Toast" onPress={showToast} />

            </View>
        
            <TextInput
              style={[styles.textInput]}
              variant="flat"
              color='white'
              numberOfLines={4}
              placeholder="No que você está pensando?"
              onChangeText={setInputValue}
              value={inputValue}
            />
        
            <View>
              <TouchableOpacity onPress={() => pickImage()}>
                {image ? (
                  <View>
                    <View style={styles.imageContainer}>
                      <Image source={{ uri: image.uri }} style={styles.image} />
                    </View>
        
                    <View style={styles.flexDirection}>
                      <View style={styles.iconcamera}>
                        <IconButton
                          icon="camera"
                          style={styles.camera}
                          iconColor={MD3Colors.grey200}
                          size={20}
                        />
                        <Text>Trocar foto</Text>
                      </View>
        
                      <TouchableOpacity onPress={NoSelectImage} style={styles.deleteButton}>
                        <IconButton
                          icon="trash-can-outline"
                          style={{ width: 18 }}
                          iconColor={MD3Colors.grey200}
                          size={20}
                        />
                        <Text>Delete</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ) : (
                  <View style={styles.iconcamera}>
                    <IconButton
                      icon="camera"
                      style={styles.camera}
                      iconColor={MD3Colors.grey200}
                      size={20}
                    />
                    <Text>Adicionar foto</Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          </View>
          </View>
);
}

const styles = StyleSheet.create({
container: {
padding: 16,
flex: 1,
justifyContent: 'center',
},
publication: {
backgroundColor: '#fff',
borderRadius: 15,
padding: 6,
},
userInfoContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 16,
paddingTop: 16,
paddingLeft: 16,
paddingRight: 10,
},
flex: {
flexDirection: 'row',
alignItems: 'center',
},
avatar: {
width: 48,
height: 48,
borderRadius: 24,
},
username: {
marginLeft: 8,
fontSize: 16,
},
picker: {
backgroundColor: 'white',
borderRadius: 5,
borderWidth: 0,
color: 'black',
fontSize: 16,
width: '80%',
},
pickerItem: {
backgroundColor: '#62D2A2',
},
selectedItemContainer: {
marginTop: 20,
padding: 10,
backgroundColor: 'lightgray',
},
selectedItemText: {
fontWeight: 'bold',
},
textInput: {
borderWidth: 0,
marginLeft: 4,
backgroundColor: 'white',
fontSize: 20,
textAlignVertical: 'top',
minHeight: 60,
borderColor: 'white',
},
button: {
width: 90,
height: 30,
backgroundColor: '#17B978',
borderRadius: 15,
alignSelf: 'center',
justifyContent: 'center',
},
buttonText: {
color: 'white',
textAlign: 'center',
},
imageContainer: {
width: 200,
height: 200,
},
image: {
flex: 1,
width: null,
height: null,
borderRadius: 10,
marginLeft: 15,
},
placeholder: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
flexDirection: {
flexDirection: 'row',
},
iconcamera: {
flexDirection: 'row',
alignItems: 'center',
marginLeft: 11,
},
camera: {
width: 18,
},
labelStyle: {
color: 'white',
},
deleteButton: {
flexDirection: 'row',
alignItems: 'center',
marginLeft: 12,
},
});

