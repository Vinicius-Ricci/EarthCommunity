import React from 'react';
import { View, StyleSheet } from 'react-native';
import WavyBackground from 'react-native-wavy-background';
import { Image } from 'expo-image';

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
            />
            <View style={{alignItems: 'center'}}>
                <Image source={require('../../src/img/logo-verdeescuro.svg')} style={{width: 150, height: 150, marginTop: 20}}/>  
            </View>
                   
        </View>
        
        
    )
}

const styles = StyleSheet.create({



});