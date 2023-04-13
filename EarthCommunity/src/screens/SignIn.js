import React from 'react';
import { View, StyleSheet } from 'react-native';
import SignInComponent from '../components/SignInComponent';
import WavesComponentSignIn from '../components/WavesComponentSignIn';
import styleGlobal from '../style/styleGlobal';

export default function SignIn(){
    return(
        <View>
            <WavesComponentSignIn />
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