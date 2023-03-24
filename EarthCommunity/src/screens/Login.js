import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WavyBackground from "react-native-wavy-background";
import SignInComponent from '../../src/components/SignInComponent';
import WavesComponent from '../components/WavesComponent';
import styleGlobal from '../style/styleGlobal';

export default function Login(){
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