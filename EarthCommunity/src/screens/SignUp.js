import React from 'react';
import { View, StyleSheet } from 'react-native';
import styleGlobal from '../style/styleGlobal';
import SignUpComponent from '../components/SignUpComponent';
import WavesComponentSignUp from '../components/WasvesComponentSignUp';

export default function SignUp(){
    return(
        <View style={styles.container}>
            <SignUpComponent />
            <WavesComponentSignUp />
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