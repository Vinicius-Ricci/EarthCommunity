import React, { useState } from 'react';
import { TextInput, Text, Spacer} from "@react-native-material/core";
import { View, StyleSheet, Pressable, Button} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styleGlobal from '../style/styleGlobal';
import { useNavigation } from '@react-navigation/native';
import { handleSignIn } from '../API/SignInAPI';
import { IconButton } from 'react-native-paper';


export default function SignInComponent(){

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    
    const handleSignInPress = async () => {
      await handleSignIn(email, password, navigation, setError);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      }; 
    return(
        <View style={styles.container}>
         {error ? <View style={styles.errorcontainer}>
                 <Text style={styles.error}>{error}</Text> 
                </View>: null}
                <TextInput variant="standard" color="#62D2A2" label="E-mail" style={{ margin: 25 }} value={email} onChangeText={setEmail} />
                <View style={styles.passwordContainer}>
        <TextInput
          variant="standard"
          color="#62D2A2"
          label="Password"
          style={styles.passwordInput}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword} // Define o campo de senha
        />
        <IconButton
          icon={showPassword ? 'eye-off' : 'eye'}
          onPress={togglePasswordVisibility}
          style={styles.eyeIcon}
        />
      </View>


                    <View style={{flexDirection: 'row', margin: 25, alignItems: 'center', }}>
                        <Text variant="h5">Sign in</Text>
                        <Spacer/>
                        <Pressable style={styles.button} onPress={handleSignInPress}>
                            <AntDesign name="arrowright" size={24} color="#FFFFFF"/>
                            
                        </Pressable>   
                    </View>                

                    <Button variant="text" title="Sign up" onPress={() => navigation.navigate('Sign Up') } color = '#6c757d' style={{marginTop: 40}}/>                
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      margin: 20,
      marginTop: 30,
    },
    errorContainer: {
      marginRight: 20,
      marginLeft: 20,
      padding: 10,
    },
    error: {
      color: "#FF0000",
      fontSize: 16,
    },
    textInput: {
      margin: 25,
    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 25,
    },
    passwordInput: {
      flex: 1,
    },
    eyeIcon: {
      position: 'absolute',
      right: 10,
    },
    signInButtonContainer: {
      flexDirection: 'row',
      margin: 25,
      alignItems: 'center',
    },
    signInButton: {
      width: 60,
      height: 60,
      borderRadius: 60 / 2,
      justifyContent: 'center',
      alignItems: 'center',
      shadowRadius: 10,
      shadowOpacity: 0.3,
      backgroundColor: styleGlobal.colors.green2,
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
  });
  