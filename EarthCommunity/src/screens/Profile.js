import { Text } from '@react-native-material/core';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import styleGlobal from '../style/styleGlobal';
import ProfileComponent from '../components/ProfileComponent';
import ProfilePictureComponent from '../components/ProfilePictureComponent';

export default function Profile(){
    return(
        <View style={styles.container}>
            <ProfilePictureComponent />
            <ProfileComponent />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: styleGlobal.colors.white,
      },

});