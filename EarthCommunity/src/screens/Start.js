import { Text } from '@react-native-material/core';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import styleGlobal from '../style/styleGlobal';

export default function Start(){
    return(
        <View style={styles.container}>
            <Text>
                Start
            </Text>
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