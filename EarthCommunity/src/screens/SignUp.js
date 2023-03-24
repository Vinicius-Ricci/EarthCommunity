import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styleGlobal from '../style/styleGlobal';

export default function SignUp(){
    return(
        <View>
            <Text>SignUp</Text>
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