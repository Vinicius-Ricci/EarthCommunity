import React from 'react';
import { View, StyleSheet, Pressable, Button} from 'react-native';
import { TextInput, Text, Spacer} from "@react-native-material/core";
import { AntDesign } from '@expo/vector-icons';
import styleGlobal from '../style/styleGlobal';
import { useNavigation } from '@react-navigation/native';

export default function SignInComponent(){

    const navigation = useNavigation();

    const SignIn = () => {

        navigation.reset({
            index: 0,
            routes: [{name: "Feed"}]
        })
    }

    return(
        <View style={styles.container}>
                <TextInput variant="standard" color = '#62D2A2' label="E-mail" style={{ margin: 25 }} />
                <TextInput variant="standard" color = '#62D2A2' label="Password" style={{ margin: 25 }} />

                    <View style={{flexDirection: 'row', margin: 25, alignItems: 'center', }}>
                        <Text variant="h5">Sign in</Text>
                        <Spacer/>
                        <Pressable style={styles.button} onPress={() => SignIn()}>
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
