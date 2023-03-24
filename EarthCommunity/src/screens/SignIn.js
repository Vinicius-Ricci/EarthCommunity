import React from 'react';
import { View, StyleSheet } from 'react-native';
import SignInComponent from '../components/SignInComponent';
import WavesComponent from '../components/WavesComponent';
import styleGlobal from '../style/styleGlobal';

export default function SignIn({navigation}){
    return(
        <View>
            <WavesComponent />
            <SignInComponent />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: styleGlobal.colors.white,
      },

});