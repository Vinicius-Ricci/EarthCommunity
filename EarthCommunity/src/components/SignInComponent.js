import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Button} from 'react-native';
import { TextInput, Text, Spacer} from "@react-native-material/core";
import { AntDesign } from '@expo/vector-icons';
import styleGlobal from '../style/styleGlobal';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function SignInComponent(){

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const SignIn = () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Feed"}]
        })
    }

    async function handleSignIn() {
        try {
          const response = await axios.post('https://earth-community-backend-production.up.railway.app/api/auth/user/sign-in', {
            info: {
              email: email
            },
            security: {
              password: password,
              confirmPassword: confirmPassword,
            }
          });
          console.log(response.data); // objeto JSON com informações do usuário logado
          // faça algo com a resposta, por exemplo, armazenar o token de acesso em algum lugar
        } catch (error) {
          console.error(error);
        }
      } 

    return(
        <View style={styles.container}>
                <TextInput variant="standard" color = '#62D2A2' label="E-mail" style={{ margin: 25 }} onChangeText={setEmail} />
                <TextInput variant="standard" color = '#62D2A2' label="Password" style={{ margin: 25 }} onChangeText={setPassword} />
                <TextInput variant="standard" color = '#62D2A2' label="Confirm Password" style={{ margin: 25 }} onChangeText={setConfirmPassword} />

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
    }

});
