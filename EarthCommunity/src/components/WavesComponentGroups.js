import React from 'react';
import { View, StyleSheet } from 'react-native';
import WavyBackground from 'react-native-wavy-background';

export default function WavesComponent(){
    return(
        <View style={styles.container}>
            <WavyBackground
               height={150}
               width={1000}
               amplitude={-20}
               frequency={2}
               offset={120}
               color='#17B978'
            />
         
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
   
});
