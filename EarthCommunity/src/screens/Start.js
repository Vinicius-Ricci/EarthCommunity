import { Text } from '@react-native-material/core';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import styleGlobal from '../style/styleGlobal';
import AppBarTop from '../components/AppBar';
import ContainerFeed from '../components/ContainerFeed';

export default function Start(){
    return(
        <View style={styles.container}>
            <AppBarTop/>
            <ContainerFeed />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: styleGlobal.colors.white,
      },

});