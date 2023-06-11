import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image,Alert,Picker } from 'react-native';
// import ModalSelector from 'react-native-modal-selector';
import { TextInput, Button, Avatar, SendIcon} from '@react-native-material/core';
import { IconButton, MD3Colors} from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import {firebase} from '../../config';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { truncate } from 'uri-js';
import { URI } from 'uri-js';



export default function Publish(){
    const [inputValue, setInputValue] = useState('');
    const [image,setImage] = useState(null);
    const [imageapi,setImageapi] = useState('');

    const [uploading, setUploading] = useState(false);
const [selectedValue, setSelectedValue] = useState('');
  const [groups, setGroups] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [userId, setUserId] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://earth-community-backend-dev.up.railway.app/api/post/get-all"
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
      // // const source = {uri: result.uri};



    
  useEffect(() => {
    const getUser = async () => {
      const userString = await AsyncStorage.getItem('user');
      const user = JSON.parse(userString);
      setUserId(user._id);

    };

    getUser();
  }, []);


  const handleValueChange = (itemValue, itemIndex) => {
    setSelectedValue(itemValue);

    const selectedItem = groups.find((group) => group._id === itemValue);
    setSelectedItem(selectedItem);
    console.log(selectedItem)
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

  }
  const uploadImage = async () => {
    setUploading(true);
    const response = await fetch(image.uri);
    const blob = await response.blob();
    const filename = image?.uri?.substring(image?.uri?.lastIndexOf('/') + 1); // Verificar se image.uri não é null ou undefined antes de acessar a propriedade uri
    
    var ref = firebase.storage().ref().child('picture-post/' + filename).put(blob);
  
    try {
      await ref;
      const downloadURL = await ref.snapshot.ref.getDownloadURL();
      return downloadURL; // Retorna a URL de download
    } catch (e) {
      console.log(e);
    }
  
    setUploading(false);
    Alert.alert('Photo uploaded!');
    setImage(null);
  };
  
    

  async function handleCreatePost() {
    try {
      const downloadURL = await uploadImage(); // Aguarde a URL de download


      const response = await axios.post(
        'https://earth-community-backend-dev.up.railway.app/api/post/create/6481f8bc6da34e6ccd77df48/64813d6c057179de400fd6b2',
        {
          text: inputValue,
          image: downloadURL,
        }
        
      );

      console.log(response.data);
      navigation.navigate('Feed');
    } catch (error) {
      console.error(error);
    }
  }
  
    return(
        <View style={styles.container}>
            <View style={styles.publication}>
                <View style={styles.userInfoContainer}>
                    <View style={styles.flex}>
                        <Avatar style={styles.avatar} image={{ uri: "https://media.gq-magazine.co.uk/photos/620529e268071f7ecff06fac/1:1/w_1080,h_1080,c_limit/100222_Bobba_hp.jpg" }} size={48} />
                        <View>
                     <Text style={styles.username}>Nome de Usuário</Text>
                      <View>
                      <Picker
                        selectedValue={selectedValue}
                        onValueChange={handleValueChange}
                        style={styles.picker}
                        itemStyle={styles.pickerItem}
                      >
                        {Array.isArray(groups) ? (
                          groups.map(group => (
                            <Picker.Item label={group.name} key={group._id}  value={group._id} />
                          ))
                        ) : (
                          <Text>No groups available</Text>
                        )}
                      </Picker>
                      </View>

                        </View>
                    </View>

<TouchableOpacity
  style={styles.button} 
  onPress={handleCreatePost}// Aplicando estilo de opacidade com base na função validateButton()
 >
  <Text style={styles.buttonText}>Publicar</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.button} 
  onPress={uploadImage}// Aplicando estilo de opacidade com base na função validateButton()
 >
  <Text style={styles.buttonText}>foto</Text>
</TouchableOpacity>
                </View>
                <TextInput
                    style={[styles.textInput]}
                    variant="flat" color = 'white'
                    numberOfLines={4}
                    placeholder="No que você está pensando?"
                    onChangeText={setInputValue}
                    value={inputValue}

                />
                <View>
                <TouchableOpacity
                            onPress={() => pickImage()}
                        >

                            {/* Condicional - verificar se tem imagem selecionada */}
                            {image ? (
                                <View>
                              <View style={styles.imageContainer}>

                            <Image source={{ uri: image.uri }} style={styles.image} />
                            </View>

                             <View style={styles.iconcamera}> 
                                <IconButton
                             icon="camera"
                             style={styles.camera}
                             iconColor={MD3Colors.grey200}
                             size={20}
                         />
                          <Text>Trocar foto</Text>
                          </View>
                         </View>

                            ) : null}

    {!image ? (
                         <View style={styles.iconcamera}> 
                             <IconButton
                    icon="camera"
                    style={styles.camera}
                    iconColor={MD3Colors.grey200}
                    size={20}
                />
                 <Text>Adicionar foto</Text>

                </View>
    ):null}
                        </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
        justifyContent: 'center',
    },
    publication:{
        backgroundColor: '#fff',
        borderRadius:15,
        padding: 6,
    },
    userInfoContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginBottom: 16,
        paddingTop:16,
        paddingLeft:16,
        paddingRight:10,
    },
    flex:{
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
  // width: '50%'
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
        backgroundColor:'white',
        fontSize: 20,
        textAlignVertical: 'top',
        minHeight:60,
        borderColor:'white',
    },
    button: {
        width: 90,
        height:30,
        backgroundColor:'#17B978',
        borderRadius: 15,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        color: 'white',
        textAlign:'center',
    },

    imageContainer: {
        width: 200,
        height: 200,
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        borderRadius:10,
        marginLeft:15,
      },
      placeholder: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },

      iconcamera:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft:11,
      },
      camera:{
        width:18,
      },
        labelStyle: {
    color: 'white',
  },

});