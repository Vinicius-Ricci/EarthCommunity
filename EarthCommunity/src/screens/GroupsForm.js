// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import NewGroupComponent from '../components/NewGroupComponent';
// import WavyBackground from 'react-native-wavy-background';
// import styleGlobal from '../style/styleGlobal';

// export default function Group(){
//     return(
//         <View>
//           <WavyBackground
//                 height={300}
//                 width={1000}
//                 amplitude={100}
//                 frequency={6}
//                 offset={150}
//                 color='#17B978'
//             />
//            <NewGroupComponent />
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         backgroundColor: styleGlobal.colors.white,
//       },

// });

import React, {  useState, useEffect, useCallback } from 'react';
import { View, Image,Button, Alert, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { TextInput } from "@react-native-material/core";
import * as ImagePicker from 'expo-image-picker';
import { firebase } from '../../config';
import styleGlobal from '../style/styleGlobal';
import { IconButton, MD3Colors } from 'react-native-paper';
import {fetchData} from '../API/GroupsAPI'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const { width } = Dimensions.get('window');


const GroupForm = () => {
  const [image, setImage] = useState(null);
  const [groupName, setGroupName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
    const [userId, setUserId] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
        const getUser = async () => {
          const userString = await AsyncStorage.getItem('user');
          const user = JSON.parse(userString);
          setUserId(user._id);
        };
    
        getUser();
      }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0,
    });

    if (!result.cancelled) {
      const source = { uri: result.uri };
      setImage(source);
    }
  };

  const uploadImage = async () => {
    try {
      const response = await fetch(image.uri);
      const blob = await response.blob();
      const filename = image?.uri?.substring(image?.uri?.lastIndexOf('/') + 1);
      const ref = firebase.storage().ref().child('picture-post/' + filename);
      await ref.put(blob);
      const downloadURL = await ref.getDownloadURL();
      return downloadURL;
    } catch (error) {
      console.log(error);
    }
  };

 

    async function handleCreateGroup() {
      const imageURL = await uploadImage();

      try{
      const response = await axios.post(`https://earth-community-backend-dev.up.railway.app/api/group/create/${userId}`, {
        name: groupName,
        image: imageURL,
        description: description,
        category: category,
        headOffice: {
          city: city,
          state: state,
        } 
      });

      setGroupName('')
      setCategory('')
      setCity('')
      setDescription('')
      setImage('')
      setState('')
  
       Alert.alert('Group created successfully!');


      console.log(response.data);
 
      navigation.navigate('Groups');
    } catch (error) {
      console.error(error);
    }
  }



  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.flex}>
          <TouchableOpacity style={styles.circleImageContainer} onPress={pickImage}>
            {image ? (
              <Image source={image} style={styles.circleImage} />
            ) : (
              <IconButton
                icon="camera"
                size={24}
                iconColor={MD3Colors.grey200}
                style={styles.cameraButton}
                onPress={pickImage}
              />
            )}
          </TouchableOpacity>
          <TextInput
            label="Nome do Grupo"
            value={groupName}
            variant="outlined"
            onChangeText={setGroupName}
            style={styles.groupname}
            color='#62D2A2'
            />
        </View>
        <TextInput
          label="Categoria"
          value={category}
          variant="outlined"
          onChangeText={setCategory}
          style={styles.input}
          color='#62D2A2'
        />
        <TextInput
          label="Descrição"
          value={description}
          variant="outlined"
          onChangeText={setDescription}
          style={styles.input}
          color="#62D2A2"
        />
        <TextInput
          label="Estado"
          value={state}
          variant="outlined"
          onChangeText={setState}
          style={styles.input}
          color='#62D2A2'
        />
        <TextInput
          label="City"
          variant="outlined"
          value={city}
          onChangeText={setCity}
          style={styles.input}
          color='#62D2A2'

        />
     <Button title="Criar grupo" onPress={handleCreateGroup} color='#62D2A2' style={{ margin: 25 }} />

      </View>
    </View>
  );
};
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
padding: 16,
},
main:{
backgroundColor:'white',
borderRadius:10,
margin:2,
padding: 20,
},
flex: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 16,
},
circleImageContainer: {
width: width * 0.2,
height: width * 0.2,
borderRadius: width * 0.19,
backgroundColor: 'gray',
justifyContent: 'center',
alignItems: 'center',
marginRight: 16,
},
circleImage: {
width: width * 0.2,
height: width * 0.2,
borderRadius: width * 0.1,
},
cameraButton: {
position: 'absolute',
top: 30,
left: 30,
backgroundColor: 'white',
borderRadius: 20,
padding: 1,
},
groupname: {
flex: 1,
height: 40,
},
input: {
width: '100%',
height: 40,
marginBottom: 30,
},
});

export default GroupForm;
