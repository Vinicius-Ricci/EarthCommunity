import React, { useState } from 'react';
import { TextInput, Text, Spacer} from "@react-native-material/core";
import { View, StyleSheet, Pressable, Button} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styleGlobal from '../style/styleGlobal';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';

export default function SignInComponent(){

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    async function handleSignIn() {
        try {
          const response = await axios.post('https://earth-community-backend-production.up.railway.app/api/auth/user/sign-in', {
            info: {
              email: email
            },
            security: {
              password: password,
            }
          });
          console.log(response.data); 
          const user = response.data.user;
          await AsyncStorage.setItem('user', JSON.stringify(user));
          navigation.navigate('Feed')



        } catch (error) {
          console.error(error);
          setError("E-mail e/ou senha incorretos");

        }
      } 

    return(
        <View style={styles.container}>
         {error ? <View style={styles.errorcontainer}>
                 <Text style={styles.error}>{error}</Text> 
                </View>: null}
                <TextInput variant="standard" color="#62D2A2" label="E-mail" style={{ margin: 25 }} value={email} onChangeText={setEmail} />
                <TextInput variant="standard" color = '#62D2A2' label="Password" style={{ margin: 25 }} value={password} onChangeText={setPassword} />

                    <View style={{flexDirection: 'row', margin: 25, alignItems: 'center', }}>
                        <Text variant="h5">Sign in</Text>
                        <Spacer/>
                        <Pressable style={styles.button} onPress={handleSignIn}>
                            <AntDesign name="arrowright" size={24} color="#FFFFFF"/>
                            
                        </Pressable>   
                    </View>                

                    <Button variant="text" title="Sign up" onPress={() => navigation.navigate('Sign Up') } color = '#6c757d' style={{marginTop: 40}}/>                
        </View>
        
    )
}

const styles = StyleSheet.create({

    container:{
        margin: 20,
        marginTop: 30,
    },

    containerimg: {
        backgroundColor: styleGlobal.colors.green2,
        alignItems: 'center'
    },

    button: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 10,
        shadowOpacity: 0.3,
        backgroundColor: styleGlobal.colors.green2
    },

    errorcontainer:{
      marginRight:'20px',
      marginLeft:'20px',
      padding:10,
    },

    error: {
      color: "#FF0000",
      fontSize: 16,
    },
    

});
