import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Text, Button } from "@react-native-material/core";
import styleGlobal from '../style/styleGlobal';
import WavyBackground from 'react-native-wavy-background';

export default function WavesComponent(){
    return(
        <View style={styles.container}>
            <WavyBackground
                height={300}
                width={1000}
                amplitude={100}
                frequency={6}
                offset={150}
                color='#17B978'
                style={styles.containerWave}
            />           
        </View>
        
    )
}

const styles = StyleSheet.create({



});