import React from  'react';
import { Text } from "@react-native-material/core";
import { View } from 'react-native';
import AutenticationStyles from './styles';


export default function Autenticacao(){
    return(
        <View style={AutenticationStyles.container}>
            <Text variant='h1'>Welcome</Text>
            <Text variant='h6'>Login and Register</Text>
        </View>
    );
}