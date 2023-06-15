import React from 'react';
import { View, StyleSheet } from 'react-native';
import NewGroupComponent from '../components/NewGroupComponent';
import WavyBackground from 'react-native-wavy-background';
import styleGlobal from '../style/styleGlobal';

export default function Group(){
    return(
        <View>
          <WavyBackground
                height={300}
                width={1000}
                amplitude={100}
                frequency={6}
                offset={150}
                color='#17B978'
            />
           <NewGroupComponent />
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