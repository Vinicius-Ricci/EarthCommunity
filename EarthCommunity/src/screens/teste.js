import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
// import ModalSelector from 'react-native-modal-selector';
import { TextInput, Button, Avatar, SendIcon} from '@react-native-material/core';
import { IconButton, MD3Colors} from 'react-native-paper';

export default function Publish(){
    const [inputValue, setInputValue] = useState('');

                
    return(
        <View style={styles.container}>
            <View style={styles.publication}>
                <View style={styles.userInfoContainer}>
                    <View style={styles.flex}>
                        <Avatar style={styles.avatar} image={{ uri: "https://media.gq-magazine.co.uk/photos/620529e268071f7ecff06fac/1:1/w_1080,h_1080,c_limit/100222_Bobba_hp.jpg" }} size={48} />
                        <View>
                     <Text style={styles.username}>Nome de Usuário</Text>
                
                        </View>
                    </View>
  
<TouchableOpacity
  style={styles.button} // Aplicando estilo de opacidade com base na função validateButton()
  onPress={handleButtonClick} >
  <Text style={styles.buttonText}>Publicar</Text>
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
                        {/* Condicional- verficiar se tem imagem selecionada. Caso tenha uma imagem selecionada, será exibido na tela. Caso contrário
                        n será exibido nada na view. */}
                        <TouchableOpacity
                            onPress={pickImage}
                        >

                            {/* Condicional - verificar se tem imagem selecionada */}
                            {/* {selectedImageUri ? ( */}
                                <View>
                              <View style={styles.imageContainer}>

                            <Image source={{ uri: selectedImageUri }} style={styles.image} />
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

                            {/* ) : null} */}
{/* 
    {!selectedImageUri ? (
                         <View style={styles.iconcamera}> 
                             <IconButton
                    icon="camera"
                    style={styles.camera}
                    iconColor={MD3Colors.grey200}
                    size={20}
                />
                 <Text>Adicionar foto</Text>

                </View>
    ):null} */}
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