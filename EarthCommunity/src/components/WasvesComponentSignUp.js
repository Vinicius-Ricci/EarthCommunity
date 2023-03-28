import React from 'react';
import { View, StyleSheet } from 'react-native';
import WavyBackground from 'react-native-wavy-background';

export default function WavesComponent(){
    return(
        <View style={styles.container}>
            <WavyBackground
                height={250}
                width={850}
                amplitude={90}
                frequency={2}
                offset={160}
                color='#17B978'
                bottom
            />     
        </View>
        
        
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-end'
    }

});