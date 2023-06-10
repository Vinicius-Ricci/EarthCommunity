import { Text } from '@react-native-material/core';
import React, {useState} from 'react';
import { StyleSheet, View, TouchableOpacity,Alert, Image } from 'react-native';
import styleGlobal from '../style/styleGlobal';

import AppBarTop from '../components/AppBar';
import * as ImagePicker from 'expo-image-picker';
import {firebase} from '../../config';

export default function Publish(){
  const [image,setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
 
  const pickImage =async () =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4,3],
      quality:1,
    });

    const source = {uri: result.uri};
    console.log(source);
    setImage(source);

  }
const uploadImage= async () =>{
  setUploading(true);
  const response = await fetch(image.uri)
  const blob = await response.blob();
  const filename = image.uri.substring(image.uri.lastIndexOf('/')+1);
  var ref = firebase.storage().ref().child('picture-post/' + filename).put(blob);

  try {
    await ref;

  } catch(e){
    console.log(e)
  }

  setUploading(false);
  Alert.alert(
    'Photo uploded!'
  );
  setImage(null);

};



    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={pickImage}> 
            <Text> Pick an image</Text>
            </TouchableOpacity>
            <View>
              {image && <Image source={{uri : image.uri}} style={{width:300, height:300}} />}
            <TouchableOpacity onPress={uploadImage}>
            <Text>Upload Image</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: styleGlobal.colors.white,
      },

});